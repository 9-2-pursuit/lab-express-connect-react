import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const API = process.env.REACT_APP_API_URL;

export default function Delete (){
    const {id} = useParams();
    const [logs, setLogs] = useState([]);
    let navigate = useNavigate();

function onDeleteClick(evt){
    
        axios.delete(`${API}/logs/${id}`).then((response) => {
          setLogs(response.data);
          navigate("/logs")
        });
  
}
    return <h1 onClick={onDeleteClick}>Delete</h1>
}