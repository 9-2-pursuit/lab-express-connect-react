import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Nav } from "react-bootstrap";

// import ConfirmDelete from "./DeleteConfirmation";

const API = process.env.REACT_APP_API_URL;


function LogDetails() {
  const [log, setLog] = useState([]);
  const [active, setActive] = useState("#back")
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setLog(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate(`/logs`);
      })
      .catch((e) => console.error(e));
  };

  // const buttonType = () => {
    let buttonText = "Back"
    if (window.location.href === `http://localhost:3000/logs/${index}#back`) {
  buttonText = "Back"
    } else if (window.location.href === `http://localhost:3000/logs/${index}#edit`) {
      buttonText = "Edit"
    } else if (window.location.href === `http://localhost:3000/logs/${index}#delete`) {
      buttonText = "Delete"
    }
  
  let buttonColor = "btn-outline-secondary"
  if (window.location.href === `http://localhost:3000/logs/${index}#back`) {
    buttonColor = "btn-outline-secondary"
      } else if (window.location.href === `http://localhost:3000/logs/${index}#edit`) {
        buttonColor = "btn-outline-warning"
      } else if (window.location.href === `http://localhost:3000/logs/${index}#delete`) {
        buttonColor = "btn-outline-danger"
      }

  const buttonFunction = () => {
    // let navigateTo = navigate("/logs")


    if (window.location.href === `http://localhost:3000/logs/${index}#back`) {
      navigate("/logs")
    } else if (window.location.href === `http://localhost:3000/logs/${index}#edit`) {
      navigate(`/logs/${index}/edit`)
    } else if (window.location.href === `http://localhost:3000/logs/${index}#delete`) {
     handleDelete()
    }
    // return navigateTo
  }


   

    // return buttonText
  // }

  return (
    <Card className="text-center">
      <Card.Body>
      <Card.Title as="h1">
        {log.title} - By {log.captainName}
      </Card.Title >
      <Card.Text as="h3">{log.post}</Card.Text>
        <Card.Text as="h5">Days since last crisis: {log.daysSinceLastCrisis}</Card.Text>
        
        <Nav variant="tabs" defaultActiveKey={active}>
          <Nav.Item>
            <Nav.Link href="#back" onClick={() => setActive("#back")}>Back</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#edit" onClick={() => setActive("#edit")}>Edit</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#delete" onClick={() => setActive("#delete")}>
              Delete
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <button type="button" className={`btn ${buttonColor} mt-3`} onClick={buttonFunction}>{ buttonText}</button>

        {/* <div className="showNavigation">
          <Link to={`/logs`}>
            <button type="button" className="btn btn-outline-secondary">Back</button>
          </Link>
          </div>
        <br/>
        <div>
          <Link to={`/logs/${index}/edit`}>
            <button type=" button" className="btn btn-outline-warning">Edit</button>
          </Link>
          </div>
          <br/>
        <div>
          <button onClick={handleDelete} type=" button" className="btn btn-outline-danger">Delete</button>
          {" "} <ConfirmDelete index={index} navigate={navigate } />
        </div> */}




        </Card.Body>
    </Card>
  );
}

export default LogDetails;
