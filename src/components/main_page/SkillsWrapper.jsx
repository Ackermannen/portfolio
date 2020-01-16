import React, { Component } from 'react';
import Skill from './Skill';

class SkillsWrapper extends Component {
  state = {
    skills: [
      { id: 1, name: 'C#', image: 'csharp.svg', color: '#455A64' },

      { id: 2, name: 'Java', image: 'java.svg', color: '#0074BD' },

      { id: 3, name: 'React', image: 'react.svg', color: '#61DAFB' },

      { id: 4, name: 'C', image: 'c.svg', color: '#3949AB' },

      { id: 5, name: 'Node.js', image: 'node.svg', color: '#83CD29' },

      {
        id: 6,
        name: 'Project Management',
        image: 'other.svg',
        color: '#000000'
      },

      { id: 7, name: 'Music', image: 'music.svg', color: '#5DADEC' },

      { id: 8, name: 'Unity', image: 'unity.png', color: '#252525' }
    ]
  };

  render() {
    return (
      <div className="skillsWrapper">
        <h2>My Skills</h2>
        <div className="flexer">
          {this.state.skills.map((item, key) => (
            <Skill
              key={item.id}
              name={item.name}
              image={item.image}
              color={item.color}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SkillsWrapper;
