import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import logo from "./assets/img/logo.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Rakib Abdur",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" }
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
      },
      contact: {
        title: "Contanct Me"
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
            {/* <Navbar.Toggle className="broder-0" aria-controls="navbar-toggle" />

            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/home" >Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse> */}
          </Navbar>
          {/* <Switch>
          <Route path="/home" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} git={this.state.home.git}/>}/>
          <Route path="/about"  render={() => <AboutPage title = {this.state.about.title} />} />
          <Route path="/contact"  render={() => <ContactPage title = {this.state.contact.title} />} />
          <Redirect to="/home" />
          </Switch> */}
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
