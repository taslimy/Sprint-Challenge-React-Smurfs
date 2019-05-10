import React, { Fragment, Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  //  saw what i did wrong. / / / / /
  ////
  // addSmurf = event => {
  //   event.preventDefault();
  //   // add code to create the smurf using the api
  //   axios
  //     .post(`http://localhost:3333/smurfs`, { ...this.state })
  //     .then(res => {
  //       this.setState({
  //         smurfs: res.data
  //       });
  //       this.props.history.push("/");
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   this.setState({
  //     name: "",
  //     age: "",
  //     height: ""
  //   });
  // };

  addSmurf = event => {
    event.preventDefault();
    const smurfs = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addASmurf(smurfs);

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <div className="ui container">
          <div className="ui form">
            <div className="ui message">
              <div className="header">To Become a smurf!</div>
              <p>
                All you have to do is full out the form below. Then, click on
                <strong> Back to Current Smurf</strong> see if you have been
                added.
              </p>
            </div>

            <form>
              <div className="field">
                <label>First Name & Last Name</label>
                <input
                  onChange={this.handleInputChange}
                  placeholder="name"
                  value={this.state.name}
                  name="name"
                />
              </div>

              <div className="field">
                <label>Age</label>
                <input
                  onChange={this.handleInputChange}
                  placeholder="age"
                  value={this.state.age}
                  name="age"
                  type="number"
                />
              </div>
              <div className="field">
                <label>height</label>
                <input
                  onChange={this.handleInputChange}
                  placeholder="height"
                  value={this.state.height}
                  name="height"
                  type="number"
                />
              </div>
              <Link exact to="/">
                <button
                  className="ui positive button"
                  onClick={this.addSmurf}
                  type="submit"
                >
                  Add to the village
                </button>
              </Link>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SmurfForm;
