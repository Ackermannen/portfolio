import React, { Component } from 'react';
import '../../css/projectDocument.css';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import FooterWrapper from '../../components/main_page/FooterWrapper';
import video1 from '../../video/bitcomp/song1.webm';
import video2 from '../../video/bitcomp/song2.webm';
import video3 from '../../video/bitcomp/song3.webm';
import video4 from '../../video/bitcomp/song4.webm';

class BitComp extends Component {
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
          <h1>8 Bit Compositions</h1>
          <p>
            This is some music I've made using limitations of 8-bit systems from
            the era. I used a music program called FamiTracker to make them.
          </p>
          <h2>What is FamiTracker?</h2>
          <p>
            FamiTracker is a free music tracker that let's you make music using
            different audio chips from the 8 bit era of computers/consoles
          </p>

          <h2>Songs</h2>
          <p></p>
          <div className="imageWithDesc">
            <Player playsInline src={video1} />
            <p>
              <i>Video 1: Oscilloscope of Song1</i>
            </p>
          </div>

          <p></p>
          <div className="imageWithDesc">
            <Player playsInline src={video2} />
            <p>
              <i>Video 2: Oscilloscope of Song2</i>
            </p>
          </div>

          <p></p>
          <div className="imageWithDesc">
            <Player playsInline src={video3} />
            <p>
              <i>Video 3: Oscilloscope of Song3</i>
            </p>
          </div>

          <p></p>
          <div className="imageWithDesc">
            <Player playsInline src={video4} />
            <p>
              <i>Video 3: Oscilloscope of Song4</i>
            </p>
          </div>
        </div>
        <FooterWrapper />
      </div>
    );
  }
}

export default BitComp;
