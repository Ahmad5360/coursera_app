import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


function NavBar(props) {
  return (
    <>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand className="n_brand">
            <Link to="/" className="link">
              {props.title}{" "}
            </Link>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Link to="/" className="link">
              {props.Link1}
            </Link>
            <Link to="blog" className="link">
              {props.Link2}{" "}
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

// Setting Prop Types 

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  Link1:PropTypes.string,
  Link2:PropTypes.string
};


// Default Prop Value 
NavBar.defaultProps =
{
  title: "SET SITE TITLE HERE",
  Link1: "SET LINK1 HERE",
  Link2: "SET LINK2 HERE"
}
export default NavBar;
