import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    Form,
    Button
  } from './Navbars';

const Navbar = () => {
  return (
   <>
    <Nav>
        <NavLink to="/home">
            <h1>MovieTime</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/popular" activeStyle>
                Popular
            </NavLink>
            <NavLink to="/categories" activeStyle>
                Categories
            </NavLink>
            <NavLink to="/all" activeStyle>
                All movies
            </NavLink>
            <NavLink to="/signup" activeStyle>
                Sign Up
            </NavLink>
        </NavMenu>
        <Form className='d-flex'>
            <Form.Control type="text" placeholder="Search" />
            <Button variant="outline-success">Search</Button>
        </Form>
    </Nav>
   </>
  );
}
export default Navbar;