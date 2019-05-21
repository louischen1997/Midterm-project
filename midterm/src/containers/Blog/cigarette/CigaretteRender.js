import React, { Component } from "react";
import Cigarette from "../../../components/Post/Cigarette";

export default class CigaretteRender extends Component {


    constructor(props) {
        super(props);
        this.state = {
            music: [
                "https://www.youtube.com/embed/alGDhpwJ1c4",
                "https://www.youtube.com/embed/rqZlVtQAai8",
                "https://www.youtube.com/embed/Aqdh6s75_6k",
                "https://www.youtube.com/embed/BlblBvpVgjE",
                "https://www.youtube.com/embed/MHKnSFlDBLQ"
            ],
        }
    };



    componentDidMount() {
        fetch("http://localhost:4000/cigarette")
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
            <Cigarette id={id} url={url} />
        );
    }
}
