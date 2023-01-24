import React from "react";
import { Card, Button } from "react-bootstrap";
import { FormatCurrency } from "../utilities/FormatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};
export const StoreItem = ({ id, name, price, img }: StoreItemProps) => {
  const quantity: number = 0 ;
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={img}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column ">
        <Card.Title
          className="d-flex justify-content-between
      align-aitem-baseline mb-4"
        >
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">+ Add To Cart</Button>
          ) : (
            <div className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}> 
              <div className="d-flex align-item-center justify-content-center " style={{gap:'.5rem'}}> 
              <Button>-</Button>
              <div>
              <span className="fs-3">{quantity}</span>
              </div>
              <Button>+</Button>
              </div>
              <Button variant="danger" size="sm">
                Remove
              </Button>
    
            </div>)}
        </div>
      </Card.Body>
    </Card>
  );
};
