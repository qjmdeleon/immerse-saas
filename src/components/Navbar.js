import React, { useState } from "react"
import styled from "styled-components"
import { Navdata } from "../data/Navbar-data"
import { Link } from "gatsby"

//styles

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

const NavContainer = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 82px;
  background: rgba(0, 0, 0, 0);
  font-family: "DM Sans", sans-serif;
`

const NavLogo = styled.div`
  padding: 2px;
  justify-content: flex-start;

  h1 {
    color: #000;
  }

  @media ${device.laptop} {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(20%, 8%);
  }
`

const NavMenuList = styled.div`
  width: 80vw;

  ul {
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: flex-end;
    grid-gap: 65px;
    list-style: none;
  }

  @media ${device.laptop} {
    display: none;
  }
`

const NavResMenu = styled.div`
  display: none;

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: fixed;
    height: 100vh;
    width: 100%;
    background: #000;
    color: #fff;
    top: 0;
    right: 0;
    transition: transform 300ms;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    ul {
      list-style: none;
    }
    li {
      margin-bottom: 4rem;
    }

    a {
      text-decoration: none;
      color: #fff;
    }
    z-index: 5;
  }
`

const ResBars = styled.button`
  display: none;

  @media ${device.laptop} {
    position: fixed;
    top: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    height: 1.3rem;
    background: transparent;
    justify-content: space-around;
    border: none;
    cursor: pointer;
    z-index: 6;

    div {
      width: 1.6rem;
      height: 0.2rem;
      background: ${({ isOpen }) => (isOpen ? "#fff" : "#000")};
      border-radius: 5px;
      transform-origin: 1px;
      position: relative;
      transition: opacity 300ms, transform 300ms;

      :first-child {
        transform: ${({ isOpen }) => (isOpen ? "rotate(35deg)" : "rotate(0)")};
      }

      :nth-child(2) {
        opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      }

      :nth-child(3) {
        transform: ${({ isOpen }) => (isOpen ? "rotate(-35deg)" : "rotate(0)")};
      }
    }
  }
`

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className="nav__main">
      <NavContainer>
        <NavLogo>
          <h1>Logo test</h1>
        </NavLogo>
        <NavMenuList>
          <ul>
            {Navdata.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url}>{item.title}</Link>
                </li>
              )
            })}
          </ul>
        </NavMenuList>
        <ResBars isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </ResBars>
        <NavResMenu isOpen={isOpen}>
          <ul>
            {Navdata.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url}>{item.title}</Link>
                </li>
              )
            })}
          </ul>
        </NavResMenu>
      </NavContainer>
    </nav>
  )
}

export default Navbar
