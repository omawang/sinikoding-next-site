import { MdSupervisorAccount, MdSchool } from 'react-icons/md'
import { FaBriefcase } from 'react-icons/fa'
import Slide from 'react-reveal/Slide'

import { HeaderSec } from 'components'
import { Container } from 'styles/globalStyles'
import {
  Section,
  Content,
  ContentItem,
  Icon,
  Title,
  Desc,
} from './AboutSection.elements'

const AboutSection = () => {
  return (
    <Section>
      <Container>
        <Slide top>
          <HeaderSec
            title={
              <>
                Berkenalan dengan <span>SiniKoding</span>
              </>
            }
            desc="SiniKoding hadir membantu kalian para generasi muda yang ingin belajar koding dan siap tempur di dunia kerja."
          />
        </Slide>

        <Slide bottom>
          <Content>
            <ContentItem>
              <Icon>
                <MdSupervisorAccount color="white" size={56} />
              </Icon>
              <Title>Untuk Siapa SiniKoding?</Title>
              <Desc>
                SiniKoding sangat cocok buat kamu para fresh graduate (SMA / SMK
                / Sarjana) yang ingin level up!
              </Desc>
            </ContentItem>

            <ContentItem>
              <Icon>
                <FaBriefcase color="white" size={56} />
              </Icon>
              <Title>Gratis Bayar Saat Kerja</Title>
              <Desc>
                Selama pelatihan kamu tidak perlu pusing mikirin biaya. Bayar
                saat kamu sudah bekerja.
              </Desc>
            </ContentItem>

            <ContentItem>
              <Icon>
                <MdSchool color="white" size={56} />
              </Icon>
              <Title>Kami Asah Hingga Mahir</Title>
              <Desc>
                Kita akan belajar bersama mengerjakan projek aplikasi di
                dampingi oleh mentor berpengalaman.
              </Desc>
            </ContentItem>
          </Content>
        </Slide>
      </Container>
    </Section>
  )
}

export default AboutSection
