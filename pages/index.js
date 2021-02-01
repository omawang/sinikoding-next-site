import { useEffect } from 'react'
import Head from 'next/head'
import { Element, Events } from 'react-scroll'

import {
  AboutSection,
  Banner,
  FaqSection,
  LearningSection,
  Navbar,
  Footer,
} from '../components'

export default function Home() {
  useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments)
    })

    return () => {
      Events.scrollEvent.remove('begin')
    }
  })
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Element name="home">
          <Banner />
        </Element>
        <Element name="about">
          <AboutSection />
        </Element>
        <Element name="learning">
          <LearningSection />
        </Element>
        <Element name="faq">
          <FaqSection />
        </Element>
        <Footer />
      </main>
    </>
  )
}
