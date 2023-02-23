import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function ColorSchemesExample() {
  return (
    <>
      <Navbar className='navbar'>
        <Container>
          <Navbar.Brand className='n_brand'><Link to="/" className="link">SITE NAME</Link></Navbar.Brand>
          <Nav className="ms-auto">
            <Link to="/" className='link' >HOME</Link>
            <Link to="blog" className='link' >BLOG</Link>
            
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;