import { Container } from 'styles/globalStyles'
import Slide from 'react-reveal/Slide'
import {
  Section,
  Content,
  ColumLeft,
  Title,
  Description,
  ColumnRight,
  BannerImg,
} from './Banner.elements'

const Banner = () => {
  return (
    <Section>
      <Container>
        <Content>
          <ColumLeft>
            <Slide left>
              <Title>Langkah Awal Menjadi Coder Profesional</Title>
              <Description>
                Belajar coding front end & backend gratis dari awal hingga mahir
                di SiniKoding tanpa pusing biaya dan dibantu disalurkan kerja!
              </Description>
            </Slide>
          </ColumLeft>
          <ColumnRight>
            <Slide right>
              <BannerImg src="/assets/banner.png" />
            </Slide>
          </ColumnRight>
        </Content>
      </Container>
    </Section>
  )
}

export default Banner
