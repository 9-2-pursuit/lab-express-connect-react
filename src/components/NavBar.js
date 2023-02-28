import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navbar">
      <h1 className="text-center header">
        {" "}
        <Link to="/">
          {" "}
          <h3>
          Captain's Log
          </h3>
     
        </Link>{" "}

      </h1>
      <Nav fill>
        <Nav.Item>
          <Button variant="warning" className="new-btn">
            <Link to={`/logs`}>All Logs</Link>
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button variant="warning" className="new-btn">
            <Link to={`/logs/new`}>Add A New Log</Link>
          </Button>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavBar;
