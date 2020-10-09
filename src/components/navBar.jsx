import React, { Component } from "react";

class NavBar extends Component {
  render() {
   
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="https://getbootstrap.com/">
    Navbar <span>Total {
    this.props.count
    }</span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
