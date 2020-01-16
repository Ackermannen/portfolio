import React, { Component } from 'react';
import Img from 'react-image';
import '../../css/projectDocument.css';
import FooterWrapper from '../../components/main_page/FooterWrapper';
import img1 from '../../img/projectImages/radioInfoProject/fullApp.png';

class RadioInfo extends Component {
  state = {};
  render() {
    return (
      <div id="projectItemContainer">
        <div id="backArrow">
          <a href="#/portfolio/projects">
            <p>&#8678;</p>
          </a>
        </div>
        <div id="projectItemPageContainer">
          <h1>RadioInfo</h1>
          <p>
            An application that utilizes the public API from “Sveriges Radio”
            (Sweden’s Radio) to display radio channels, programs, and times for
            broadcasts.
          </p>

          <h2>Images</h2>
          <div className="imageWithDesc">
            <Img src={img1} />
            <p>
              <i>Image 1: Full application interface</i>
            </p>
          </div>

          <h2>Where can I see it?</h2>

          <p>
            The program in itself does not longer work due to a change in the
            API. I haven’t published the source code because these labs are
            often reusing the same subjects, and I don’t want people to reuse my
            code.{' '}
          </p>
        </div>
        <FooterWrapper />
      </div>
    );
  }
}

export default RadioInfo;
