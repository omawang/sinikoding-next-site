import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  background: #fff;
  padding: 4rem 0;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background: #F9FAFA;
    clip-path: polygon(0 0, 0 100%, 100% 100%);
    z-index: 2;

    @media screen and (max-width: 960px) {
      height: 3rem;
    }
  }
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 3rem;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

export const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 3rem;

  @media screen and (max-width: 960px) {
    margin-bottom: 2rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e76f51;
  width: 6rem;
  height: 6rem;
  border-radius: 3rem;
`

export const Title = styled.h3`
  margin-top: 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #023047;
  text-align: center;

  @media screen and (max-width: 960px) {
    font-size: 1.25rem;
  }
`

export const Desc = styled.p`
  margin-top: 1.5rem;
  font-size: 1rem;
  line-height: 2rem;
  color: #3f6273;
  text-align: center;
`
