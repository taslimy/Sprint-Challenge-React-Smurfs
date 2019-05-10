import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class navBar extends Component {
  render() {
    return (
      <div>
        <div className="ui menu">
          <div className="header item">Smurfs App</div>
          <NavLink exact to="/" className="item">
            Current Smurfs
          </NavLink>
          <NavLink exact to="/smurf-form" className="item">
            Become a Smurf
          </NavLink>
        </div>
      </div>
    );
  }
}
