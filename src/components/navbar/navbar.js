import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Logo from "../../img/latamex.png";
import Argentina from "../../img/argentina.png";
import Avatar from "../../img/avatar.jpg";

import "../../App.scss";
import "../navbar/navbar.scss";

const mapStateToProps = (state) => {
  return {};
};

const mapActionsToProps = {};

const languages = ["United States", "China", "Argentina"];

export default connect(
  mapStateToProps,
  mapActionsToProps
)(
  class Navbar extends Component {
    constructor() {
      super();
      this.state = {};
    }

    render() {
      return (
        <div id="navbar">
          <div>
            <img src={Logo} alt="logo" />
            <div>
              <img src={Avatar} alt="avatar" />
              <p>juan.juanson@gmail.com</p>
            </div>
          </div>
          <ul>
            <Link to="/">
              <li>
                <p>Inicio</p>
              </li>
            </Link>
            <Link to="/exchange">
              <li>
                <p>Comprar/Vender </p>
              </li>
            </Link>
            <Link to="/configuration">
              <li>
                <p>Mi cuenta </p>
              </li>
            </Link>
            <Link to="/">
              <li>
                <p>Cerrar Sesión </p>
              </li>
            </Link>
          </ul>
          <div>
            <img src={Argentina} alt="argentina" />
            <select name="language">
              {languages.map((language) => (
                <option selected value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
        </div>
      );
    }
  }
);
