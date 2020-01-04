import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          Hi, my name is Rakib Abdur, and I am a software developer. During my
          past education I learned technologies such as HTML/CSS, JavaScript,
          PHP, MySQL and C#. During my freetime, I expanded on these
          technologies, by following tutorials, and creating projects. By myself
          I learned Bootstrap, Materialize CSS and I am currently learning
          ReactJS. My skills are mainly targeted for the front-end, but I am
          interested in fullstack. I am currently learning Java, with emphasis
          on Android. You can check my CV in here:{" "}
          <a
            href="https://drive.google.com/open?id=1DBO7lcSeBx4tHR7dJPIDmd_rj3DMWwMaJkooEvLtut4"
            rel="noopener noreferrer"
            target="_blank"
          >
            CV
          </a>
        </p>

        <p>
          I worked as a front-end developer at PLANit Global, where I created
          new pages that followed the mock designs, and I added new features to
          their website.
        </p>
      </Content>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default AboutPage;
