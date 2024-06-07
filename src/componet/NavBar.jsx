import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function BasicExample() {
  return (
    
    <Navbar expand="lg" className="navbar navbar-dark bg-dark fixed-top">
      <Container  className=''   >
        <Navbar.Brand href="#home">SanjuSuthar</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
     <div className='d-flex gap-2'>
        <button className='btn btn-danger'><Link to="/">login</Link></button>
        <button className='btn btn-danger '><Link to="/Ragister">Ragister</Link></button>
     </div>
        
      </Container>
    </Navbar>

  );
}

export default BasicExample;