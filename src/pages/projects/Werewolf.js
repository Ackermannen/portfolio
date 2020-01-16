import React, { Component } from 'react';
import '../../css/projectDocument.css';
import FooterWrapper from '../../components/main_page/FooterWrapper';

class Werewolf extends Component {
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
          <h1>Mobile Table-Top Game</h1>
          <p>
            Using Unity, we created a card game prototype where we send packages
            between different clients to simulate turn order and different
            cards. This was part of a course in application development for the
            internet. As such, our vision for the game was limited to the time
            of the course and we didn't get farther than getting people joining,
            and playing the night phase of the game.
          </p>

          <h2>What is the card game?</h2>

          <p>
            <b>
              <a href="https://beziergames.com/products/one-night-ultimate-werewolf">
                One Night Ultimate Werewolf
              </a>
            </b>{' '}
            is a deceit-based board game where each player is assigned a role,
            and the different teams try to accomplish their objectives. I won't
            go into detail about the rules of the game, so I assume that you
            have read up on the game before continuing.
          </p>

          <h2>Our Project</h2>
          <p>
            We wanted to translate the mechanics of Werewolf into a mobile game
            using local wifi networking, which we could partly achieve. In
            particular, we managed to get several clients connected and able to
            play the night phase of the game. We wanted the app to function in a
            way that allowed the app to function as both a server and a client
            depending on who started the game, but we had to settle for a
            dedicated server in this experiment.
          </p>

          <p>
            Another restriction was that we couldn't seem to get past the
            firewall on devices, which meant it was cumbersome to get running on
            mobile devices.
          </p>

          <h2>What we were able to achieve</h2>

          <ol>
            <li>
              First player becomes party leader and is able to control the flow
              of the game
            </li>
            <li>
              Server is able to transmit information between all clients to keep
              state of game updated.
            </li>
            <li>
              Roles were able to do their night activities and we managed to
              implement it in a expandable and flexible way.
            </li>
          </ol>

          <h2>What we were NOT able to achieve</h2>

          <ol>
            <li>
              The updated board to be sent to the server and later clients,
              meaning that changes made to the board was only local
            </li>
            <li>Run on mobile devices without dedicated servers</li>
            <li>Make the game able to handle different amount of players</li>
          </ol>

          <h2>Take aways</h2>
          <p>
            Going from a singleplayer experience to a multiplayer experience is
            a lot harder than we originally thought. we could have, in
            hindsight, spent the same amount of time to make the client
            experience great, but I believe it was a lot more valuable to learn
            how to send internet packages in Unity and how to implement these
            solutions in the future. I've got a better understanding of the
            workflow neccessary to integrate the client to the server.
          </p>

          <h2>Where can i see it?</h2>

          <p>
            Source code is available at my{' '}
            <a href="https://github.com/Ackermannen/werewolf_public">GitHub</a>!
          </p>
        </div>
        <FooterWrapper />
      </div>
    );
  }
}

export default Werewolf;
