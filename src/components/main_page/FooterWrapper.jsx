import React from 'react';

const AboutMeWrapper = () => {
  const cv = require('../../pages/CV_Ackermann.pdf');
  return (
    <div className="footerWrapper">
      <div className="footerItem">
        <p>
          <a href="/">Home</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/wilhelm-ackermann-4ba48b164/">
            LinkedIn
          </a>
        </p>
        <p>
          <a href="https://github.com/Ackermannen">GitHub</a>
        </p>
        <p>
          <a href="mailto:wiac0002@gapps.umu.se">Contact me</a>
        </p>
        <p>
          <a href={cv}>CV</a>
        </p>
        <p>
          <a href="/projects">Projects</a>
        </p>
      </div>
      <div className="footerItem">
        {/* Icons8 */}
        <p>
          <a href="https://iconscout.com/icon/c-programming">
            C programming Icon
          </a>{' '}
          and <a href="https://iconscout.com/icon/c-sharp-2">C sharp Icon</a> by{' '}
          <a href="https://iconscout.com/contributors/icons8">Icons8</a>
        </p>
        <p>
          {/* Icon Mafia */}
          <a href="https://iconscout.com/icon/react-3">React Icon</a> ,
          <a href="https://iconscout.com/icon/node-js">Node Js Icon</a> and
          <a href="https://iconscout.com/icon/java-59">Java Icon</a> by{' '}
          <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a>{' '}
        </p>

        <p>
          {/*Twitter Emoji*/}
          <a href="https://iconscout.com/icon/musical-notes-tune-music-song">
            Music Emoji Icon
          </a>{' '}
          by{' '}
          <a href="https://iconscout.com/contributors/twitter-inc">
            Twitter Emoji
          </a>
          on <a href="https://iconscout.com">Iconscout</a>
        </p>
      </div>
    </div>
  );
};

export default AboutMeWrapper;
