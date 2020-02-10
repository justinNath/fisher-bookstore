import React, { Component } from "react";
import { Navbar,Nav,NavItem } from "react-bootstrap";
import { Link} from "react-router-dom"; 
import Routes from "./route";
import "./App.css";


export default class App extends Component {
  render() {
    return (
      <div className = "App container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Link to="/"> Fisher Bookstore </Link>
          </Navbar.Brand>
        </Navbar>
        <Routes />
      </div>
    );
  }
}