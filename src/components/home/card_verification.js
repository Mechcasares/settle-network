import React, { Component } from "react";
import { connect } from "react-redux";

import { ReactComponent as Verification } from "../../img/svg/verification.svg";

import "../../App.scss";

export default connect()(
  class CardVerification extends Component {
    constructor() {
      super();
      this.state = {};
    }

    render() {
      return (
        <div id="card_verification">
          <div>
            <Verification></Verification>
            <h2>Verificación de identidad incompleta</h2>
          </div>
          <div>
            <button>Completar</button>
          </div>
        </div>
      );
    }
  }
);
