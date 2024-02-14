import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

//marker
// -----------------------------------------
// Navbar Component
// -----------------------------------------

export default function Navbar() {
  return (
    <Nav>
      <div className="title">
        <h4>Hi Deepak,</h4>
        <h1>
          Welcome to <span>MoveInSync Tech</span>
        </h1>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
    </Nav>
  );
}

//style section

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #3aae4a;
        letter-spacing: 0.2rem;
        font-family: "Poppins", sans-serif;
      }
    }
  }
  .search {
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: #3aae4a;
    }
    input {
      background-color: transparent;
      border: none;
      color: #3aae4a;
      font-family: "Poppins", sans-serif;
      letter-spacing: 0.3rem;
      &::placeholder {
        color: #3aae4a;
      }
      &:focus {
        outline: none;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;
          margin: 1rem 0;
        }
      }
    }
  }
`;
