import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../../App.css";
import Inputmusic from "../../../components/Post/inputmusic";
import axios from 'axios';


var current = 2;
var last1 = 1;
var last2 = 0;
var next1 = 3;
var next2 = 4;





export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            music: [
                "https://www.youtube.com/embed/jNdBXsZJgF8",
                "https://www.youtube.com/embed/1Hpq7ndSi34",
                "https://www.youtube.com/embed/N1fyvw4dRis",
                "https://www.youtube.com/embed/U-yEbxZGsdM",
                "https://www.youtube.com/embed/s4gSDoKAfZI"
            ],
            show: [last2, last1, current, next1, next2],
            add: [< div onClick={
                () => this.handleadd()
            }
                class="add" > add </div>],
            addurl: '',
            newmusic: "",

        }
    };




    componentDidMount() {
        fetch("http://localhost:4000/chill")
            .then(res => res.json())
            .then(data =>
                data.map(num =>
                    // console.log(num)
                    this.setState({
                        music: [...this.state.music, num.music]
                    })
                )

                //  console.log(data)
            )

    }





    handleadd = () => {
        this.setState({
            add: [< Inputmusic getfun={this.test}
                getcancle={this.test2} >
            </Inputmusic>]
        })


    }


    test = url => {
        console.log(url)
        this.setState({
            music: [...this.state.music, url.url],
            newmusic: url.url

        })
        console.log(this.state.newmusic);

        // const newurl = {
        //     music: this.state.newmusic,
        //     musictype:classtype
        // }
        alert("upload a new music url (" + url.url + ") please plus LAST/NEXT to find it ! ");
        axios.get("http://localhost:4000/chill").then(data =>
            //     data.map(num =>
            //     this.setState({
            //     music: [...this.state.music, num.music]
            // })
            // )
            console.log(data.data)

        )


    }


    test3 = () => {
        var classtype = String(String(window.location.href).split("/")[3])

        console.log(this.state.newmusic);
        const newurl = {
            music: this.state.newmusic,
            musictype: classtype,
        }

        axios.post('http://localhost:4000/chill', newurl)
            .then(res => console.log(res));
        this.setState({
            newmusic: ""
        })


    }
    



    test2 = () => {
        this.handlecancle();
    }


    handleGetInputValue = (event) => {
        this.setState({
            addurl: event.target.value,
        })
    };


    handlecancle = () => {
        this.setState({
            add: [< div onClick={
                () => this.handleadd()
            }
                class="add" > add </div>]
        })
    }


    handlelast = () => {
        last2 += 1;
        last1 += 1;
        current += 1;
        next1 += 1;
        next2 += 1;
        if (last2 < 0 || last2 > this.state.music.length - 1) {
            if (last2 < 0) {
                last2 = this.state.music.length - 1;
            } else {
                last2 = 0;
            }
        }

        if (last1 < 0 || last1 > this.state.music.length - 1) {
            if (last1 < 0) {
                last1 = this.state.music.length - 1;
            } else {
                last1 = 0;
            }
        }
        if (current < 0 || current > this.state.music.length - 1) {
            if (current < 0) {
                current = this.state.music.length - 1;
            } else {
                current = 0;
            }
        }
        if (next1 < 0 || next1 > this.state.music.length - 1) {
            if (next1 < 0) {
                next1 = this.state.music.length - 1;
            } else {
                next1 = 0;
            }
        }
        if (next2 < 0 || next2 > this.state.music.length - 1) {
            if (next2 < 0) {
                next2 = this.state.music.length - 1;
            } else {
                next2 = 0;
            }
        }

        this.setState({
            show: [last2, last1, current, next1, next2]

        })


    }

    handlenext = () => {
        last2 -= 1;
        last1 -= 1;
        current -= 1;
        next1 -= 1;
        next2 -= 1;
        if (last2 < 0 || last2 > this.state.music.length - 1) {
            if (last2 < 0) {
                last2 = this.state.music.length - 1;
            } else {
                last2 = 0;
            }
        }

        if (last1 < 0 || last1 > this.state.music.length - 1) {
            if (last1 < 0) {
                last1 = this.state.music.length - 1;
            } else {
                last1 = 0;
            }
        }
        if (current < 0 || current > this.state.music.length - 1) {
            if (current < 0) {
                current = this.state.music.length - 1;
            } else {
                current = 0;
            }
        }
        if (next1 < 0 || next1 > this.state.music.length - 1) {
            if (next1 < 0) {
                next1 = this.state.music.length - 1;
            } else {
                next1 = 0;
            }
        }
        if (next2 < 0 || next2 > this.state.music.length - 1) {
            if (next2 < 0) {
                next2 = this.state.music.length - 1;
            } else {
                next2 = 0;
            }
        }
        this.setState({
            show: [last2, last1, current, next1, next2]

        })

    }


    render() {
        if (this.state.newmusic != "") {
            this.test3();
        }

        const postIDs = ["1", "3", "5", "7", "9"];

        const length = this.state.music.length;

        while (length > postIDs.length) {

            postIDs.push(String((postIDs.length + 1) * 2 - 1));
        }

        const lists = [< div >< div > {
            this.state.show.map(numbers => < span >< iframe width="150"
                height="112.5"
                src={this.state.music[numbers]}
                frameborder="10"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > </iframe>
                <NavLink to={"/chill/" + postIDs[numbers]} class="newbut"> MORE </NavLink></span >)}
            <br></br>
            <button class="lastbut" onClick={() => this.handlelast()} > ◀ LAST </button>
            <button class="nextbut" onClick={() => this.handlenext()} > NEXT ► </button></div></div>]



        return (< div >
            {lists}{this.state.add}
        </div>
        );
    }
}

