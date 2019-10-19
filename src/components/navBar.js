import React, { useState } from 'react';
import './navBar.css'
import {
  BrowserRouter as Router, Switch, Route, NavLink
} from "react-router-dom";

import {
  Collapse, Navbar, NavbarToggler, Nav, NavItem, Button, Input
} from 'reactstrap';

import Home from './Home'
import About from './About'
import ShowDrop from './Collapse'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div>
        <Navbar expand="md" className='navBar'>
          <NavLink to="/"><img width='100' src="https://p2pguru.com/images/logo/whitelogo.png" alt='logo' /></NavLink>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className='navLink'>
                <div className='search-box'>
                  <Input className='input-search' placeholder="Search..." />
                  <Button className='btn-search'><i className="fa fa-search"></i></Button>
                </div>
              </NavItem>
              <NavItem className='navLink'>
                
              </NavItem>
              <NavItem className='navLink'>
              <ShowDrop />
              </NavItem>
              <NavItem className='navLink'>
                {/*nhớ luồn luôn dùng exact để tránh lỗi liên quan đến màu */}
                <NavLink  activeClassName='activeUrl' to="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Switch>
          {/* nhớ luồn luôn dùng exact để tránh lỗi không mong muốn */}
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Example;