import React from 'react';
import { Link } from 'react-router-dom';
import Img from 'react-image';
import radar from '../../img/radar.svg';
import downArrow from '../../img/downArrow.svg';

const HeaderWrapper = () => {
  return (
    <div className="header">
      <div id="contentholder">
        <div className="content">
          <div>
            <h1>Wilhelm Ackermann</h1>
            <p>
              Is a 4th year MSc. Interaction Technology & Design Student at Umeå
              University
            </p>
          </div>
          <div>
            <Link className="button linker" to="/portfolio/projects">
              Link to Portfolio
            </Link>
          </div>
        </div>
        <span className="radarWrapper">
          <Img className="radar" src={radar} />
          <Img className="downArrow" src={downArrow} />
        </span>
      </div>
    </div>
  );
};

export default HeaderWrapper;
