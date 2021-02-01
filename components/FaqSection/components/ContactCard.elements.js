import styled from 'styled-components'

export const Inner = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem 2rem;
  background: #5a189a;
  border-radius: 1rem;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 960px) {
    margin-bottom: 24px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;

  @media screen and (max-width: 960px) {
    font-size: 20px;
  }
`

export const SubTitle = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 2rem;
  color: #fff;
`

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  min-height: 2.5rem;
  min-width: 2.5rem;
  border-radius: 1.25rem;
  background: #e76f51;
`

export const ContactInfo = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
`
