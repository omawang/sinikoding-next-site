import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  background: #5a189a;
  height: calc(100vh - 80px);

  @media screen and (max-width: 960px) {
    overflow: hidden;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 64px;
    background: #fff;
    clip-path: polygon(0 0, 0 100%, 100% 100%);
    z-index: 2;

    @media screen and (max-width: 960px) {
      height: 48px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    padding: 32px 0;

    width: 100%;
  }
`

export const TextWrapper = styled.div`
  width: 360px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 325px;
  }
`

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: #fff;

  @media screen and (max-width: 960px) {
    font-size: 32px;
    text-align: left;
  }
`

export const Description = styled.p`
  margin-top: 16px;
  font-size: 16px;
  line-height: 32px;
  color: #fff;

  @media screen and (max-width: 960px) {
    margin-top: 24px;
  }
`

export const Img = styled.img`
  max-width: 500px;

  @media screen and (max-width: 960px) {
    max-width: 342px;
  }
`
