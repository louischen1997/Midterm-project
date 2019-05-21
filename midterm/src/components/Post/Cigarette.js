import React from "react";
import "../../App.css";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import Inputting from "./input.js";



export default ({ id }) => {
    var classtype = String(String(window.location.href).split("/")[3])


    const music = [  "https://www.youtube.com/embed/alGDhpwJ1c4",
    "https://www.youtube.com/embed/rqZlVtQAai8",
    "https://www.youtube.com/embed/Aqdh6s75_6k",
    "https://www.youtube.com/embed/BlblBvpVgjE",
    "https://www.youtube.com/embed/MHKnSFlDBLQ"
    ]

    var number = Number(id)

    return (

        <article >
            <button class="back"><NavLink to={"/" + classtype}>back</NavLink></button>

            <iframe width="420" height="315" src={music[(number + 1) / 2 - 1]} class="video" ></iframe>
            <Inputting></Inputting>
        </article>

    );


};
