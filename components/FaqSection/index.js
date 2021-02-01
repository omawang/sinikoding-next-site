import { useState } from 'react'
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'

import { Container } from 'styles/globalStyles'
import {
  Section,
  MainTitle,
  List,
  ListItem,
  ListItemHead,
  Title,
  Icon,
  ListItemBody,
} from './FaqSection.elements'
import data from './data.json'
import ContactCard from './components/ContactCard'

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <Section>
      <Container>
        <Slide top>
          <MainTitle>Pertanyaan yang sering ditanyakan</MainTitle>
        </Slide>

        <Slide bottom>
          <List>
            {data.map((item, index) => (
              <ListItem key={index}>
                <ListItemHead>
                  <Title>{item.title}</Title>
                  <Icon onClick={() => toggle(index)}>
                    {activeIndex === index ? (
                      <BsCaretUpFill color="#023047" size={24} />
                    ) : (
                      <BsCaretDownFill color="#023047" size={24} />
                    )}
                  </Icon>
                </ListItemHead>
                {activeIndex === index && (
                  <ListItemBody>{item.desc}</ListItemBody>
                )}
              </ListItem>
            ))}
          </List>
        </Slide>

        <Zoom>
          <ContactCard />
        </Zoom>
      </Container>
    </Section>
  )
}

export default FaqSection
