import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Rakib Abdur",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" }
      ],
      home: {
        title: "My Portfolio",
        subTitle: "Projects",
        text: "Links:",
        git: [
          <a
            href="https://github.com/rakib98"
            key={0}
            rel="noopener noreferrer"
            target="_blank"
            className="pr-3"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>,
          <a
            href="https://drive.google.com/open?id=1DBO7lcSeBx4tHR7dJPIDmd_rj3DMWwMaJkooEvLtut4"
            key={1}
            rel="noopener noreferrer"
            target="_blank"
            className="pr-5"
          >
            <i className="far fa-file-alt fa-2x"></i>
          </a>
        ]
      },
      about: {
        title: "About Me"
      }
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="navbar sticky-top navbar-dark bg-dark" expand="lg">
            <Link to="/home">
              <Navbar.Brand>Rakib Abdur</Navbar.Brand>
            </Link>
          </Navbar>
          <HomePage
            title={this.state.home.title}
            subTitle={this.state.home.subTitle}
            text={this.state.home.text}
            git={this.state.home.git}
          />
          <hr />
          <AboutPage title={this.state.about.title} />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
