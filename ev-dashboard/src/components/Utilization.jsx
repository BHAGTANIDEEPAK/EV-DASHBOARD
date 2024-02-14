import React from "react";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import evusrimg from "../assets/evusrimg.jpeg";
import { cardStyle } from "./ReusableStyles";
import { FaBoltLightning } from "react-icons/fa6";

//marker
// -----------------------------------------
// Utilization Component
// -----------------------------------------

export default function Transfers() {
  const transactions = [
    {
      image: evusrimg,
      name: "Trips/Day",
      time: "Today, 16:36",
      amount: "3.5 ",
    },
    {
      image: evusrimg,
      name: "KM/Trip",
      time: "Today, 08:49",
      amount: "25 ",
    },
    {
      image: evusrimg,
      name: "Daily Utilization",
      time: "Yesterday, 14:36",
      amount: "13 hrs",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Utilization</h2>
      </div>
      <div className="transactions">
        {transactions.map((transaction) => {
          return (
            <div className="transaction">
              <div className="transaction__title">
                <div className="transaction__title__image">
                  <FaBoltLightning />
                </div>
                <div className="transaction__title__details">
                  <h3>{transaction.name}</h3>
                  <h5>{transaction.time}</h5>
                </div>
              </div>
              <div className="transaction__amount">
                <span>{transaction.amount}</span>
              </div>
            </div>
          );
        })}
      </div>
      <a className="view" href="#">
        View all <HiArrowNarrowRight />
      </a>
    </Section>
  );
}

//STYLING

const Section = styled.section`
  ${cardStyle};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: #3aae4a;
      font-family: "Poppins", sans-serif;
      letter-spacing: 0.3rem;
    }
  }
  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &__title {
        display: flex;
        gap: 1rem;
        &__image {
          img {
            height: 2.5rem;
            clip-path: circle();
            /* border-radius: 50%; */
          }
        }
        &__details {
        }
      }
      &__amount {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
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
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #3aae4a;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;
