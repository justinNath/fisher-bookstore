import React, {Component} from "react";
import "./Books.css";
import { BookDisplay } from "./BookDisplay";

export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
            {
                id: 1,
                title: "Domain Driven Design",
                author: "Eric Evans",
                isbn: "978-0321125217",
            },
            {
                id: 2,
                title: "Accelerate",
                author: "Nicole Forsgren",
                isbn: "978-1942788331",
            },
            {
                id: 3,
                title: "Slow Down",
                author: "Will Scheffter",
                isbn: "978-1942788332",
            },
            {
                id: 4,
                title: "Stop",
                author: "Justin Nath",
                isbn: "978-1942788333",
            },
            {
                id: 5,
                title: "Backwards",
                author: "Cleveland Browns",
                isbn: "978-1942788334",
            },
            {
                id: 6,
                title: "Forwards",
                author: "Pitt Steelers",
                isbn: "978-1942788335",
            },
            {
                id: 7,
                title: "I love coding",
                author: "Few People",
                isbn: "978-1942788336",
            },
            {
                id: 8,
                title: "Go Steelers",
                author: "Mike Tomlin",
                isbn: "978-1942788337",
            }
         ]
      };
    }

    render() {
        return (
            <div className="Books">
                <div className="lander">
                    <BookDisplay books={this.state.books} />
                </div>
            </div>
        );
    }
}