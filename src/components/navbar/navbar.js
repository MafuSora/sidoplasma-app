import { Navbar,Nav,Form,FormControl,Button,Image } from 'react-bootstrap'
import './navbar.css'
// import kai from '../img/KAI.png';
// import {Navbar}  from 'reeact-bootstrap/Navbar';
const Navibar = () => {
  return (
 
    <Navbar className="uwu" variant="dark" expand="lg" sticky="top">
      
      <Navbar.Brand href="/" ><Image   src="" className="imagelogo m-1" fluid ></Image></Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          
        <Nav className="me-auto ">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/gerbong">Gerbong</Nav.Link>
          
          
          
        </Nav>
        <div className="ms-auto">
          <Form className="d-flex ">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="m-2"
                  aria-label="Search"
                />
                  <Button variant="success" className="m-2">Search</Button>
                  <Button variant="success"className="m-2">Login</Button>
                
          </Form>
        </div>
       
          
      </Navbar.Collapse>
     
  </Navbar>
  )
};

export default Navibar;