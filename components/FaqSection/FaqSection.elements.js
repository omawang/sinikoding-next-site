import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  width: 100%;
  background: #fff;
  padding: 4rem 0;

  /* &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background: red;
    clip-path: polygon(0 0, 0 100%, 100% 100%);
    z-index: 2;

    @media screen and (max-width: 960px) {
      height: 3rem;
    }
  } */
`

export const MainTitle = styled.h2`
  font-size: 2rem;
  color: #023047;
  margin-bottom: 1.5rem;
  text-align: center;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
`

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  border: 1px solid #b8c5cb;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
`

export const ListItemHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ListItemBody = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 2rem;
  color: #023047;
`

export const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #023047;
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2.5rem;
  min-height: 2.5rem;
  border-radius: 1.25rem;
  background-color: #d1dfe5;
  transition: 0.3s all ease;
`
