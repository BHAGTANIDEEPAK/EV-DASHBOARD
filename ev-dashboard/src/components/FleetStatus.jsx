import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { IoMdCash } from "react-icons/io";
import { cardStyle } from "./ReusableStyles";
import { IoTimer } from "react-icons/io5";
import { LuTimer } from "react-icons/lu";

//marker
// -----------------------------------------
// FleetStatus Component
// -----------------------------------------

export default function FAQ() {
  const faqs = [
    {
      icon: <IoTimer />,
      text: "LONG  5",
    },
    {
      icon: <MdTimelapse />,
      text: "MEDIUM  4",
    },
    {
      icon: <LuTimer />,
      text: "SHORT 3",
    },
  ];

  return (
    <Section>
      <div className="title">
        <h2>Fleet Charged Status(Trip Ready EVs)</h2>
      </div>
      <div className="faqs">
        {faqs.map((faq) => {
          return (
            <div className="faq">
              <div className="info">
                {faq.icon}
                <h4>{faq.text}</h4>
              </div>
              <IoIosArrowForward />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

//Styling the component

const Section = styled.section`
  ${cardStyle};
  .title {
    h2 {
      color: #3aae4a;
      font-family: "Poppins", sans-serif;
      letter-spacing: 0.3rem;
    }
  }
  .faqs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .faq {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      .info {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      svg {
        font-size: 1.4rem;
      }
      &:nth-of-type(2) {
        border-top: 0.01rem solid #6c6c6e;
        border-bottom: 0.01rem solid #6c6c6e;
        padding: 0.8rem 0;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    svg {
      font-size: 2rem !important;
    }
  }
`;
