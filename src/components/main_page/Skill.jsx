import React, { Component } from 'react';
import Img from 'react-image';
import invert from 'invert-color';

class Skill extends Component {
  render() {
    const name = this.props.name;
    const color = this.props.color;
    const invertColor = invert(color);
    const bg = require('../../img/skills/' + this.props.image);
    return (
      <div className="skill">
        <Img src={bg} />
        <p style={{ backgroundColor: color, color: invertColor }}>{name}</p>
      </div>
    );
  }
}

export default Skill;
