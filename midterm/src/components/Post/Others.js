import React from "react";
import "../../App.css";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import Inputting from "./input.js";
import Chill from "../../containers/Blog/Chill/Chill";





export default ({ id, url }) => {


    var classtype = String(String(window.location.href).split("/")[3])

    const music = ["https://www.youtube.com/embed/jNdBXsZJgF8",
        "https://www.youtube.com/embed/1Hpq7ndSi34",
        "https://www.youtube.com/embed/N1fyvw4dRis",
        "https://www.youtube.com/embed/U-yEbxZGsdM",
        "https://www.youtube.com/embed/s4gSDoKAfZI",
        "https://www.youtube.com/embed/J06CwBgXJ60"
    ]
    if (id <= 9) {

        var number = music[(Number(id) + 1) / 2 - 1]
        console.log(number)
    }
    else {
        var number = url
    }


    return (

        <article >
            <button class="back"><NavLink to={"/" + classtype}>back</NavLink></button>

            <iframe width="420" height="315" src={number} class="video" ></iframe>
            <Inputting id={id}></Inputting >

        </article>

    );

};
