import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { Container } from '../../styles/globalStyles'

export const Nav = styled.nav`
  background: #5a189a;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 999;
`

export const NavbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`

export const NavLogoLink = styled.a`
  cursor: pointer;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-18px, 30px);
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  height: 100%;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ showSidebar }) => (showSidebar ? 0 : '-100%')};
    background-color: #5a189a;
    transition: all 0.5s ease;
  }
`

export const NavItem = styled.li`
  height: 100%;
  border-bottom: 2px solid transparent;
  margin: 0 32px;

  &:first-child {
    margin: 0 32px 0 0;
  }

  &:last-child {
    margin: 0 0 0 32px;
  }

  &:hover {
    border-bottom: 5px solid #ff896b;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    &:first-child {
      margin: 0;
    }

    &:last-child {
      margin: 0;
    }

    &:hover {
      border: none;
    }
  }
`

export const NavItemBtn = styled.li`
  display: flex;
  height: 80px;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`

export const NavLink = styled.a`
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    color: #ff896b;
  }

  &.active {
    color: #ff896b;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`

export const NavLinkScroll = styled(LinkScroll)`
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    color: #ff896b;
  }

  &.active {
    color: #ff896b;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`

export const NavBtnLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  height: 100px;
  width: 100%;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`
