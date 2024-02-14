import React from "react";
import styled from "styled-components";
import evimg from "../assets/evimg.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyle } from "./ReusableStyles";

//marker
// -----------------------------------------
// profile Component
// -----------------------------------------

export default function Profile() {
  return (
    <Section>
      <div className="image">
        <img src={evimg} alt="" />
      </div>
      <div className="title">
        <h2>Micro EV</h2>
        <h2>
          <HiOutlineLocationMarker /> Banglore,India
        </h2>
      </div>
      <div className="info">
        <div className="container">
          <h5>Days at work</h5>
          <h3>28</h3>
        </div>
        <div className="container">
          <h5>Rides</h5>
          <h1>427</h1>
        </div>
        <div className="container">
          <h5>Hours</h5>
          <h3>76</h3>
        </div>
      </div>
    </Section>
  );
}

//Styling

const Section = styled.section`
  ${cardStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      height: 8rem;
      width: 22rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h2,
    h5 {
      color: #3aae4a;
      font-family: "Poppins", sans-serif;
      letter-spacing: 0.3rem;
    }
    h5 {
      letter-spacing: 0.2rem;
    }
  }
  .info {
    display: flex;
    gap: 1rem;
    .container {
      text-align: center;
    }
  }
`;
