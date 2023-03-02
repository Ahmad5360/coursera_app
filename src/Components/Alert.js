import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default function Alert(props) {
  return (
    <div style={{height:"80px"}}>
    { props.alert && (
      <div
        class="alert alert-success alert-dismissible fade-out show"
        role="alert"
        style={{ borderRadius: 0}}
      >
        <strong style={{ fontSize: "16px",display:"flex",justifyContent:"center"}} className="me-auto p-auto">
          {props.alert.message}
        </strong>
      </div>
    )
    }
    </div>
    );
}
