import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Restop from "./Restop";
import RestReview from "./RestReview";

function ViewReciepe() {
  const [details, setdetails] = useState({});

  const { id } = useParams();
  console.log(id);
  const base_url = "http://localhost:8001/recipes";

  const fetchRest = async () => {
    const result = await axios.get(`${base_url}/${id}`);
    console.log(result.data);
    setdetails(result.data);
  };
  useEffect(() => {
    fetchRest();
  }, []);
  return (
    <div>
      <div>
        <Row>
          <Col className="m-2">
            <img
              src={details.photograph}
              alt=""
              style={{
                width: "450px",
                height: "500px",
                margin: "20px",
                borderRadius: "15px",
                marginLeft:"100px"
              }}
            />
          </Col>
          <Col className="shadow rounded p-2 m-3">
            <div style={{ margin: "40px", padding: "10px" }}>
              <h1 style={{ textAlign: "center", color: "wheat" }}>
                {details.name}
              </h1>

              <div className="p-3 m-4 text-white">               
                <h5 className="p-1 text-center">
                  <Restop op={details.operating_hours}/></h5>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ViewReciepe;
