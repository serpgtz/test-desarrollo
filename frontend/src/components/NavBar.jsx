import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import {getClientsByName} from "../redux/actions/clientsAction"




function NavBar() {

  const [name, setName] = useState("")

  const dispatch = useDispatch()

  function handleSearch(e){
    console.log(e.target.value)
    setName(e.target.value)
  }

  function handleSumit(){
    dispatch(getClientsByName(name))
    setName("")
  }

    return (
        <Navbar bg="light" expand="lg"variant="light">
        <Container fluid>
          <Navbar.Brand href="#">Prueba Tecnica</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-4"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/addCliente"><Button>CREAR CLIENTE</Button></Nav.Link>
              
           
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={e=>handleSearch(e)}
                value={name}
              />
              <Button onClick={handleSumit} variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar;