import React from 'react'
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const About = () => {

    return (
      <section>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home Page</title>
          <link rel="canonical" href="http://kripukhadka.com" />
        </Helmet>
        <article className="about-section">
          <h1> About Me!!!</h1>
          <p>
            Hi, How are you? Hope you liked the project. Please connect with me
            around the web if you liked my work. Thank You!!!
          </p>
          <img src="http://www.emilywrites.co.nz/wp-content/uploads/2018/08/Hire-Me-1024x493.png" />
        </article>
      </section>
    );
}

export default About
