import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid className='d-flex justify-content-center'>
          <MDBNavbarBrand href='/'>
            <img
              src='https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png'
              height='40'
              alt=''
              loading='lazy'
            />
            FlavourFusion.com
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header
