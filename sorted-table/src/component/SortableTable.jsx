import React, { useState } from 'react';
import data from './data.json';
import styled from 'styled-components'; // Import styled-components library for styling



// Styled components for table layout
const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: center;
`;

const TableCell = styled.td`
  padding: 8px;
  text-align: center;
`;

// SortableTable component
const SortableTable = () => {
  // State variables
  const [sortedData, setSortedData] = useState(data); // State to store sorted data
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' }); // State to store sort configuration
  const [searchTerm, setSearchTerm] = useState(''); // State to store search term
  const columns = Object.keys(data[0]); // Extract column names from sample data

  // Function to sort data based on a key
  const sortBy = (key) => {
    let direction = 'asc'; // Default sorting direction
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'; // Toggle sorting direction if already sorted by the same key
    }
    // Perform sorting
    const sorted = [...sortedData].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1; // Compare values for ascending order
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1; // Compare values for descending order
      return 0;
    });
    setSortedData(sorted); // Update sorted data
    setSortConfig({ key, direction }); // Update sort configuration
  };

  // Function to handle sorting button click
  const handleSortClick = (key) => {
    sortBy(key); // Call sortBy function with the clicked column key
  };

  // Function to handle search
  const handleSearch = () => {
    // Filter data based on search term
    const filteredData = data.filter((item) =>
      String(item['vehicleId']).toLowerCase().includes(searchTerm.toLowerCase())
    );
    // If search results are found, update sorted data; otherwise, show an alert
    if (filteredData.length > 0) {
      setSortedData(filteredData);
    } else {
      alert('Vehicle ID not found');
    }
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term state
  };

  // Render component
  return (
    <>
      {/* Search and sort controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        {/* Dropdown for selecting sort column */}
        <div>
          <label htmlFor="sortSelect">Sort by:</label>
          <select id="sortSelect" onChange={(e) => handleSortClick(e.target.value)}>
            {columns.map((column) => (
              <option key={column} value={column}>
                {column}
              </option>
            ))}
          </select>
        </div>
        {/* Input field for search term and search button */}
        <div>
          <input
            type="text"
            placeholder="Enter Vehicle ID to search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      {/* Table component */}
      <TableWrapper>
        <Table>
          {/* Table headers */}
          <thead>
            <tr>
              {columns.map((column) => (
                <TableHeader key={column}>
                  {column}
                  {/* Sort buttons for each column */}
                  <div>
                    <button onClick={() => handleSortClick(column)}>↑</button>
                    <button onClick={() => handleSortClick(column)}>↓</button>
                  </div>
                </TableHeader>
              ))}
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {sortedData.map((item) => (
              <TableRow key={item.vehicleId}>
                {columns.map((column) => (
                  <TableCell key={column}>{item[column]}</TableCell>
                ))}
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </>
  );
};

export default SortableTable;