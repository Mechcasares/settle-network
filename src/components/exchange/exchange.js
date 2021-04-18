import React, { Component } from "react";
import { connect } from "react-redux";

import "../../App.scss";
import "./exchange.scss";

import CardExchange from "./card_exchange";

const mapStateToProps = (state) => {
  return {};
};

const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(
  class Exchange extends Component {
    constructor() {
      super();
      this.state = {};
    }

    render() {
      return (
        <div id="exchange">
          <div className="row">
            <CardExchange />
          </div>
        </div>
      );
    }
  }
);
