import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  background: #5a189a;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background: #fff;
    clip-path: polygon(0 0, 0 100%, 100% 100%);
    z-index: 2;

    @media screen and (max-width: 960px) {
      height: 3rem;
    }
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 80px);

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

export const ColumLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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

export const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BannerImg = styled.img`
  height: auto;
  width: 100%;
`
