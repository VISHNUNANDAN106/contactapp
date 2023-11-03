import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
         <Navbar className="bg-success">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/d1QXh2Rw/images-removebg-preview.png"
              width="80"
              height="70"
              className="d-inline-block align-top"
            />{' '}
                       <b className='fs-1'>CONTACT APP</b> 

          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header