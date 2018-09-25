import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../layouts';
import levi from '../img/levi-grayscale.jpg';

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'home',
      wrapperColor: '#371722'
    }
  }

  defaultHandler = () => {
    this.setState({
      theme: 'home',
      wrapperColor: '#371722'
    });
  }

  aboutHandler = () => {
    this.setState({
      theme: 'about',
      wrapperColor: '#efe8d8'
    })
  }

  workHandler = () => {
    this.setState({
      theme: 'work',
      wrapperColor: '#97b8ae'
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const imgContainer = document.getElementById('home-img');
    const wrapper = document.getElementById('wrapper');
    if (this.state.theme !== prevState.theme) {
      imgContainer.className = this.state.theme;
      wrapper.style.background = this.state.wrapperColor;
    }
  }

  render() {
    return (
      <Layout>
        <div id="wrapper">
          <section className="intro">
            <h1>Levi Porter</h1>
            <h2>Fullstack developer based in Seattle.</h2>
          </section>
          <section id="home-img" className="home">
            <img src={levi} />
            {/* <Img 
            alt="Levi Porter on a mountain."
            fluid={props.data.imageOne.childImageSharp.fluid}
          /> */}
          </section>
          <footer>
            <Link
              to="/about"
              onMouseOver={this.aboutHandler}
              onMouseLeave={this.defaultHandler}
            >
              About
            </Link>
            <a id="say-hello">Say Hello</a>
            <Link 
              to="/work"
              onMouseOver={this.workHandler}
              onMouseLeave={this.defaultHandler}
            >
              Work
            </Link>
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