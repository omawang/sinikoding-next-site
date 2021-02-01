import styled from 'styled-components'
import uiColor from '../../styles/uiColor'

export const HeroSec = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  /* height: calc(100vh - 80px); */
  background: linear-gradient(180deg, #fff 0%, #f5f7f8 100%);
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: #fff;
    clip-path: polygon(0 50%, 0 100%, 100% 100%);
    z-index: 2;

    @media screen and (max-width: 960px) {
      height: 100px;
    }
  }
`

export const HeroRow = styled.div`
  display: flex;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
  flex-wrap: wrap;
  height: 100%;
  align-items: center;
`

export const HeroColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: ${({ flexBasis }) => flexBasis};
  max-width: ${({ flexBasis }) => flexBasis};
  padding: 0 1rem;
  height: 100%;
  justify-content: center;

  @media screen and (max-width: 960px) {
    align-items: center;
    flex-basis: 100%;
    max-width: 100%;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    /* align-items: center; */
  }
`

export const TopLine = styled.h2`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
`

export const Heading = styled.h1`
  max-width: 440px;
  margin-bottom: 24px;
  font-size: 48px;
  font-weight: 800;
  line-height: 65.47px;
  font-weight: 600;
  color: ${uiColor.textPrimary};

  @media screen and (max-width: 960px) {
    /* text-align: center; */
    font-size: 40px;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 32px;
  color: ${uiColor.textBody};

  @media screen and (max-width: 960px) {
    /* text-align: center; */
  }
`

export const ImgWrapper = styled.div`
  height: calc(100vh - 80px);

  @media screen and (max-width: 960px) {
    height: 342px;
    margin-top: 64px;
  }
`

export const Img = styled.img`
  height: calc(100vh - 80px);

  @media screen and (max-width: 960px) {
    height: 342px;
  }

  @media screen and (max-width: 960px) {
    height: 342px;
  }
`
