import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

const API = process.env.REACT_APP_API_URL;

    export default function Show (){

        const [logs, setLogs] = useState([]);
        const {id} = useParams();

        const navigate = useNavigate();
        let linkEdit = `/logs/${id}/edit`;
        let linkDelete = `/logs/${id}/delete`;

        console.log(id)

        useEffect(() => {
            axios.get(`${API}/logs/${id}`).then((response) => {
              setLogs(response.data);
            });
          }, []);
      

          function onDeleteClick(evt){
    
            axios.delete(`${API}/logs/${id}`).then((response) => {
              setLogs(response.data);
              navigate("/logs")
            });
      
    }

        return (
            <>
            <h2>Show  </h2>
            {/* <Link to="/logs">Back</Link>
                <Button>Delete</Button>
                <Link to={linkEdit}>Edit</Link> */}
            <Card>
              <Card.Header>
                <Nav variant="tabs" defaultActiveKey="/logs">
                  <Nav.Item>
                    <Nav.Link href="/logs">Back</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href={linkEdit}>
                      Edit
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href={linkDelete}>
                      Delete
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Card.Title>{logs.title} - By {logs.captainName}</Card.Title>
                <Card.Text>
                {logs.post}
                </Card.Text>
                <footer className="blockquote-footer">
                Days since last crisis:  {logs.daysSinceLastCrisis}
            </footer>

            <Button onClick={onDeleteClick}>Delete</Button>
              </Card.Body>
            </Card>
            </>
          );
    }