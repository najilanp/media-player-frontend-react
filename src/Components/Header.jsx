import React from 'react';
import { Navbar,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar className="bg-info">
    <Container>
      <Navbar.Brand  className=' fw-bolder fs-4'>
      <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
        <i className="fa-solid fa-cloud-arrow-up fa-bounce "></i>{' '}
          Meadia Player
      </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header