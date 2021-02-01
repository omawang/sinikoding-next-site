import { HeaderSec } from 'components'
import { Container } from 'styles/globalStyles'
import Slide from 'react-reveal/Slide'

import {
  Section,
  Content,
  ContentItem,
  Img,
  Body,
  Title,
  Desc,
  List,
  ListItem,
} from './LearningSection.elements'

const LearningSection = () => {
  return (
    <Section>
      <Container>
        <Slide top>
          <HeaderSec
            title={['Apa saja yang bisa kamu pelajari?']}
            desc="SiniKoding menyediakan materi pemrograman ter-update yang sesuai dengan kengininan kamu"
          />
        </Slide>

        <Content>
          <Slide right>
            <ContentItem imgFirst>
              <Img src="/assets/il-mobile-app.png" />
              <Body>
                <Title>Mobile Apps Development</Title>
                <Desc>
                  Salah satu skill dengan demand tinggi yang terus meningkat
                  dari tahun ke tahun, banyak perusahaan yang membutuhkan mobile
                  apps developer. Namun resource yang ada masih sangat sedikit,
                  bahkan dinyatakan darurat.
                </Desc>
                <Title>Materi yang diajarkan</Title>
                <List>
                  <ListItem>Belajar fundamental bahasa pemrograman</ListItem>
                  <ListItem>
                    Belajar meimplementasikan design ui ke coding
                  </ListItem>
                  <ListItem>
                    Belajar mobile apps development dengan React Native atau
                    Flutter
                  </ListItem>
                  <ListItem>
                    Belajar menggunakan state management dan banyak lagi
                  </ListItem>
                </List>
              </Body>
            </ContentItem>
          </Slide>

          <Slide left>
            <ContentItem>
              <Img src="/assets/il-frontend.png" />
              <Body>
                <Title>Web Development</Title>
                <Desc>
                  Seorang frontend developer dituntut untuk kreatif dan memiliki
                  skill desain yang bagus. Frontend developer juga bertugas
                  untuk memikirkan cara berinteraksi dengan pengguna melalui
                  situs web yang dibuat.
                </Desc>
                <Title>Materi yang diajarkan</Title>
                <List>
                  <ListItem>HTML & CSS dasar</ListItem>
                  <ListItem>Javascript fundamental</ListItem>
                  <ListItem>Belajar web development dengan React</ListItem>
                  <ListItem>
                    Belajar menggunakan state management dan banyak lagi
                  </ListItem>
                </List>
              </Body>
            </ContentItem>
          </Slide>

          <Slide right>
            <ContentItem imgFirst>
              <Img src="/assets/il-backend.png" />
              <Body>
                <Title>API Development</Title>
                <Desc>
                  Backend adalah istilah yang kita gunakan untuk pemrograman
                  logika yang berjalan di belakang. Baik untuk API dari aplikasi
                  mobile, situs web, menjalan IOT, aplikasi machine learning dan
                  banyak lagi.
                </Desc>
                <Title>Materi yang diajarkan</Title>
                <List>
                  <ListItem>Belajar fundamental bahasa pemrograman</ListItem>
                  <ListItem>Javascript fundamental</ListItem>
                  <ListItem>Belajar database dan seluk beluknya</ListItem>
                  <ListItem>Belajar membuat API dengan NodeJS</ListItem>
                </List>
              </Body>
            </ContentItem>
          </Slide>
        </Content>
      </Container>
    </Section>
  )
}

export default LearningSection
