import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          Hi, my name is Rakib Abdur, and I am a student an undergraduate in
          Software and Web Development. I would like to start working as a
          fullstack developer, with a bit more emphasize on the front-end. For
          this reason, I started with React, which has been used to make this
          website. Every web-dev needs a portfolio, so I decided to create one
          in React; so that I can use it to both show my skills with React, as
          well as use it to showcase myself, and future projects. In the next
          months, I should upload more projects, using React, or Angular. As
          said before, I am interested in fullstack, so for the backend I am
          learned a bit of PHP and MySQL. I saw that NodeJS is very popular at
          the moment, so I want to learn Node, and use it for dealing with
          requests and more. You can check my CV in here:{" "}
          <a
            href="https://drive.google.com/open?id=1DBO7lcSeBx4tHR7dJPIDmd_rj3DMWwMaJkooEvLtut4"
            rel="noopener noreferrer"
            target="_blank"
          >
            CV
          </a>
        </p>

        <p>Check some of the work I have done at my last dev job:</p>
        <ul>
          <li>
            <a
              href="https://www.planitglobal.co.uk/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Planit global main page
            </a>
          </li>
          <li>
            <a
              href="https://www.planitglobal.co.uk/en/explore/infoverse"
              rel="noopener noreferrer"
              target="_blank"
            >
              Infoverse
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://www.planitglobal.co.uk/en/info/business"
              rel="noopener noreferrer"
              target="_blank"
            >
              Business section
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://www.planitglobal.co.uk/en/info/explorer"
              rel="noopener noreferrer"
              target="_blank"
            >
              Explorer section
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://www.planitglobal.co.uk/en/info/education"
              rel="noopener noreferrer"
              target="_blank"
            >
              Education section
            </a>
          </li>
        </ul>
        <p>I worked on these pages using HTML/CSS, JS and Ruby on Rails.</p>
      </Content>
    </div>
  );
}

export default AboutPage;
