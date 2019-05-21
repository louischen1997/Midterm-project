import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import wawa from "./wawa.jpg";

export default class Home extends Component {
    
    render() {
        
       
        return (
            <div>
              <h1>下禮拜六科</h1> 
              <br></br>
              <h1>人生好難：（（（（（（（（（</h1>
              <img src={wawa} class="coffee"></img>
            </div>
        );
    }
}