import React from "react";
import Hiphop from "./hiphop/hiphop";
import Pop from "./pop/pop";
import Alcohol from "./alcohol/alcohol";
import Day1 from "./diary/day1";
import Day2 from "./diary/day2";
import Picture from "./pictures/pictures";
import Input from "./input/input";
import "../../App.css";


import { NavLink, Switch, Route, Redirect } from "react-router-dom";

export default ({ id }) => {

 


if(id==1){
    return (
        
        <article >
            <NavLink to ="/hiphop/1/hiphop" >Ｈiphop</NavLink>
               <br></br>
               <NavLink to ="/hiphop/1/pop" >MY FAVORITE</NavLink>
               <br></br>
               <NavLink to ="/hiphop/1/alcohol" >alcohol</NavLink>

               <Route exact path="/hiphop/1/hiphop" component={Hiphop}/>
               <Route exact path="/hiphop/1/pop" component={Pop}/>
               <Route exact path="/hiphop/1/alcohol" component={Alcohol}/>


               
             </article>

    );}
    else if(id==3){
        return(
            <article>
                <NavLink to ="/chill/3/day1" >DAY1</NavLink>
                <br/>
                
                <NavLink to ="/chill/3/day2" >DAY2</NavLink>

                <Route exact path="/chill/3/day1" component={Day1}/>
                <Route exact path="/chill/3/day2" component={Day2}/>


            </article>
        )
    }
    else if(id==5){
        return(
            <article>
                <h1>WHERE I WANT TO GO</h1>
                <Picture/>
            </article>
        )
    }
    else if(id==7){
        return(
            <article>
                <h1>talk too me </h1>
                <Input />
            </article>
        )
    }
    // else if(id==9){
    //     return(
    //         <article>
    //             <a href="http://flappybird.io/"  title="FLAPPY BIRD">http://flappybird.io/</a>
    //         </article>
    //     )
    // }

    return (
<article>
    <h1> ERROR!!!</h1>
</article>
    );
};
