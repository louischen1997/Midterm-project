import React, { Component } from "react";


export default class Hiphop extends Component {
    
    
    render() {
        const music=["https://www.youtube.com/embed/jNdBXsZJgF8",
        "https://www.youtube.com/embed/1Hpq7ndSi34",
        "https://www.youtube.com/embed/N1fyvw4dRis",
        "https://www.youtube.com/embed/U-yEbxZGsdM" ,
        "https://www.youtube.com/embed/s4gSDoKAfZI"]
        
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
