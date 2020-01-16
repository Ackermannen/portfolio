import React from 'react';
import { Link } from 'react-router-dom';
import Img from 'react-image';

import { img1, img2, img3 } from '../../pages/Main';

const AboutMeWrapper = () => {
  return (
    <div className="aboutmeWrapper">
      <div className="aboutme">
        <h2>About Me</h2>

        <div className="threePics">
          <Img src={img1} />
          <Img src={img2} />
          <Img src={img3} />
        </div>

        <div className="pictureText">
          <div className="left">
            <p>
              I am a 22 year old student from Skellefteå, Sweden. I've always
              liked tinkering with computers and music throughout my life, and
              those interests have followed me to where I am now.
            </p>
          </div>
          <div className="right">
            <p>
              I work in many different programming environments including Java,
              React, Node.js, C#, HTML/CSS and Unity. I also make music
              compositions and 3d levels in my free time, some of which I share
              at my
              <Link to="/projects"> project page</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="educationWrapper umea">
        <div className="image" />
        <h3>Umeå University 2016-Present</h3>
        <h4>MSc. Student Interaction Technology & Design</h4>
        <p>
          The Master's program (Civilingengör) in Interaction Technology &
          Design is one part Design Theory and another part software
          development. Its aims are broad, with professions like UX-Designer and
          full-stack dev both being possible upon graduatation. My personal
          motive is to become a Jack-of-all trades and work with many aspect of
          development.
        </p>
      </div>

      <div className="educationWrapper western">
        <div className="image" />
        <h3>Western University 2019</h3>
        <h4>Outgoing exchange student</h4>
        <p>
          During my exchange at Western University, London, ON, I focused on
          broadening my existing education with courses apart from my Major. I
          studied digital marketing, search engines, music theory and psychology
          during my stay.
        </p>
      </div>
    </div>
  );
};

export default AboutMeWrapper;
