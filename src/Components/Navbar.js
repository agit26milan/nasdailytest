import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const DefaultNavbar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand className='hacker' href='/'>HACKER<b className="news">NEWS</b></Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      {/* <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#link'>Link</Nav.Link>
        </Nav>
      </Navbar.Collapse> */}
    </Navbar>
  )
}

export default DefaultNavbar
