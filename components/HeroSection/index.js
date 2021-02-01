import React from 'react'
import Link from 'next/link'
import Svg from 'public/assets/svg-1.svg'
// import Img2 from 'public/assets/programmer.png'

import { Button, Container } from '../../styles/globalStyles'
import {
  HeroSec,
  HeroRow,
  HeroColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from './HeroSection.elements'

const HeroSection = () => {
  return (
    <>
      <HeroSec>
        <Container>
          <HeroRow>
            <HeroColumn flexBasis="45%">
              <TextWrapper>
                {/* <TopLine lightTopLine>Marketing Agency</TopLine> */}
                <Heading lightText>
                  Langkah Awal Menjadi Coder Profesional
                </Heading>
                <Subtitle lightTextDesc>
                  Belajar coding front end & back end gratis dari awal hingga mahir di SiniKoding tanpa pusing biaya dan disalurkan kerja!
                </Subtitle>
                <Link href="/">
                  <a>
                    <Button big fontBig>
                      Sign Up
                    </Button>
                  </a>
                </Link>
              </TextWrapper>
            </HeroColumn>

            <HeroColumn flexBasis="55%">
              <ImgWrapper>
                <Img src="/assets/hero-image.png" />
                {/* <Svg style={{ maxHeight: 500 }} /> */}
              </ImgWrapper>
            </HeroColumn>
          </HeroRow>
        </Container>
      </HeroSec>
    </>
  )
}

export default HeroSection
