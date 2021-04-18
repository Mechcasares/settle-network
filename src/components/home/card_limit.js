import React, { Component } from "react";
import { connect } from "react-redux";

import { ReactComponent as Limit } from "../../img/svg/limit.svg";

import "../../App.scss";

export default connect()(
  class CardLimit extends Component {
    constructor() {
      super();
      this.state = {};
    }

    render() {
      return (
        <div id="card_limit">
          <div>
            <Limit></Limit>
            <div>
              <h2>Límites</h2>
              <p>Límite anual restante 0/0</p>
              <p>Límite diario restante 0/0</p>
            </div>
          </div>
          <button>Solicitar aumento</button>
        </div>
      );
    }
  }
);
