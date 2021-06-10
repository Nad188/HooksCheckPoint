import React from "react";
import { Card, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./MovieCard.css";

const MovieCard = ({ oneMovie }) => {
  return (
    <div>
      <Card style={{ width: "19rem", height: "670px" }}>
        <Card.Img src={oneMovie.PosterURL} alt="MoviePoster" />
        <Card.Body className="desc">
          <Card.Title>{oneMovie.Title}</Card.Title>
          <Card.Text>{oneMovie.Description}</Card.Text>
        </Card.Body>
        <div className="card-footer star">
          <ReactStars
            edit={false}
            size={20}
            count={5}
            value={oneMovie.Rating}
          />
          <Button
            className="btn"
            style={{
              backgroundColor: "#f8b304",
              border: "none",
              color: "black",
            }}
          >
            Details
          </Button>
          <Button
            className="btn"
            style={{
              backgroundColor: "#f8b304",
              border: "none",
              color: "black",
            }}
          >
            watch Now
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default MovieCard;
