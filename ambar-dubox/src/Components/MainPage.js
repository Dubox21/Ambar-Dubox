import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
// import Gallery from './Gallery';
import Contact from './Contact';
import UnderConstruction from './common/UnderConstruction';

function MainPage() {
  return (
    <div>
      <section id="home">
      <Header />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="projects">
        <Projects />
      </section>
       <section id="gallery">
       {/* <Gallery /> */}
       <UnderConstruction />
      </section>
    <section id="contact">
        <Contact />
      </section> 
    </div>
  );
}

export default MainPage;
