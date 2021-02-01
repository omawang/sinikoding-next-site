import styled, { createGlobalStyle } from 'styled-components'
import uiColor from './uiColor'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
  }
`

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 64px;
  padding-left: 64px;

  @media screen and (max-width: 960px) {
    padding-right: 24px;
    padding-left: 24px;
  }
`

export const Button = styled.button`
  border-radius: 32px;
  background-color: ${uiColor.primary};
  padding: ${({ big }) => (big ? '16px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${uiColor.secondary};
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`

export default GlobalStyle
