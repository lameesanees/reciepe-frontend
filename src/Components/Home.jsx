import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import ReciepeCard from "./ReciepeCard";
import { Link } from "react-router-dom";

function Home() {
  const [searchKey, setSearchKey] = useState(""); //to hold search key

  const base_url = `http://localhost:8001/recipes`;
  //to hold array of restaurant data
  const [alldata, setAllata] = useState([]);

  const fetchData = async () => {
    const result = await axios.get(`${base_url}?search=${searchKey}`);
    console.log(result.data); //array(10)
    setAllata(result.data);
  };
  console.log(alldata);

  useEffect(() => {
    fetchData();
  }, [searchKey]);

  return (
    <div className="row">
         <div className="col justify-content-center">
        <Link to={"/add"}>
          <button className="btn mt-4 m-5 btn-light">Add</button>
        </Link>
      </div>
      <div className="col">
        <input
          type="text"
          style={{ width: "400px" }}
          placeholder="Search By name"
          onChange={(e) => setSearchKey(e.target.value)}
          className="form-control m-5 mx-auto"
        />
      </div>
     
      <Row>
        {alldata.map((item) => (
          <Col className="p-5" sm={12} md={6} lg={4} xl={3}>
            <ReciepeCard restaurant={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
