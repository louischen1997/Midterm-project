import React, { Component } from "react";


export default class Pop extends Component {
    
    
    render() {
        const music=[
            "https://www.youtube.com/embed/UXHTGeGkZwU",
             "https://www.youtube.com/embed/Z97zUBtHZGY",
             "https://www.youtube.com/embed/djACkCHl3JA",
             "https://www.youtube.com/embed/FTvlauiLI_w",
             "https://www.youtube.com/embed/wnUJv5Ej39I"]
       
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
