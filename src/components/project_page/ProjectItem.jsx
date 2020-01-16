import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectItem extends Component {
  state = {};

  render() {
    const bg = require('../../img/projectImages/' + this.props.image);
    const linkName = '/projects/' + this.props.linkName;

    const classes = !this.props.show ? 'remove' : 'show';
    return (
      <Link to={linkName} className={'projectItem ' + classes}>
        <div className="innerItem" style={{ backgroundImage: `url(${bg})` }}>
          <h4>{this.props.title}</h4>
          <p>{this.props.desc}</p>
        </div>
      </Link>
    );
  }
}

export default ProjectItem;
