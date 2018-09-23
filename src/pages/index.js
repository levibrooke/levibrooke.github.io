import React from "react"

import Layout from '../layouts';
import levi from '../img/levi.jpg';

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="wrapper">
          <section className="intro">
            <h1>Levi Porter</h1>
            <h2>Fullstack developer based in Seattle.</h2>
          </section>
          <img id="home-img" src={levi} alt="Levi Porter on a mountain." />
          <footer>
            <a href="/about">About</a>
            <a id="say-hello">Say Hello</a>
            <a href="/work">Work</a>
          </footer>
        </div>
      </Layout>
    )
  }
} 
