import React, { Component } from "react";

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="continer">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title pt-5 text-uppercase">
            <h1 className="display">404</h1>
            <h2>error</h2>
            <h2>page not found</h2>
            <h3>
              tech requesed URL{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>
              was not found
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
