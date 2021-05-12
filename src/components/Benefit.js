import React from "react"
import styled from "styled-components"
import wl from "../images/workload.png"
import dist from "../images/dist.png"
import notes from "../images/notes.png"

const BenefitMain = styled.section`
  display: flex;
  justify-content: center;
`

const BenefitContainer = styled.div`
  width: 75vw;

  ul {
    display: flex;
    list-style: none;
    text-align: center;

    li:nth-child(2) {
      border-right: 1px solid #bbbbbb;
      border-left: 1px solid #bbbbbb;
    }

    img {
      width: 42px;
      height: 42px;
    }

    p {
      padding: 0 5rem;
    }
  }
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "DM Sans", sans-serif;
`

const Benefit = () => {
  return (
    <BenefitMain>
      <BenefitContainer>
        <ul>
          <li>
            <img src={wl} />
            <TextContainer>
              <h3>Workload Planning</h3>
              <p>
                Save a lot of time by mapping-out all your tasks and getting
                them done one-by-one
              </p>
            </TextContainer>
          </li>
          <li>
            <img src={dist} />
            <TextContainer>
              <h3>Lock Distractions</h3>
              <p>
                Distractions does a lot to your overall productiveness Immerse
                is here to help you with that
              </p>
            </TextContainer>
          </li>
          <li>
            <img src={notes} />
            <TextContainer>
              <h3>Save notes and docs</h3>
              <p>
                Get them when you need them. Immerse lets you write and save
                important notes.
              </p>
            </TextContainer>
          </li>
        </ul>
      </BenefitContainer>
    </BenefitMain>
  )
}

export default Benefit
