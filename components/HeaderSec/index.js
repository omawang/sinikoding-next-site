import { Inner, Title, Desc } from './HeaderSec.elements'

const HeaderSec = ({ title, desc }) => {
  return (
    <Inner>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </Inner>
  )
}

export default HeaderSec
