import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

export default function NavBar() {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate("/");
  };

  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand onClick={returnHome}>
          <img
            className="hero"
            src="https://images.uncommongoods.com/images/items/49100/49180_3_640px.jpg"
            alt="log"
            width="70"
            height="70"
          />
        </Navbar.Brand>
        <Navbar.Brand href="/logs">
          <h1>Captain's Logs</h1>
        </Navbar.Brand>
        <Button variant="info" href="/logs/new">
          Add A New Log
        </Button>
      </Container>
    </Navbar>
  );
}
