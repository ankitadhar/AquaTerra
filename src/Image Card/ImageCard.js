import React from 'react';
import './ImageCard.css';
import { Card, Container, Row } from 'react-bootstrap';

function ImageCard(props) {
    return (
        <div className="card-container">
            <Card>
                <Card.Img variant="top" src={props.imgUrl} />
            </Card>
        </div>
    )
}

export default ImageCard;