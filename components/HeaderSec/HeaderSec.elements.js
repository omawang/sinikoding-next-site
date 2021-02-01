import styled from 'styled-components'

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  max-width: 505px;
`

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #023047;
  text-align: center;

  span {
    color: #ff896b;
  }

  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }
`

export const Desc = styled.p`
  margin-top: 1.5rem;
  font-size: 1rem;
  line-height: 2rem;
  color: #3f6273;
  text-align: center;
`
