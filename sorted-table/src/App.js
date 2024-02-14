import React from 'react';
import './App.css';
import SortableTable from './component/SortableTable';

function App() {
  return (
   <div className="App" style={{ textAlign: 'center' }}>
      <h1>Vehicle Level Utilization</h1>
      <SortableTable />
    </div>
    
  );
}

export default App;
