import React, { Component } from 'react';
import ToggleButton from '../components/project_page/ToggleButton';
import ProjectItem from '../components/project_page/ProjectItem';
import FooterWrapper from '../components/main_page/FooterWrapper';
import '../css/General.css';
import '../css/projectPage.css';

class Projects extends Component {
  state = {
    buttons: [
      {
        id: 0,
        name: 'React',
        on: true
      },
      {
        id: 1,
        name: 'Java',
        on: true
      },
      {
        id: 2,
        name: 'Music',
        on: true
      },
      {
        id: 3,
        name: 'Programming',
        on: true
      },
      {
        id: 4,
        name: 'Hobby',
        on: true
      },
      {
        id: 5,
        name: 'C#',
        on: true
      }
    ],

    projects: [
      {
        id: 0,
        title: 'Online Portfolio',
        desc: 'Online portfolio made in React (This page)',
        imageName: 'portfolioProject.png',
        tags: ['React', 'HTML', 'CSS', 'Web', 'Programming'],
        show: true,
        linkName: 'portfolio'
      },

      {
        id: 1,
        title: 'Anti-TD Game',
        desc: 'A Java based Anti-Tower-Defense Game',
        imageName: 'antiTDProject.png',
        tags: ['Java', 'Programming'],
        show: true,
        linkName: 'antitd'
      },

      {
        id: 2,
        title: 'Treasure Hunt',
        desc: 'A Unity based Treasure Hunting game',
        imageName: 'treasurehuntProject.png',
        tags: ['Unity', 'Programming', 'App', 'AR', 'C#'],
        show: true,
        linkName: 'treasurehunt'
      },

      {
        id: 3,
        title: 'Chachino',
        desc: 'A playable level made in Hammer',
        imageName: 'chachinoProject.png',
        tags: ['Source', 'HammerSDK', 'Hobby'],
        show: true,
        linkName: 'chachino'
      },

      {
        id: 4,
        title: '8 Bit Compositions',
        desc: 'Songs made with 8 bit restrictions',
        imageName: '8bitcompProject.png',
        tags: ['Music', 'Hobby'],
        show: true,
        linkName: '8bitcomp'
      },

      {
        id: 5,
        title: 'Radio Info',
        desc: 'Application which displays radio channels and shows',
        imageName: 'radioInfoProject.png',
        tags: ['Programming', 'Java'],
        show: true,
        linkName: 'radioinfo'
      },

      {
        id: 6,
        title: 'Java Chat Client',
        desc: 'Client program that connects to a server for chatting',
        imageName: 'javaChat.png',
        tags: ['Programming', 'Java'],
        show: true,
        linkName: 'javachat'
      },

      {
        id: 7,
        title: 'Mobile Table-Top Game',
        desc: 'Unity-based mobile game prototype with several clients',
        imageName: 'werewolf.png',
        tags: ['Unity', 'Programming', 'App', 'C#'],
        show: true,
        linkName: 'werewolf'
      }
    ]
  };

  /**
   * Goes through all tags for an entry and matches them to the filter buttons.
   * One disabled button returns false for that entry.
   */
  filter = tags => {
    // eslint-disable-next-line
    for (const [entryK, entryV] of tags.entries()) {
      // eslint-disable-next-line
      for (const [stateK, stateV] of this.state.buttons.entries()) {
        if (entryV === stateV.name) {
          if (!stateV.on) {
            return false;
          }
        }
      }
    }
    return true;
  };

  /**
   * Filter all entries and disable 'show' if filtered out
   */
  filterAll = () => {
    var projectsCopy = [...this.state.projects];
    // eslint-disable-next-line
    for (const [key, value] of projectsCopy.entries()) {
      value.show = this.filter(value.tags);
    }
    return projectsCopy;
  };

  handleClick = item => {
    const arrayCpy = this.state.buttons.slice(); //copy the array
    arrayCpy[item.id].on = !arrayCpy[item.id].on;
    this.handleUpdateState(arrayCpy);
  };

  async handleUpdateState(arr) {
    await new Promise(resolve =>
      this.setState({ buttons: arr, projects: this.filterAll() }, () =>
        resolve()
      )
    );
    console.log(this.state.buttons);
    console.log(this.state.projects);
  }

  render() {
    return (
      <div className="wrapper" id="projectPage">
        <ul id="filterButtons">
          {this.state.buttons.map((item, key) => (
            <ToggleButton
              key={item.id}
              name={item.name}
              on={item.on}
              onClick={() => this.handleClick(item)}
            />
          ))}
        </ul>
        <div id="projects">
          {this.state.projects.map((item, key) => (
            <ProjectItem
              key={item.id}
              title={item.title}
              desc={item.desc}
              image={item.imageName}
              show={item.show}
              tags={item.tags}
              linkName={item.linkName}
            />
          ))}
        </div>

        <FooterWrapper />
      </div>
    );
  }
}

export default Projects;
