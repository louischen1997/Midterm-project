import React, { Component } from "react";
import Hiphop from "../../../components/Post/Hiphop";

export default class HiphopRender extends Component {
    render() {
        const postIDs = ["1", "3", "5", "7","9"];
        const { id } = this.props.match.params;
        return id && postIDs.includes(id) ? (
            <Hiphop id={id} />
        ) : (
            <div>
                <h3>Error: Post #{id} NOT FOUND</h3>
            </div>
        );
    }
}
