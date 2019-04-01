import React, { Component } from "react";
import {NavLink} from "react-router-dom";
class NavigationSide extends Component {
  render() {
    return (
        <ul className="header">
        <li><NavLink className="home" exact to="/">Home</NavLink></li>
        <li><NavLink className="stuff" to="/stuff">Travel</NavLink></li>
        <li><NavLink className="contact" to="/contact">Agenda</NavLink></li>
      </ul>
    );
  }
}
 
export default NavigationSide;