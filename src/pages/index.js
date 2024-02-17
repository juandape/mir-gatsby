import React from 'react';
import { Parallax } from '@react-spring/parallax';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import './styles.css';

const IndexPage = () => (
  <Layout>
    <Parallax pages={5}>
      <div>
        <Hero offset={0} />
      </div>
      <div className="projects">
        <Projects offset={1} />
      </div>
      <div>
        <About offset={3} />
      </div>
      <div>
        <Contact offset={4} />
      </div>
    </Parallax>
  </Layout>
);

export default IndexPage;
