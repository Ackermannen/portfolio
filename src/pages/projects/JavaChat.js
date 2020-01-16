import React, { Component } from 'react';
import '../../css/projectDocument.css';
import FooterWrapper from '../../components/main_page/FooterWrapper';

class JavaChat extends Component {
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
          <h1>The Java Chat Client</h1>
          <p>
            We created a functioning Java chat client from scratch that uses the
            command prompt as an interface and transmits protocols through TCP.
          </p>

          <h2>How it works</h2>

          <p>
            Each type of data has a specific key at it's first byte sent. We
            have to interpret and encode the data differently depending on what
            kind of key we receive or send. By going off a certain pattern,
            e.g., First byte is type, next byte is amount of bytes in content,
            and the rest being content, we can effectively create a functioning
            chat client that converts messages into bytes and sends them through
            the internet (or local network in this case).
          </p>

          <h2>Where can I see it?</h2>

          <p>
            The source code is available at{' '}
            <a href="https://github.com/Ackermannen/java_chat_lab">GitHub</a>!
            To run it however, you would need to construct the server side
            first!
          </p>
        </div>
        <FooterWrapper />
      </div>
    );
  }
}

export default JavaChat;
