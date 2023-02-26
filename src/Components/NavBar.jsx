import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Button} from "react-bootstrap";

export default function Navbar() {
    const navigate = useNavigate();

    const etGoHome = () => {
        navigate("/");
    }
    
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand onClick={etGoHome}>
                    <img 
                    className="logo" 
                    src="https://preview.redd.it/jtmbbnh6gvwy.jpg?auto=webp&s=84a391477c0fc3fb6118796ac05478e9ba3ef7b3" 
                    alt="logo"
                    height={60} 
                    width={60}
                    />
                    </Navbar.Brand>
                    <Navbar.Brand href= "/"><h1>Captain's Logs</h1></Navbar.Brand>
            </Container>
        </Navbar>
    )
};