import React from "react";
import styled from "styled-components";
import { cardStyle } from "./ReusableStyles";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { FaCar } from "react-icons/fa";
import { MdOutlineCo2 } from "react-icons/md";
import { IoIosSpeedometer } from "react-icons/io";

//marker
// -----------------------------------------
// Analytics Component
// -----------------------------------------

export default function Analytics() {
  return (
    <Section>
      <div className="analytic">
        <div className="content">
          <h5>Trips Completed</h5>
          <h2>321</h2>
        </div>
        <div className="logo">
          <FaCar />
        </div>
      </div>
      <div className="analytic">
        <div className="content">
          <h5>Carbon Emission</h5>
          <h2>3600Kg</h2>
        </div>
        <div className="logo">
          <MdOutlineCo2 />
        </div>
      </div>
      <div className="analytic">
        <div className="content">
          <h5>New Clients</h5>
          <h2>321</h2>
        </div>
        <div className="logo">
          <BiGroup />
        </div>
      </div>
      <div className="analytic">
        <div className="content">
          <h5>Green KM</h5>
          <h2>3231</h2>
        </div>
        <div className="logo">
          <IoIosSpeedometer />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyle};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5 ease-in-out;
    &:hover {
      background-color: #00d084;
      color: black;
      svg {
        color: white;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font: 1.4rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    grid-template-columns: repeat() (auto-fill, minmax(220px, 1fr));
    .analytic {
      &::nth-of-type(3),
      &::nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;
