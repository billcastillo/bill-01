import React from "react";
import Work from "./work";
import Blog from "./blog";
import Head from "../components/head";
import Page from "../components/Page";
import Container from "../formats/Container";
import PageLayout from "../formats/page-layout";
import BlogList from "../api/blog-list";

import projects from "../data/projects.json";
import site from "../data/site.json";

const Contact = () => (
  <Page pageName='contact' noNavigation={true} import={true}>
    <p className='contact-email'>{site.contact}</p>

    <ul className='contact-links'>
      {site.contactLinks.map((link, index) => {
        return (
          <li key={index}>
            <a
              target='_blank'
              rel='noopener'
              href={link.link}
              title={link.name}
            >
              {link.name}
            </a>
          </li>
        );
      })}
    </ul>

    <style jsx>{`
      .contact-email {
        margin-bottom: 16px;
      }

      .contact-links li {
        line-height: 32px;
      }
    `}</style>
  </Page>
);

const Home = (props) => (
  <PageLayout class='index-wrapper' homepage={true}>
    <Head title='Home' />

    <section className='section index-section'>
      <div className='about-bg'></div>
      <Container>
        <h1 className='title poppins'>Bill Castillo</h1>
        <h2 className='about-desc domine'>{site.about}</h2>
      </Container>
    </section>

    <Blog posts={props.posts} noNavigation={true} import={true} />
    <Work projects={projects} noNavigation={true} import={true} />
    <Contact />

    <style jsx>{`
      .index-wrapper {
        width: 100%;
        max-width: 768px;
        padding: 32px;
      }

      .index-section {
        position: relative;
        height: 20vh;
        margin-bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .index-section .title {
        text-align: center;
        color: #8d8daa;
        font-size: 52px;
        text-transform: uppercase;
        margin-bottom: 24px;
      }

      .index-section {
        position: relative;
        display: flex;
        align-items: center;
        height: ${typeof window !== "undefined"
          ? window.innerHeight * 0.7 + "px"
          : "70vh"};
      }

      .index-section .about-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(../static/about_me_bg.png?webp);
        background-repeat: no-repeat;
        background-size: auto 100%;
        background-position: center center;
        opacity: 0.5;
        z-index: -1;
      }

      .index-section .about-desc {
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        color: #504766;
        text-align: center;
      }

      @media screen and (min-width: 545px) {
        .index-section .about-desc {
          font-size: 32px;
          line-height: 40px;
        }
      }
    `}</style>
  </PageLayout>
);

Home.getInitialProps = async () => {
  return BlogList();
};

export default Home;
