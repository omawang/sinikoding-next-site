import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  background: #f9fafa;
  padding: 4rem 0;

  &:after {
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
  margin-top: 3rem;
`

export const ContentItem = styled.div`
  display: flex;
  flex-direction: ${({ imgFirst }) => (imgFirst ? 'row' : 'row-reverse')};
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    margin-bottom: 2rem;
  }
`

export const Img = styled.img`
  max-width: 569px;

  @media screen and (max-width: 960px) {
    max-width: 324px;
    margin-bottom: 1.5rem;
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 488px;
`

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #023047;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 960px) {
    font-size: 1.25rem;
  }
`

export const Desc = styled.p`
  font-size: 1rem;
  line-height: 2rem;
  color: #3f6273;
  margin-bottom: 1.5rem;
`

export const List = styled.ul`
  margin-left: 1rem;
`

export const ListItem = styled.li`
  font-size: 1rem;
  line-height: 2rem;
  color: #3f6273;
`
