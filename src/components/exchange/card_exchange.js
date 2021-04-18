import React, { Component } from "react";
import { connect } from "react-redux";

import "../../App.scss";

const amounts = ["1000 ARS", "1000 USD", "1000 YUAN"];
const cryptos = ["BTC", "BNB", "ETH"];

export default connect()(
  class CardExchange extends Component {
    constructor() {
      super();
      this.state = {};
    }

    render() {
      return (
        <div id="card_exchange">
          <div>
            <button>Comprar</button>
            <button>Vender</button>
          </div>

          <div>
            <div>
              <p>Quiero gastar</p>
              <select name="language">
                {amounts.map((amount) => (
                  <option selected value={amount}>
                    {amount}
                  </option>
                ))}
              </select>
              <p>≈ 0.00000000 BTC Fees incluídos ?</p>
            </div>
            <div>
              <p>Quiero comprar</p>
              <select name="language">
                {cryptos.map((crypto) => (
                  <option selected value={crypto}>
                    {crypto}
                  </option>
                ))}
              </select>
              <p>1 BTC = 1,405,159.43 ARS</p>
            </div>
          </div>

          <div>
            <p>
              El precio incluye los gastos del procesador de pagos (1.5% o min
              ARS 0). Al continuar estas aceptando los términos y condiciones.
            </p>
          </div>
          <div>
            <button>Siguiente</button>
          </div>
        </div>
      );
    }
  }
);
