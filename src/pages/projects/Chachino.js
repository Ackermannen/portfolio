import React, { Component } from 'react';
import '../../css/projectDocument.css';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import FooterWrapper from '../../components/main_page/FooterWrapper';
import video1 from '../../video/chachino/chachinoVideo.mp4';

class Chachino extends Component {
  state = {};
  render() {
    return (
      <div id="projectItemContainer">
        <div id="backArrow">
          <a href="/projects">
            <p>&#8678;</p>
          </a>
        </div>
        <div id="projectItemPageContainer">
          <h1>Chachino</h1>
          <p>
            Hammer is a tool developed by Valve Software which runs games like
            Counter-Strike: Global Offensive and Half-Life 2. Chachino is a map
            using the same development tools as those games.
          </p>

          <p>
            The project reached early alpha, with the main layout being
            finalized and the decorative process beginning. It was shelved
            because of a change in priorities and an unhappiness with the
            layout.
          </p>

          <h2>Media</h2>
          <p></p>
          <div className="imageWithDesc">
            <Player playsInline src={video1} />
            <p>
              <i>Video 1: Short film showing some features of Chachino</i>
            </p>
          </div>
        </div>
        <FooterWrapper />
      </div>
    );
  }
}

export default Chachino;
