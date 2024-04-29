import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";

function RestReview({ rv }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(rv);
  return (
    <div>
      <div>
        <Button
          variant=""
          className="text-white btn-outline-primary shadow"
          onClick={handleShow}
        >
          Reviews
        </Button>

        <Offcanvas
          style={{ backgroundColor: "black" }}
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header style={{ backgroundColor: "black" }} closeButton>
            <Offcanvas.Title style={{ color: "wheat" }}>
              Reviews
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ backgroundColor: "black" }}>
            <div>
              {rv?.map((item) => (
                <ListGroup style={{ backgroundColor: "black" }}>
                  <ListGroup.Item
                    style={{ backgroundColor: "black", color: "grey" }}
                  >
                    name : {item.name}
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={{ backgroundColor: "black", color: "grey" }}
                  >
                    date : {item.date}
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={{ backgroundColor: "black", color: "grey" }}
                  >
                    Rating : {item.rating}
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={{ backgroundColor: "black", color: "grey" }}
                  >
                    comments : {item.comments}
                  </ListGroup.Item>
                </ListGroup>
              ))}
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}

export default RestReview;
