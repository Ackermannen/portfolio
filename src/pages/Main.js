import React from 'react';
import HeaderWrapper from '../components/main_page/HeaderWrapper';
import SkillsWrapper from '../components/main_page/SkillsWrapper';
import AboutMeWrapper from '../components/main_page/AboutMeWrapper';
import FooterWrapper from '../components/main_page/FooterWrapper';
import '../css/General.css';

function Main() {
  return (
    <div className="wrapper">
      <HeaderWrapper />
      <AboutMeWrapper />
      <SkillsWrapper />
      <FooterWrapper />
    </div>
  );
}

export const img1 = require('../img/kaffe.jpg');
export const img2 = require('../img/jag_1.jpg');
export const img3 = require('../img/kalimba.jpg');

export default Main;
