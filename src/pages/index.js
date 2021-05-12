import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import bannerimg from "../images/homebanner.png"
import Features from "./features"
import Benefit from "../components/Benefit"
import TwitFeed from "../components/TwitFeed"
import Spacer from "../components/Spacer"
const HomeContainer = styled.section`
  display: flex;
  justify-content: space-between;
  font-family: "DM Sans", sans-serif;
`

const HomeContent = styled.div`
  display: flex;
  max-width: 1290px;
`

const TextSet = styled.div`
  margin-top: 3.5rem;
  padding: 2rem;
  flex-shrink: 0;
  width: 60%;
  margin-left: 200px;

  h1 {
    font-size: 4.6rem;
    font-weight: 800;
    color: #151515;
  }

  p {
    font-size: 1.4rem;
    margin-bottom: 2.5rem;
    letter-spacing: 1px;
  }
`

const ButtonContainer = styled.div`
  border: 2px solid #2b2e4a;
  width: 75%;
  border-radius: 2rem;
  padding: 1rem;
  position: relative;
  margin-bottom: 2.8rem;
  input {
    border: none;
    outline: none;
    width: 65%;
  }

  button {
    display: inline-block;
    background: #000;
    color: #fff;
    border: none;
    width: 30%;
    height: 40px;
    position: absolute;
    top: 6px;
    right: 9px;
    border-radius: 2rem;
    font-family: "DM Sans", sans-serif;
    font-size: 25px;
  }
`

const LogoContainer = styled.div`
  padding: 1px;
  display: flex;
  width: 100vw;

  .google__play {
    max-width: 100%;
    width: 200px;
    height: 100%;
    margin-top: 1rem;
    margin-right: 2rem;
  }
  .app__store {
    max-width: 100%;
    width: 180px;
    height: 100%;
    margin-top: 1rem;
    margin-right: 2rem;
  }
`

const ImageSet = styled.div`
  flex-shrink: 0;
  margin-top: -165px;
  margin-left: -800px;
  z-index: -1;
  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0px;
  }
`

export default function Home({ data }) {
  console.log(data)
  return (
    <div>
      <HomeContainer>
        <HomeContent>
          <TextSet>
            <h1>The only kit you need to be at your A-Game today 💯.</h1>
            <p>
              Up your productivity by a notch - eliminate distractions and
              cut-off procrastination. Immerse is launching this October Sign-up
              now to enjoy exclusive features at launch date.
            </p>
            <ButtonContainer>
              <form>
                <input type="email" name="email" />
                <button type="submit">Sign Up</button>
              </form>
            </ButtonContainer>
            <LogoContainer>
              <Img
                fluid={data.gpicon.childImageSharp.fluid}
                className="google__play"
              />
              <Img
                fluid={data.asicon.childImageSharp.fluid}
                className="app__store"
              />
            </LogoContainer>
          </TextSet>
          <ImageSet>
            <img src={bannerimg} />
          </ImageSet>
        </HomeContent>
      </HomeContainer>
      <Spacer />
      <Features />
      <Spacer />
      <Benefit />
      <Spacer />
      <TwitFeed />
    </div>
  )
}

export const query = graphql`
  query AppIconGP {
    gpicon: file(relativePath: { eq: "gps.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    asicon: file(relativePath: { eq: "ias.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bannerimg: file(relativePath: { eq: "homebanner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
