import React from 'react';
import { Link } from 'react-router-dom';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';

function ReciepeCard({ restaurant }) {
  console.log(restaurant);
  return (
    <div className="m-3" style={{ width: '100%', maxWidth: '300px' }}>
      <Link to={`view/${restaurant.id}`} style={{ textDecoration: 'none' }}>
        <MDBCard className="text-white shadow-lg m-3 p-3" style={{ backgroundColor: "#303030", height: "100%" }}>
          <MDBCardImage src={restaurant.photograph} alt="Restaurant Image" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div className="p-3">
            <MDBCardTitle className="text-center mb-0" style={{ fontSize: '1.5rem' }}>{restaurant.name}</MDBCardTitle>
            <MDBCardText className="text-center mt-2" style={{ fontSize: '1rem' }}>{restaurant.address}</MDBCardText>
          </div>
        </MDBCard>
      </Link>
    </div>
  );
}

export default ReciepeCard;
