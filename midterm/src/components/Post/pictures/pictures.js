import React, { Component } from "react";
import poland from "./poland.jpg";
import norway from "./norway.jpg";
import sydney from "./sydney.jpg";
import "../../../App.css";


export default class Picture extends Component {
    
    
    render() {
        const url=["./poland.jpg",
      
    ]
       
        return (
            <div >
                
              <div class="gallery">
              <img src={poland}></img>  
             <div class="desc">Poland</div>
             <img src={norway}></img>  
             <div class="desc">Norway</div>
             <img src={sydney}></img>  
             <div class="desc">Sydney</div>
             
             </div> 
            {/* {url.map(pictures=>
            <iframe width="200" height="112.5" src={pictures}
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>)} */}
             
            </div>
        );
    }
}
