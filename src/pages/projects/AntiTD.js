import React, { Component } from 'react';
import Img from 'react-image';
import '../../css/projectDocument.css';
import FooterWrapper from '../../components/main_page/FooterWrapper';
import img1 from '../../img/projectImages/antiTDProject/uml.png';
import img2 from '../../img/projectImages/antiTDProject/viewOfGame.png';
import img3 from '../../img/projectImages/antiTDProject/highscore.png';
import img4 from '../../img/projectImages/antiTDProject/teleporter_guy.png';
import img5 from '../../img/projectImages/antiTDProject/teleporter_tile_new.gif';

class AntiTD extends Component {
  state = {};
  render() {
    return (
      <div id="projectItemContainer">
        <div id="backArrow">
          <a href="/portfolio/projects">
            <p>&#8678;</p>
          </a>
        </div>
        <div id="projectItemPageContainer">
          <h1>The Anti-Tower-Defense Game</h1>

          <p>
            As part of the final project of the course ‘Application Development
            in Java’, we were tasked to create a functioning Anti-Tower-Defense
            (ATD) game where the objective is to spawn little creatures that go
            through a map whilst trying to survive the onslaught of towers
            randomly generated on the map.
          </p>

          <h2>Specifications</h2>

          <p>
            There were a couple of features we had to include. We had to have 3
            units, where 1 would be able to place a “teleport maker” who will
            make a portal where new units will spawn from now on. We also had to
            include a tile which, on click, would change direction in which the
            creatures will walk. We also had to use Java reflections to include
            the ability to create custom tiles, which we demonstrated by
            creating a Lava tile, which hurts creatures when they walk on it.
          </p>

          <h2>Challenges</h2>

          <h3>Design Patterns</h3>

          <p>
            In this assignment, MVC (Model-View-Controller) is essential to
            prevent crashing since we’re handling many concurrent threads in our
            program. Making sure that each section of the application is not
            interfering with the others illegally is essential to prevent
            crashing and to improve performance. As an example, the algorithmic
            background activity is not allowed to be run on the same thread as
            the interface, as that would cause the entire interface to stop when
            executing. When handling a simple and small application, the effect
            remains unnoticeable, but as the scale of the program increases, it
            will become a chore to use due to stutters.
          </p>

          <h3>Group Assignment</h3>

          <p>
            With the scale of this project, it is no surprise that this was a
            group project. Structuring the project in such a way that four
            people not only understand the underlying code but can work in
            parallel without interfering is a challenge.
          </p>

          <h2>Method</h2>

          <p>
            To do this project, we created a UML diagram at first. In hindsight,
            we should have tried to roleplay these roles to better understand
            how they should be in relation to each other, but we felt that this
            was a good base to go on:
          </p>

          <div className="imageWithDesc">
            <Img src={img1} />
            <p>
              <i>
                Image 1: UML of units in relation to GameObject (not the entire
                UML){' '}
              </i>
            </p>
          </div>

          <p>
            We then made scheduling and assigned roles to each other. I had the
            role of creating the reading of maps in XML and some algorithms
            including the pathing of creatures. I also did the art for the game!
          </p>

          <p>
            We regularly met and usually worked full days on the project and
            made okay progress throughout. Our biggest hindrance was that we
            could not decide the purpose of each class, which reduced
            readability substantially. By the end, the code became a mess and it
            shows the importance of having a functioning UML schema done before
            you start coding.
          </p>

          <h2>Results</h2>
          <p>Here are some images of the finished project:</p>
          <div className="imageWithDesc">
            <Img src={img2} />
            <p>
              <i>Image 2: Complete view of game and level 1</i>
            </p>
          </div>

          <br />
          <div className="imageWithDesc">
            <Img src={img3} />
            <p>
              <i>Image 3: Database High Score system</i>
            </p>
          </div>

          <br />
          <div className="imageWithDesc">
            <Img src={img4} width="300px" className="pixelated" />
            <p>
              <i>Image 4: Teleporter Unit</i>
            </p>
          </div>

          <br />
          <div className="imageWithDesc">
            <Img src={img5} width="300px" className="pixelated" />
            <p>
              <i>Image 5: Teleporter Tile</i>
            </p>
          </div>

          <h2>Where can I view this?</h2>

          <p>
            The finished (compiled) project is available at my{' '}
            <a href="https://github.com/Ackermannen/Anti-td">GitHub</a>.
          </p>
        </div>
        <FooterWrapper />
      </div>
    );
  }
}

export default AntiTD;
