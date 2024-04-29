import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
import axios from "axios";

function Restop() {
  const [show, setShow] = useState(false);
  const { id } = useParams();
  console.log(id);
  const base_url = "http://localhost:8001/recipes";

  const [addIngredients, setIngredients] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchRest = async () => {
    try {
      const result = await axios.get(`${base_url}/${id}`);
      console.log(result.data);

      setIngredients(result.data); // Update to set the recipe object
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  useEffect(() => {
    fetchRest();
  }, []);

  return (
    <div>
      <div>
        <Button
          variant=""
          className="text-white btn-outline-primary shadow"
          onClick={handleShow}
        >
          RECIPIES
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>RECIPIES</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup className="p-4" style={{ backgroundColor: "black" }}>
              <span className="text-primary">Ingredients:</span>
              {addIngredients.instructions}
              <br />
              <span className="text-primary">Cooking Time:</span>
              {addIngredients.cookTimeMinutes}
              <br />
              <span className="text-primary">Cuisine:</span>
              {addIngredients.cuisine}
              <br />
              <span className="text-primary">Calories per serving:</span>
              {addIngredients.caloriesPerServing}
            </ListGroup>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "black" }}>
            <Button
              variant=""
              className="btn btn-outline-primary text-white"
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Restop;
