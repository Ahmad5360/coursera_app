import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavBar(props) {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="md"
        variant={`${props.mode}`}
        className="navbar"
      >
        <div className="container">
          <Navbar.Brand className="n_brand">
            <Link
              to="/"
              className="link"
              style={{
                color: props.mode === "dark" ? "white" : "black",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#72a24d")}
              onMouseLeave={(e) =>
                (e.target.style.color =
                  props.mode === "dark" ? "white" : "black")
              }
            >
              {props.title}{" "}
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to="/"
                className="link"
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#72a24d")}
                onMouseLeave={(e) =>
                  (e.target.style.color =
                    props.mode === "dark" ? "white" : "black")
                }
              >
                {props.Link1}
              </Link>
              <Link
                to="blog"
                className="link"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
                onMouseEnter={(e) => (e.target.style.color = "#72a24d")}
                onMouseLeave={(e) =>
                  (e.target.style.color =
                    props.mode === "dark" ? "white" : "black")
                }
              >
                {props.Link2}{" "}
              </Link>
              <Link
                to="listItems"
                className="link"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
                onMouseEnter={(e) => (e.target.style.color = "#72a24d")}
                onMouseLeave={(e) =>
                  (e.target.style.color =
                    props.mode === "dark" ? "white" : "black")
                }
              >
                {props.Link3}{" "}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div
          className="form-check form-switch ms-auto me-2"
          style={{ fontSize: "14px" }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.togglemode}
          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheckDefault"
            style={{
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            {props.mode === "light" ? "DARK MODE" : "LIGHT MODE"}
          </label>
        </div>
      </Navbar>
      
    </div>
  );
}

// Setting Prop Types

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  Link1: PropTypes.string,
  Link2: PropTypes.string,
  Link3: PropTypes.string,
};

// Default Prop Value
NavBar.defaultProps = {
  title: "SET SITE TITLE HERE",
  Link1: "SET LINK1 HERE",
  Link2: "SET LINK2 HERE",
  Link3: "SET LINK3 HERE",
};
export default NavBar;
