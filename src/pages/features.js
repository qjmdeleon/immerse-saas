import React from "react"
import styled from "styled-components"
import phone from "../images/phone-mockup.png"
import blue from "../images/blue.png"
import red from "../images/red.png"
import green from "../images/green.png"

const FeaturedMain = styled.div`
  display: flex;
  justify-content: center;
`
const FeaturedContainer = styled.div`
  padding: 1.5rem;
  max-width: 1290px;
  display: flex;
`

const TextContainer = styled.div`
  padding: 1px;
  font-family: "DM Sans", sans-serif;
  h2 {
    padding-left: 40px;
    font-size: 2.5rem;
  }

  ul {
    list-style: none;
  }

  li {
    display: flex;

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
    }

    p {
      font-size: 1.2rem;
      font-weight: 100;
    }

    .image__container {
      display: flex;
      align-items: center;
    }
    img {
      width: 35px;
      height: 35px;
      margin-right: 1.7rem;
    }
  }
`

const ImageContainer = styled.div`
  margin-top: 2.6rem;
`
const Description = styled.div``

export default function Features({ data }) {
  return (
    <FeaturedMain>
      <FeaturedContainer>
        <ImageContainer>
          <img src={phone} />
        </ImageContainer>
        <TextContainer>
          <h2>Smartly monitor, adjust and prioritize all your tasks</h2>
          <ul>
            <li>
              <div className="image__container">
                <img src={blue} />
              </div>
              <Description>
                <h3>Task Completion</h3>
                <p>
                  Enable you to efficiently finish tasks via priority labeling
                  and task-completion timer.
                </p>
              </Description>
            </li>
            <li>
              <div className="image__container">
                <img src={red} />
              </div>
              <Description>
                <h3>Eliminate Distractions</h3>
                <p>
                  Stave-off attention grabbing notifications and temporarily
                  disable time-consuming apps that reduces your effectivity.
                </p>
              </Description>
            </li>
            <li>
              <div className="image__container">
                <img src={green} />
              </div>
              <Description>
                <h3>Task Completion</h3>
                <p>
                  Create a modularized storage for your important notes and
                  documents
                </p>
              </Description>
            </li>
          </ul>
        </TextContainer>
      </FeaturedContainer>
    </FeaturedMain>
  )
}
