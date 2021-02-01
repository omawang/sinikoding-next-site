import Link from 'next/link'
import { Container } from 'styles/globalStyles'

import {
  FooterSec,
  Content,
  Copyright,
  NavMenu,
  NavItem,
  NavLinkScroll,
} from './Footer.elements'
const Footer = () => {
  return (
    <FooterSec>
      <Container>
        <Content>
          <Copyright>
            Copyright {new Date().getFullYear()} - SiniKoding
          </Copyright>

          <NavMenu>
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
          </NavMenu>
        </Content>
      </Container>
    </FooterSec>
  )
}

export default Footer
