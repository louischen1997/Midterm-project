import React, { Component } from "react";


export default class Alcohol extends Component {
    
    
    render() {
        const music=[
            "https://www.youtube.com/embed/alGDhpwJ1c4",
            "https://www.youtube.com/embed/rqZlVtQAai8",
            "https://www.youtube.com/embed/Aqdh6s75_6k",
            "https://www.youtube.com/embed/BlblBvpVgjE",
            "https://www.youtube.com/embed/MHKnSFlDBLQ"]
       
        return (
            <div>
            <div>
            {music.map(musics=>
            <iframe width="200" height="112.5" src={musics}
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>)}
            </div>  
            </div>
        );
    }
}
