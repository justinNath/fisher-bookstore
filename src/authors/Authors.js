import React, {Component} from "react";
import "./Authors.css";
import { AuthorsDisplay } from "./AuthorsDisplay";

export default class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [
            {
                id: 1,
                first: "Eric",
                last: "Evans",
            },
            {
                id: 2,
                first: "Nicole",
                last: "Forsgren",
            },
            {
                id: 3,
                first: "Will",
                last: "Scheffter",
            },
            {
                id: 4,
                first: "Justin",
                last: "Nath",
            },
            {
                id: 5,
                first: "Cleveland",
                last: "Browns",
            },
            {
                id: 6,
                first: "Pitt",
                last: "Steelers",
            },
            {
                id: 7,
                first: "Few",
                last: "People",
            },
            {
                id: 8,
                first: "Mike",
                last: "Tomlin",
            }
         ]
      };
    }

    render() {
        return (
            <div className="Books">
                <div className="lander">
                    <AuthorsDisplay authors={this.state.authors} />
                </div>
            </div>
        );
    }
}