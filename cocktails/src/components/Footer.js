import React from 'react'

const Footer = () => {
    return (
      <footer>
        <section className="footer-section">
          <div className="first">
            <h4>Tech Stack Used</h4>
            <p>HTML5</p>
            <p>SASS</p>
            <p> React.Js with additional package</p>
            <p>Framer Motion</p>

            <p> Open source public API</p>
          </div>
          <div className="section">
            <h4> Find me around the Web</h4>
            <a href="https://www.facebook.com/kripu.khadka/">Facebook</a>
            <a href="https://www.linkedin.com/in/kripu-khadka-3594a7185/">
              LinkedIn
            </a>
            <a href="https://www.facebook.com/kripu.khadka/">GitHub</a>
            <a href="https://www.instagram.com/kripu77/">Instagram</a>
          </div>
          <div className="third">
            <h4>
              {" "}
              No copy right issues feel free to copy any thing that helps.{" "}
            </h4>
            <p> Designed and Developed By Kripu Khadka, 2021.</p>
          </div>
        </section>
      </footer>
    );
}

export default Footer
