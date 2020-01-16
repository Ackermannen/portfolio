import React, { Component } from 'react';
import '../../css/projectButtons.css';

class ToggleButton extends Component {
  state = {
    style: {
      backgroundColor: '#472147'
    }
  };

  /**
   * Parent controls the state (on/off) while
   * child controls the color of itself,
   */
  onClick = () => {
    //super
    this.props.onClick();

    let compStyle = {
      backgroundColor: '#472147'
    };

    console.log(this.state.style.backgroundColor === compStyle.backgroundColor);
    if (this.state.style.backgroundColor === compStyle.backgroundColor) {
      compStyle.backgroundColor = '#8a2c8a';
      this.setState({ style: compStyle });
    } else {
      compStyle.backgroundColor = '#472147';
      this.setState({ style: compStyle });
    }
  };

  render() {
    return (
      <li>
        <button
          style={this.state.style}
          className="filterButton"
          onClick={this.onClick}
        >
          {this.props.name}
        </button>
      </li>
    );
  }
}
export default ToggleButton;
