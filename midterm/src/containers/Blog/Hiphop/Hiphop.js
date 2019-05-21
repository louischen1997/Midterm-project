import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Hiphop extends Component {
    
    render() {
        const postIDs = ["1", "3", "5", "7","9"];
        const lists=[
            <div>
             <li class="classify">
                 <NavLink to={"/hiphop/" +postIDs[0]}>MY FAVORITE MUSICS</NavLink>
             </li>
             <br></br>
               <li class="classify" >
                  <NavLink to={"/hiphop/" +postIDs[1]}>MY DIARY</NavLink>
              </li>
              <br></br>
                <li  class="classify">
                <NavLink to={"/hiphop/" +postIDs[2]}>MY PICTURES</NavLink>
            </li>
            <br></br>
               <li  class="classify">
               <NavLink to={"/hiphop/" +postIDs[3]}>TALK TO ME SECRETELY</NavLink>
           </li>
           <br></br>
           {/* <li >
               <NavLink to={"/posts/" +postIDs[4]}>LET'S PLAY A GAME</NavLink>
           </li> */}
           </div>]
        
        // const lists = postIDs.map((i, index) => (
        //     <li key={index}>
        //         <NavLink to={"/posts/" + i}>Posts {i}</NavLink>
        //     </li>
        // ));
        return (
            <div>
                {/* <h3>SELECT PAGES</h3> */}
                {lists}
            </div>
        );
        
       
       
    }
}
