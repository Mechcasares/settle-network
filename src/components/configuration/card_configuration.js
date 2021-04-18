import React, { Component } from "react";
import { connect } from "react-redux";

import { ReactComponent as Verification } from "../../img/svg/verification.svg";
import { ReactComponent as Limit } from "../../img/svg/limit.svg";
import { ReactComponent as Email } from "../../img/svg/email.svg";
import { ReactComponent as Phone } from "../../img/svg/phone.svg";
import { ReactComponent as Lock } from "../../img/svg/lock.svg";
import { ReactComponent as World } from "../../img/svg/world.svg";

import "../../App.scss";

const amounts = ["1000 ARS", "1000 USD", "1000 YUAN"];
const cryptos = ["BTC", "BNB", "ETH"];

export default connect()(
  class CardConfiguration extends Component {
    constructor() {
      super();
      this.state = {};
    }

    render() {
      return (
        <div id="card_configuration">
          <table class="w3-table w3-bordered">
            <tr>
              <td>
                <Verification />
              </td>
              <td>Verificación de identidad Argentina - Completado</td>
              <td>Juan Juanson 04/01/1990</td>
              <td>Hombre DNI 35993148</td>
              <td></td>
              <td>
                <button>Completar</button>
              </td>
            </tr>
            <tr>
              <td>
                <Email />
              </td>
              <td>juan.juanson@gmail.com</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button>Cambiar</button>
              </td>
            </tr>
            <tr>
              <td>
                <Phone />
              </td>
              <td>2+5491142449298</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button>Cambiar</button>
              </td>
            </tr>
            <tr>
              <td>
                <Lock />
              </td>
              <td>******************</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button>Cambiar</button>
              </td>
            </tr>
            <tr>
              <td>
                <Limit />
              </td>
              <td>Limites</td>
              <td>Límite anual restante 0 / 0 </td>
              <td>Límite diario restante 0 / 0</td>
              <td></td>
              <td>
                <button>Solicitar aumento</button>
              </td>
            </tr>
            <tr>
              <td>
                <World/>
              </td>
              <td>Argentina</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button>Cambiar</button>
              </td>
            </tr>
          </table>
          <div>
            <button>Cerrar sesión</button>
          </div>
        </div>
      );
    }
  }
);
