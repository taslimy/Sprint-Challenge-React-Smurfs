import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class navBar extends Component {
  render() {
    return (
      <div>
        <div className="ui menu">
          <div className="header item">Smurfs App</div>
          <Link exact to="/" className="item">
            Current Smurfs
          </Link>
          <Link exact to="/smurf-form" className="item">
            Become a Smurf
          </Link>
        </div>
      </div>
    );
  }
}
