//  Usage of props in ProductCard

import { Card, Button } from "react-bootstrap";

const ProductCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.imagePath} />
      <Card.Body>
        <Card.Title>{props.ProductName}</Card.Title>
        <Card.Text>
          {props.description}
          {props.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
// exporting our ProductCard Component
export default ProductCard;
