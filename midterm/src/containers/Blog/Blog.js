import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import Chill from "./Chill/Chill";
import Party from "./Chill/Chill";
import Others from "./Chill/Chill";
import Hiphop from "./Hiphop/Hiphop";
import Main from "./Main/main";
import HiphopRender from "./Hiphop/HiphopRender";
import ChillRender from "./Chill/ChillRender";
import CigaretteRender from "./cigarette/CigaretteRender";
import Cigarette from "./cigarette/Cigarette";
import Home from "./Home/home";
import cover from "../../components/Post/pictures/cover.jpg";
import "../../App.css";


var sectionStyle = {
    width: "700",
    height: 700,
    backgroundSize: 'cover',
    backgroundImage: "url(" + cover + ")"
};

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            musictype: ["cigarette", "others", "chill", ],
            current: 2,
            last: 1,
            next: 3,
            currentword: " CURRENT STATUS ",
            circle: "circle"

        };
    }

   
    handlemusictype = (ref) => {

        if (ref == 1) {
            if (this.state.current == this.state.musictype.length - 1) {
                this.setState({
                    current: 0,
                    next: 1,
                    last: this.state.current,
                })
            }
            else {
                this.setState({
                    current: this.state.current + 1,
                    last: this.state.current,
                    next: this.state.current + 2,
                })
            }
        }

        else {
            if (this.state.current == 0) {
                this.setState({
                    current: this.state.musictype.length - 1,
                    last: this.state.musictype.length - 2,
                    next: 0,
                })
            }
            else {
                this.setState({
                    current: this.state.current - 1,
                    last: this.state.current - 2,
                    next: this.state.current,
                })
            }
        }
    }
    handlemousein = () => {

        this.setState({
            currentword: this.state.musictype[this.state.current]+" - https://www.youtube.com/embed/TmN7VR7fKCY",
            circle: "circle2"
        })
    }

    handleout = () => {

        this.setState({
            currentword: " CURRENT STATUS",
            circle: "circle"

        })
    }

    render() {

        if (this.state.last < 0) {
            this.setState({
                last: this.state.last + this.state.musictype.length
            })
        }
        if (this.state.next == this.state.musictype.length) {
            this.setState({
                next: this.state.next - this.state.musictype.length
            })
        }
        console.log(this.state.musictype[this.state.current])


        // const main = [<button class="main"><NavLink to="/main"><h1>MAIN</h1></NavLink></button>]

        const currenttest = [<div class={this.state.circle} onMouseEnter={() => this.handlemousein()} onMouseLeave={() => this.handleout()}><h6 class="type2">&nbsp;&nbsp;&nbsp;&nbsp;{this.state.currentword}</h6></div>]

        return (
            <div >
                <section style={sectionStyle} class="border">
                    {currenttest}

                    <button class="last" onClick={() => this.handlemusictype(0)}>
                        <NavLink to={"/" + this.state.musictype[this.state.last]} class="herf">
                            <h1> ⇦</h1></NavLink>
                    </button>


                    <button class="last2">
                        <h1> {this.state.musictype[this.state.last]}</h1>
                    </button>


                    <button class="post"  >
                        <NavLink to={"/" + this.state.musictype[this.state.current]}><h1>{this.state.musictype[this.state.current]}</h1></NavLink>
                    </button>

                    <button class="last2">
                        <h1> {this.state.musictype[this.state.next]}</h1>
                    </button>

                    <button class="next" onClick={() => this.handlemusictype(1)}>
                        <NavLink to={"/" + this.state.musictype[this.state.next]} class="herf"><h1>⇨</h1></NavLink>
                    </button>


                    <Switch>
                        <Route exact path="/others" component={Main} />
                        <Route exact path="/chill" component={Chill} />
                        <Route exact path="/cigarette" component={Cigarette} />
                        <Route exact path="/hiphop" component={Hiphop} />
                        <Route exact path="/depressed" component={Home} />
                        <Route path="/chill/:id?" component={ChillRender} />
                        <Route path="/cigarette/:id?" component={CigaretteRender} />
                        <Route path="/hiphop/:id?" component={HiphopRender} />
                        {/* <Redirect from="/MAIN" to="/" /> */}
                    </Switch>

                    <div class="bottom">
                        <h1><h1 class="type">ONLINE MUSIC SHARING PLATFORM</h1></h1>
                        <h5 class="type">ANY SUGGESTION PLEASE CONTACT B04505007@ntu.edu.tw  </h5>

                    </div>

                </section>
            </div>
        );
    }
}