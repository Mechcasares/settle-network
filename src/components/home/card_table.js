import React, { Component } from "react";
import { connect } from "react-redux";

import "../../App.scss";

export default connect()(
  class CardTable extends Component {
    constructor() {
      super();
      this.state = {};
    }

    render() {
      return (
        <div id="card_table">
          <h2>Verificación de identidad incompleta</h2>
          <table class="w3-table w3-bordered">
            <tr>
              <td>20/2/2020</td>
              <td>Buy BTC</td>
              <td>ARS 40,000.00</td>
              <td>BTC 0.0052346</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>20/2/2020</td>
              <td>Buy BTC</td>
              <td>ARS 40,000.00</td>
              <td>BTC 0.0052346</td>
              <td>Complete</td>
            </tr>
            <tr>
              <td>20/2/2020</td>
              <td>Buy BTC</td>
              <td>ARS 40,000.00</td>
              <td>BTC 0.0052346</td>
              <td>Expired</td>
            </tr>
            <tr>
              <td>20/2/2020</td>
              <td>Buy BTC</td>
              <td>ARS 40,000.00</td>
              <td>BTC 0.0052346</td>
              <td>Pending</td>
            </tr>
          </table>
        </div>
      );
    }
  }
);
