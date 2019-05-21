import React, { Component } from "react";
import Chill from "../../../components/Post/Chill";

export default class PostRender extends Component {


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


    render() {
        // const postIDs = ["1", "3", "5", "7","9","11","13"];
        const { id } = this.props.match.params;
        const url = this.state.music[(id - 1) / 2]
        //const length=this.props.length;
        // return id && postIDs.includes(id) ? (
        //     <Post id={id} />
        // ) : (
        //     <div>
        //         <h3>Error: Post #{id} NOT FOUND</h3>
        //     </div>


        // );
        return (
            <Chill id={id} url={url} />
        );
    }
}
