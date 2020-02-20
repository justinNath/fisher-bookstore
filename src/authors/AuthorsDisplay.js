import React from "react";
import { AuthorsCard } from "./AuthorsCard";
import { CardColumns } from "react-bootstrap";

export function AuthorsDisplay(props) {
    return (
        <div className="display">
            <h3>Authors</h3>
            <CardColumns>
                {props.authors.map(b => (
                    <AuthorsCard authors={b} key={b.id} />
                ))}
            </CardColumns>
        </div>
    );
}