import React, { Component } from 'react';
import Img from 'react-image';
import '../../css/projectDocument.css';
import FooterWrapper from '../../components/main_page/FooterWrapper';
import img1 from '../../img/projectImages/portfolioProject/img1.png';
import img2 from '../../img/projectImages/portfolioProject/img2.png';
import img3 from '../../img/projectImages/portfolioProject/img3.png';

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <div id="projectItemContainer">
        <div id="backArrow">
          <a href="#/portfolio/projects">
            <p>&#8678;</p>
          </a>
        </div>
        <div id="projectItemPageContainer">
          <h1>The React Portfolio</h1>

          <p>
            React is a tool for making webpages. Unlike coding in HTML, React
            allows you to to add elements to your page more dynamically, and is
            a useful tool for web production
          </p>

          <h2>Purpose</h2>

          <p>
            My intention with this project is to remake my online portfolio and
            adding features that would be absent with regular HTML. I also
            intend to take my time to learn the niches of developing with React,
            seeing the improvements that an object-oriented web environment has
            to offer
          </p>

          <h2>Method</h2>

          <p>
            I intend to do the project using Visual Studio Code, React, Node.js
            (as React runs off node), and GitHub for version control. My
            workflow will work like this:
          </p>

          <ol>
            <li>Decide features I want</li>
            <li>Develop those features in React</li>
            <li>Develop design for the page</li>
            <li>Write project-reports my portfolio</li>
            <li>Publish page</li>
          </ol>

          <p>
            The project was initialized <b>2019-12-16</b> and is meant to be
            ready before <b>2020-01-20</b>.
          </p>

          <h2>I, II. Deciding Features</h2>

          <h3>Dynamic Entries</h3>

          <p>
            One of the first problems with creating a React page is determining
            why you want to use React. Static HTML, for this case anyway, would
            serve the page well enough and perfectly fine to use, but what HTML
            does not have is the same scalability. As an example, adding new
            skills or projects (See Image 1) to a static document requires you
            to go into the source code, copy the existing template for a
            “skill”/”project”, make changes manually, and publish the changed
            page.
          </p>

          <div className="imageWithDesc">
            <Img src={img1} />
            <p>
              <i>Image 1: List of skills</i>
            </p>
          </div>

          <p>
            This process is simplified in React by giving the parent component
            control over what’s inside its child, essentially treating the
            children as dynamically generated content that can be extracted
            from, for example, a database. Now, at the time of writing, this
            project will not feature a database, and that is because Github
            Pages does not feature database support. The content is hard-coded
            into the React files themselves, but any future expansion of these
            will be trivial as that requires you to simply add another entry
            (See Image 2).
          </p>

          <div className="imageWithDesc">
            <Img src={img2} />
            <p>
              <i>Image 2: Skill Entries</i>
            </p>
          </div>

          <p>
            Thus, if a database implementation ever becomes viable, then much of
            the work inside React is already finished.{' '}
          </p>

          <h3>Project Topic Filtering</h3>

          <p>
            The needs of an employer when looking at a portfolio can be
            drastically different from one another, so clearly, not all projects
            are relevant. Using react, we can implement a handy filtering system
            to the projects page that will solve this.
          </p>

          <p>
            The way we do this is similar to adding a skill. We dynamically
            create components using the parent of that component. Inside of the
            child component is a variety of tags that tells us what the project
            is about. We then add buttons that correspond to those tags and make
            a simple statement inside the parent that chooses to display each
            project only if it contains no tags where there are corresponding
            buttons that are disabled.
          </p>

          <div className="imageWithDesc">
            <Img src={img3} />
            <p>
              <i>Image 3: Project Entry</i>
            </p>
          </div>

          <h2>III. Design For The Page</h2>

          <p>
            It is useful to have a design ready beforehand. Unfortunately, due
            to time constraints, I did not go through with a prototype and
            therefore much of the page was made on the go. I believe that it fit
            my purposes although that meant cutting some corners in
            standardization of the page’s CSS and HTML.
          </p>

          <h2>Take-Aways</h2>

          <p>
            It has been a good learning experience to learn React from scratch.
            It is a useful tool in web development and makes it easier to create
            dynamic web pages where the content varies. If I were to do it all
            over, then I would have reconsidered the design of the page and make
            that beforehand in a tool like Adobe DX or similar. That way I could
            have avoided some cluttered code structure that hampered the
            efficiency of programming by the end of the project.
          </p>

          <p>
            In the future, I intend to look at how to include database
            functionality within the page but for now, I am happy with the
            result.
          </p>

          <h2>Where can I see it?!</h2>

          <p>You’re looking at it silly!</p>
        </div>
        <FooterWrapper />
      </div>
    );
  }
}

export default Portfolio;
