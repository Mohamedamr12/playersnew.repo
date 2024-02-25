import React from "react";
import { Card } from "react-bootstrap";


const Player = ({ item }) => {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Body>
        
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Age: {item.age}<br />
          Position: {item.position}<br />
          Team: {item.team}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
