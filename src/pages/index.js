import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../layouts';

const Index = (props) => (
  <Layout>
    <div className="wrapper">
      <section className="intro">
        <h1>Levi Porter</h1>
        <h2>Fullstack developer based in Seattle.</h2>
      </section>
      <section className="home-img">
        <Img 
          alt="Levi Porter on a mountain."
          fluid={props.data.imageOne.childImageSharp.fluid}
        />
      </section>
      <footer>
        <Link to="/about">About</Link>
        <a id="say-hello">Say Hello</a>
        <Link to="/work">Work</Link>
      </footer>
    </div>
  </Layout>
);

export default Index;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "levi.jpg" }) {
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