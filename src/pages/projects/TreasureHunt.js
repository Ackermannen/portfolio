import React, { Component } from 'react';
import Img from 'react-image';
import '../../css/projectDocument.css';
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
import FooterWrapper from '../../components/main_page/FooterWrapper';
import img1 from '../../img/projectImages/treasureHuntProject/iteration1.jpg';
import img2 from '../../img/projectImages/treasureHuntProject/iteration2Box.jpg';
import img0 from '../../img/projectImages/treasureHuntProject/skiss.png';
import img3 from '../../img/projectImages/treasureHuntProject/group.jpg';

import video1 from '../../img/projectImages/treasureHuntProject/videoShowcase.mp4';

class TreasureHunt extends Component {
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
          <h1>Treasure Hunt</h1>
          <p>
            As part of our project for Thnx Innovation in the course
            Design-Build-Test, we created a prototype of a game where you can
            place treasures using satellite coordinates, and have a squirrel
            friend help you get to those treasures by guiding you. The game ran
            Unity on Android phones and used an API called MapBox for the
            implementation
          </p>

          <h2>The Course</h2>

          <p>
            “Design-Build-Test” is a project course that runs on quarter (25%)
            speed during a whole term. In this course, you will contact a
            company and make a project for them. They will act as supervisors to
            the chosen project and you are the manpower, making the product
            itself by implementing a design-build-test methodology. This means
            that you first design something, build it, test it, and then
            reiterate until you have a finished product.
          </p>

          <h2>Our Group</h2>

          <p>
            Our group consisted of Cecilia, David, Frida, David, and me. We had
            different experiences so we felt like a balanced team. But more
            important was that we were all enthusiastic to do this course and
            make it into something that we could be proud of presenting. We
            really wanted to challenge ourselves with this project and our group
            dynamic allowed us to keep ourselves serious throughout the
            development process.
          </p>

          <h3>My Role In The Project</h3>

          <p>
            I was more technically oriented, but I also acted as project leader
            which meant that I was responsible for work-days, work-times, and
            responsible for communication with the project leader(s) at the
            company we made the prototype for. I worked on technical aspects
            during work hours. An example being how points are placed on
            satellite coordinates in the Unity world and the coding the load
            priority of classes to eliminate race conditioning.{' '}
          </p>

          <h4>Race conditioning</h4>

          <p>
            When several processes are running at the same time, there is a risk
            that the whole program will crash if two processes need to have a
            certain order (1, 2) of execution, but the opposite happens (2, 1).{' '}
          </p>

          <p>
            <i>
              An example can be something so simple as a process generating 1000
              random numbers and another process putting those numbers into an
              array. The crash occurs when the latter process tries to grab the
              data, but the other process has not generated it yet.{' '}
            </i>
          </p>

          <h2>The Project</h2>

          <p>
            <b>Thnx Innovation</b> had launched a product called “TiHi på
            Skattjakt” which used AR to let you find eggs in a shopping mall.
            They wanted to explore the possibilities of expanding the game using
            satellite data and having a companion that shows you the way, and we
            were tasked in exploring how this could be done. We were meant to
            showcase a functioning prototype by the end of the term to both the
            company and our course supervisor (professor).
          </p>

          <h2>The Process</h2>

          <p>
            The project was iterative, which meant that we had goals we had to
            reach every other week to show to Thnx. In total, we had four
            iterations with workflows that worked like this:
          </p>

          <ul>
            <li>Iteration 1</li>
            <ul>
              <li>
                Place an object into the AR world and make it point to a point
                in the real world
              </li>
            </ul>
            <li>Iteration 2</li>
            <ul>
              <li>Objects in the world should look like treasures</li>
              <li>Three treasures should be placed in the world</li>
              <li>
                A notification should show up when a person is in the proximity
                of a treasure
              </li>
              <li>The positioning should be more precise</li>
            </ul>
            <li>Iteration 3</li>
            <ul>
              <li>
                See over bugs and problems by implementing the game logic in
                iteration 2
              </li>
              <li>
                Adjust the design of the game and game mechanics from the
                feedback group
              </li>
              <li>Make companion move towards treasures in sequence</li>
              <li>Finish the game itself</li>
            </ul>
            <li>Iteration 4</li>
            <ul>
              <li>Create a report, guide</li>
              <li>Compile deliverables</li>
            </ul>
          </ul>

          <h2>Stages in the development</h2>

          <p>
            This next section showcases milestones and gives you a general idea
            of how our progress looked.
          </p>

          <h3>Pre-Iteration</h3>

          <div className="imageWithDesc">
            <Img src={img0} />
            <p>
              <i>Image 1: Original sketch for a first prototype</i>
            </p>
          </div>

          <h3>Iteration 1</h3>

          <div className="imageWithDesc">
            <Img src={img1} />
            <p>
              <i>Image 2: Stickman in AR pointing his finger at a red pill</i>
            </p>
          </div>

          <h3>Iteration 2</h3>

          <div className="imageWithDesc">
            <Img src={img2} />
            <p>
              <i>
                Image 3: Treasure Placeholder (Purple box) being pointed to by
                an arrow
              </i>
            </p>
          </div>

          <h3>Iteration 3</h3>

          <div className="imageWithDesc">
            <Player playsInline src={video1} />
            <p>
              <i>Video 1: Demo of the app</i>
            </p>
          </div>

          <h3>Iteration 4</h3>

          <div className="imageWithDesc">
            <Img src={img3} />
            <p>
              <i>Image 4: Entire group and company members at our delivery</i>
            </p>
          </div>

          <h2>Thoughts After The Project</h2>

          <p>
            Best course experience of my life. Working with Thnx Innovation was
            a blast and their professionalism made it one of the most valuable
            experiences I’ve ever had in education.{' '}
          </p>

          <p>
            I am sure I’ll come back into making stuff in Unity as it is a
            valuable tool for making games. I’m happy about the skills I’ve
            gained in project management and C# as well.
          </p>
        </div>
        <FooterWrapper />
      </div>
    );
  }
}

export default TreasureHunt;
