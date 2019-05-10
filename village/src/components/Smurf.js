import React from 'react';
import { Fragment } from 'react'
import "../App.css";

const Smurf = props => {
  return (
    <Fragment>
      <div className="ui card">
        <div className="ui placeholder">
          <div className="square image" />
        </div>
        <div className="content">
          <div className="header">{props.name}</div>
        </div>
        <div className="content">
          <div className="description">
            <p> Age: {props.age} </p>
            <p>
             <p> Height:{props.height}</p>
            </p>
          </div>
        </div>
        <div className="extra content">
          <button
            onClick={e => props.deleteSmurf(e, props.id)}
            className="ui negative button"
          >
            Delete Smurf
          </button>
          {/* not enough time */}
          <button className="ui button disabled">
            Edit a Smurf
          </button>
        </div>
      </div>
    </Fragment>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

