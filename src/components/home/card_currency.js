import React, { Component } from "react";
import { connect } from "react-redux";

import Bitcoin from "../../img/bitcoin.png";

import "../../App.scss";

export default connect()(
  class CardCurrency extends Component {
    constructor() {
      super();
      this.state = {};
    }

    render() {
      return (
        <div id="card_currency">
          <div>
            <img src={Bitcoin} alt="bitcoin" />
            <h2>BTC</h2>
            <h2>ARS 1,377,488.24</h2>
          </div>
          <div>
            <button>Comprar</button>
            <button>Vender</button>
          </div>
        </div>
      );
    }
  }
);
