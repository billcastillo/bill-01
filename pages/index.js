import React from 'react'
import Projects from './projects'
import Blog from './blog';

import About from '../components/about'
import Head from '../components/head'
import Header from '../components/Header';
import Container from '../formats/Container'
import PageLayout from '../formats/page-layout';

import articles from '../data/articles.json'
import projects from '../data/projects.json'

const Home = () => (
  <PageLayout class="index-wrapper">
    <Head title="Home" />

    {/* <Header /> */}

    <Container>
      <section className="section index-section">
        <h1 className="title">Bill Castillo</h1>
        <div className="index-circle"></div>
      </section>
    </Container>

    <About noNavigation={true} import={true} />
    <Projects projects={projects} noNavigation={true} import={true} />
    <Blog articles={articles} noNavigation={true} import={true} />

    <style jsx>{`
      .index-wrapper {
        width: 100%;
        max-width: 768px;
        padding: 32px;
      }

      .index-section {
        position: relative;
        height: 20vh;
      }

      .index-section .title {
        text-align: center;
      }

      .index-section .index-circle {
        position: absolute;
        width: 20vw;
        height: 20vw;
        background: #F2C398;
        border-radius: 50%;
      }
    `}</style>

    
  </PageLayout>
)

export default Home
