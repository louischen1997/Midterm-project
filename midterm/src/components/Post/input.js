import React from 'react';
import axios from 'axios';
var cla = String(String(window.location.href).split("/")[3])
var count = String(String(window.location.href).split("/")[4])


class Inputting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            name: " UNKNOWN",
            textarray: ["hi everone"],
            idfilter: [],
            termarray: []

        };
    };



    handlechange = event => {
        this.setState({
            text: event.target.value
        });
        console.log(this.state.text)
    }

    handletext = () => {
        if (this.state.text !== '') {
            this.setState({
                textarray: [this.state.text, ...this.state.textarray]
            })

            const upload = {
                board: this.state.text + " -> " + "(" + cla + "-" + count + ")",
                textid: this.props.id
            }
            var classid = String(String(window.location.href).split("/")[4])

            axios.post('http://localhost:4000/'+cla + classid, upload)
                .then(res => console.log(res));
        };

        this.setState({
            text: ''
        })

    };
    componentDidMount() {
        var classid = String(String(window.location.href).split("/")[4])


        //  console.log(data)

        fetch("http://localhost:4000/chill/" + classid)
            .then(res => res.json())
            .then(data =>
                data.map(num =>
                    // console.log(num)
                    this.setState({
                        textarray: [...this.state.textarray, num.board],
                        idfilter: [num.textid]
                    })

                )
            )
    }


    handlename = event => {
        this.setState({
            name: event.target.value
        });
    }



    render() {

        return (<div >

            <input type="text" class="name" placeholder="please enter your name" value={this.state.name}
                onChange={this.handlename}></input>

            <div class="board" >{this.state.textarray.map(text => <li class="text">{this.state.name} : {text}</li>)}</div>

            <input type="text" class="chat" placeholder="YOU ARE ABLE TO ENTER YOUR COMMITMENT" value={this.state.text}
                onChange={this.handlechange}></input> &nbsp;&nbsp;
                  <button onClick={() => this.handletext()} class="newbut">SEND</button>
        </div>);
    }
}

export default Inputting;