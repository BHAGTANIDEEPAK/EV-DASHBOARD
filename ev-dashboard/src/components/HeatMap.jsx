import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyle } from "./ReusableStyles";
import { FaBoltLightning } from "react-icons/fa6";

// -----------------------------------------
// Data to be shown in the heat chart vechile id,trips,effic,status
// -----------------------------------------
const data = [
  { vehicleId: 1, trip: 4500, efficiency: 85, fleetStatus: "Active" },
  { vehicleId: 2, trip: 5000, efficiency: 88, fleetStatus: "Active" },
  { vehicleId: 3, trip: 4700, efficiency: 90, fleetStatus: "Inactive" },
  { vehicleId: 4, trip: 4400, efficiency: 82, fleetStatus: "Active" },
  { vehicleId: 5, trip: 4800, efficiency: 86, fleetStatus: "Active" },
  { vehicleId: 6, trip: 5300, efficiency: 89, fleetStatus: "Inactive" },
  { vehicleId: 7, trip: 5800, efficiency: 92, fleetStatus: "Active" },
  { vehicleId: 8, trip: 6000, efficiency: 93, fleetStatus: "Active" },
  { vehicleId: 9, trip: 6300, efficiency: 94, fleetStatus: "Inactive" },
  { vehicleId: 10, trip: 6580, efficiency: 95, fleetStatus: "Active" },
  { vehicleId: 11, trip: 6780, efficiency: 96, fleetStatus: "Active" },
  { vehicleId: 12, trip: 6680, efficiency: 97, fleetStatus: "Inactive" },
  { vehicleId: 13, trip: 6500, efficiency: 90, fleetStatus: "Active" },
  { vehicleId: 14, trip: 6300, efficiency: 88, fleetStatus: "Active" },
  { vehicleId: 15, trip: 5900, efficiency: 84, fleetStatus: "Inactive" },
  { vehicleId: 16, trip: 5700, efficiency: 83, fleetStatus: "Active" },
  { vehicleId: 17, trip: 5500, efficiency: 87, fleetStatus: "Active" },
  { vehicleId: 18, trip: 5300, efficiency: 85, fleetStatus: "Inactive" },
  { vehicleId: 19, trip: 5100, efficiency: 81, fleetStatus: "Active" },
  { vehicleId: 20, trip: 5090, efficiency: 89, fleetStatus: "Active" },
  { vehicleId: 21, trip: 5300, efficiency: 87, fleetStatus: "Inactive" },
  { vehicleId: 22, trip: 5800, efficiency: 92, fleetStatus: "Active" },
  { vehicleId: 23, trip: 6000, efficiency: 93, fleetStatus: "Active" },
  { vehicleId: 24, trip: 6300, efficiency: 94, fleetStatus: "Inactive" },
  { vehicleId: 25, trip: 6780, efficiency: 96, fleetStatus: "Active" },
  { vehicleId: 26, trip: 6500, efficiency: 90, fleetStatus: "Active" },
  { vehicleId: 27, trip: 6300, efficiency: 88, fleetStatus: "Active" },
  { vehicleId: 28, trip: 6500, efficiency: 85, fleetStatus: "Inactive" },
  { vehicleId: 29, trip: 6700, efficiency: 89, fleetStatus: "Active" },
  { vehicleId: 30, trip: 7000, efficiency: 91, fleetStatus: "Active" },
  { vehicleId: 31, trip: 7300, efficiency: 94, fleetStatus: "Inactive" },
  { vehicleId: 32, trip: 7500, efficiency: 95, fleetStatus: "Active" },
  { vehicleId: 33, trip: 7700, efficiency: 96, fleetStatus: "Active" },
  { vehicleId: 34, trip: 8090, efficiency: 97, fleetStatus: "Inactive" },
  { vehicleId: 35, trip: 8190, efficiency: 98, fleetStatus: "Active" },
  { vehicleId: 36, trip: 7990, efficiency: 99, fleetStatus: "Active" },
  { vehicleId: 37, trip: 7700, efficiency: 90, fleetStatus: "Active" },
  { vehicleId: 38, trip: 7500, efficiency: 88, fleetStatus: "Active" },
  { vehicleId: 39, trip: 7300, efficiency: 84, fleetStatus: "Inactive" },
  { vehicleId: 40, trip: 7000, efficiency: 83, fleetStatus: "Active" },
  { vehicleId: 41, trip: 6700, efficiency: 87, fleetStatus: "Active" },
  { vehicleId: 42, trip: 6500, efficiency: 85, fleetStatus: "Inactive" },
  { vehicleId: 43, trip: 6300, efficiency: 81, fleetStatus: "Active" },
  { vehicleId: 44, trip: 6500, efficiency: 89, fleetStatus: "Active" },
  { vehicleId: 45, trip: 6780, efficiency: 92, fleetStatus: "Active" },
  { vehicleId: 46, trip: 6300, efficiency: 93, fleetStatus: "Inactive" },
  { vehicleId: 47, trip: 6000, efficiency: 95, fleetStatus: "Active" },
  { vehicleId: 48, trip: 5800, efficiency: 96, fleetStatus: "Active" },
  { vehicleId: 49, trip: 5490, efficiency: 97, fleetStatus: "Inactive" },
  { vehicleId: 50, trip: 6000, efficiency: 98, fleetStatus: "Active" },
  // Add more data objects with vehicleId, trip, efficiency, and fleetStatus as needed
];

// -----------------------------------------
// heat chart Component
// -----------------------------------------
//marker

// -----------------------------------------
// In the tool tip for areas are there

/* <Area
animationBegin={800}
animationDuration={2000}
type="monotone"
dataKey="trip"
stroke="#3AAE4A"
fill="#5880233d"
strokeWidth={4}
/> */

//for every there are 4 data id,trip,eff,status

// -----------------------------------------

export default function Earnings() {
  return (
    <Section>
      <div className="top">
        <div className="info">
          <FaBoltLightning />
          <h6>EVs</h6>
          <h1>36</h1>
          <div className="growth">
            <span>10% of fleet</span>
          </div>
        </div>
      </div>

      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <Tooltip cursor={false} />

            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="vehicleId"
              stroke="#3AAE4A"
              fill="#5880233d"
              strokeWidth={4}
            />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="trip"
              stroke="#3AAE4A"
              fill="#5880233d"
              strokeWidth={4}
            />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="efficiency"
              stroke="#3AAE4A"
              fill="#5880233d"
              strokeWidth={4}
            />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="fleetStatus"
              stroke="#3AAE4A"
              fill="#5880233d"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}

//styling
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyle}
  padding: 2rem 0 0 0;
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      h1 {
        font-size: 2rem;
      }
      .growth {
        background-color: #d7e41e1d;
        padding: 0.5rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #3aae4a;
          span {
            color: black;
          }
        }
        span {
          color: #3aae4a;
        }
      }
    }
  }
  .chart {
    height: 70%;
    .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
  }
`;
