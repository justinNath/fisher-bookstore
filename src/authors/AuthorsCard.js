import React from "react";
import { Card, Button} from "react-bootstrap";

export function AuthorsCard(props) {
    return (
        <Card style={{ width: "16em" }}>
            <Card .Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
                <Card.Title>{props.authors.first}</Card.Title>
                <Card.Text>Author: {props.authors.last}</Card.Text>
                <Button variant="warning">Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}