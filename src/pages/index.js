import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../layouts';
import levi from '../img/levi-grayscale.jpg';
import telescope from '../img/telescope.png';
import recipeasy from '../img/recip-easy2.png';
import smartaina from '../img/smart-aina.jpg';
import devleague from '../img/devleague.jpg';

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <Layout>
        <div id="hero-wrapper">
          <header>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </header>
          <section id="home-img" className="home">
            <img src={levi} />
            {/* <Img 
            alt="Levi Porter on a mountain."
            fluid={props.data.imageOne.childImageSharp.fluid}
          /> */}
          </section>
          <section className="intro">
            <div className="intro-container">
              <h1>Levi<span className="break-text">Porter</span></h1>
              {/* <hr className="divider" /> */}
              <h2>Fullstack Developer</h2>
            </div>
            <a href="mailto:levi@levibrooke.com" id="intro-cta" className="button-solid">Say Hello</a>
          </section>
        </div>
        <div id="next-wrapper">
          <section className="bio-intro" id="about">
            <h1>About</h1>
          </section>
          <section className="bio-content">
            <div className="bio-container">
              <div className="bio-container__copy">
                <p>I'm a developer with a passion for collaborating with talented people to build unique user experiences.</p>
                <p>I am a graduate of <a href="https://devleague.com">DevLeague</a>, a learning bootcamp based in Honolulu, Hawaii. Prior to becoming a developer, I served in the Coast Guard and worked in digital marketing.</p>
                <p>When I'm not working, you can find me on a soccer field, hiking in Washington's great outdoors, or exploring Seattle.</p>
                <p>Technologies that I have experience with:</p>
                <div className="tools">
                  <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>CSS & SASS</li>
                  </ul>
                  <ul>
                    <li>NodeJS</li>
                    <li>PostgreSQL</li>
                    <li>Gatsby</li>
                    <li>Git</li>
                  </ul>
                </div>
              </div>
              <div className="bio-image">
                <img src={devleague} alt="DevLeague graduation." />
              </div>
            </div>
          </section>
          <section className="projects-intro" id="work">
            <h1>Work</h1>
          </section>
          <section className="projects-content">
            <div className="project-item">
              <div className="project-item__container">
                <h4>01</h4>
                <h3>Telescope</h3>
                <p>A stock ticker for the political economy, Telescope is a web application used to observe federal campaign finance activity in real-time.</p>
                <p className="project-item__tools">NodeJS, Express, NextJS, Redux</p>
                <div className="project-item__buttonrow">
                  <a href="https://telescope.circavictor.com" className="button-outline-smaller button-work">Visit site</a>
                  <a href="https://medium.com/circa-victor/telescope-a-stock-ticker-for-the-political-economy-26e884f795ef" className="work-link">Read Blog Post</a>
                </div>
              </div>
              <img id="telescope__img" src={telescope} alt="Telescope. A stock ticker for the political economy."/>
            </div>
            <div className="project-item">
              <img id="recipeasy__img" src={recipeasy} alt="Recip-Easy. A web application that tracks grocery items and generates recipe ideas."/>
              <div className="project-item__container">
                <h4>02</h4>
                <h3>Recip-Easy</h3>
                <p>A web application that tracks grocery items and generates recipe ideas.</p>
                <p className="project-item__tools">NodeJS, React, Redux, Watson Visual Recognition, Barcode Scanning</p>
                <div className="project-item__buttonrow">
                  <a href="https://recip-easy.com" className="button-outline-smaller button-work">Visit site</a>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-item__container">
                <h4>03</h4>
                <h3>Smart Aina</h3>
                <p>An IoT project that detects and deters theft on small-yield farms, and sends alerts that can be monitored via a user dashboard.</p>
                <p className="project-item__tools">NodeJS, React, Particle Photon Microcontroller</p>
              </div>
              <div className="project-item__image">
                <img id="smartaina__img" src={smartaina} alt="Smart Aina. An IoT project that detects and deters intruders on small-yield farms, and sends alerts that can be monitored via a user dashboard."/>
              </div>
            </div>
          </section>
          <section className="contact-intro" id="contact">
            <h1>Contact</h1>
          </section>
          <section className="contact-content">
            <div className="contact-container">
              <p>Feel free to reach out if you'd like to connect or discuss any project or employment opportunities. Or if you're in Seattle, come say hi at the weekly <a href="http://seattlejshackers.com/">Seattle JS Hackers</a> meetup!</p>
              <a href="mailto:levi@levibrooke.com" className="button-outline-smaller button-work">Say Hello</a>
            </div>
          </section>
          <footer>
          </footer>
        </div>
      </Layout>
    )
  }
};

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "levi-grayscale.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 600
        ) 
        {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`