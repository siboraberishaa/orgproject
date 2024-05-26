import React from 'react'
import Banner from '../components/Banner'
import About from '../components/About'
import Feature from '../components/Feature'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import withPreloader from '../components/withPreloader'

const HomeScreen = () => {




  return (
    <div>
    
        <Banner />
        <section className={`section desktop`}>
          <About />
        </section>
        <section className={`section mobile px-3`}>
          <About />
        </section>
        <section className={`bg-gray desktop`}>
          <Feature />
        </section>
        <section className={`bg-gray mobile px-3`}>
          <Feature />
        </section>
        <section className={`section pt-0 desktop`}>
          <Blog />
        </section>
        <section className={`section pt-0 mobile px-3`}>
          <Blog />
        </section>
        <section id="contact" className={`contact section desktop`}>
          <Contact />
        </section>
        <section id="contact" className={`contact section mobile px-3`}>
          <Contact />
        </section>
    
    </div>
  )
}

export default withPreloader(HomeScreen)