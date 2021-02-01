import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaTimes, FaBars } from 'react-icons/fa'

import {
  Nav,
  NavbarContainer,
  NavLogoLink,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinkScroll,
  NavBtnLink,
} from './Navbar.elements'
import { Button } from '../../styles/globalStyles'

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [screenLg, setScreenLg] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setScreenLg(false)
    } else {
      setScreenLg(true)
    }
  }, [])

  return (
    <Nav>
      <NavbarContainer>
        <Link href="/">
          <NavLogoLink>
            <img src="/assets/logo.png" />
          </NavLogoLink>
        </Link>

        <MobileIcon onClick={toggleSidebar}>
          {showSidebar ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <NavMenu showSidebar={showSidebar}>
          <NavItem>
            <NavLinkScroll
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              Beranda
            </NavLinkScroll>
          </NavItem>
          <NavItem>
            <NavLinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              Tentang
            </NavLinkScroll>
          </NavItem>
          <NavItem>
            <NavLinkScroll
              activeClass="active"
              to="learning"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              Materi
            </NavLinkScroll>
          </NavItem>
          <NavItem>
            <NavLinkScroll
              activeClass="active"
              to="faq"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              FAQ
            </NavLinkScroll>
          </NavItem>
          <NavItem>
            <NavLinkScroll
              activeClass="active"
              to="join"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              Gabung
            </NavLinkScroll>
          </NavItem>

          {/* <NavItemBtn>
            <Link href="/asd">
              <NavBtnLink>
                <Button big={!screenLg} fontBig={!screenLg}>
                  Sign Up
                </Button>
              </NavBtnLink>
            </Link>
          </NavItemBtn> */}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
