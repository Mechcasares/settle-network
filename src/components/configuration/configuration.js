import React, { Component } from "react";
import { connect } from "react-redux";

import "../../App.scss";
import "./configuration.scss";

import CardConfiguration from "./card_configuration";

const mapStateToProps = (state) => {
  return {};
};

const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(
  class Configuration extends Component {
    constructor() {
      super();
      this.state = {};
    }

    render() {
      return (
        <div id="configuration">
          <div className="row">
            <CardConfiguration />
          </div>
        </div>
      );
    }
  }
);
