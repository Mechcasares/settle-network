import React, { Component } from "react";
import { connect } from "react-redux";

import "../../App.scss";
import "../home/home.scss";

import CardCurrency from "./card_currency";
import CardVerification from "./card_verification";
import CardLimit from "./card_limit";
import CardTable from "./card_table";

const mapStateToProps = (state) => {
  return {};
};

const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(
  class Home extends Component {
    constructor() {
      super();
      this.state = {};
    }

    render() {
      return (
        <div id="home">
          <div className="row">
            <CardCurrency />
            <CardCurrency />
            <CardCurrency />
          </div>
          <div className="row">
            <CardCurrency />
            <CardCurrency />
            <CardCurrency />
          </div>
          <div className="row_button">
            <button>Ver más</button>
          </div>
          <div className="row">
            <CardVerification />
          </div>
          <div className="row">
            <CardLimit />
          </div>
          <div className="row">
            <CardTable />
          </div>
        </div>
      );
    }
  }
);
