import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'

export const FooterSec = styled.footer`
  background: #5a189a;
  padding: 32px 0;
  display: flex;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`

export const Copyright = styled.p`
  color: #fff;
  font-size: 16px;

  @media screen and (max-width: 960px) {
    margin-bottom: 24px;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  height: 100%;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const NavItem = styled.li`
  margin: 0 32px;

  &:first-child {
    margin: 0 32px 0 0;
  }

  &:last-child {
    margin: 0 0 0 32px;
  }

  @media screen and (max-width: 960px) {
    margin: 0;

    &:first-child {
      margin: 0;
    }

    &:last-child {
      margin: 0;
    }
  }
`

export const NavLink = styled.a`
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    color: #ff896b;
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
    padding: 0.5rem;
    width: 100%;
    display: table;
  }
`
