import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function New (){
    const [logs, setLogs] = useState([]);

    const {id} = useParams();
    const navigate = useNavigate();




        function formHandler(event){
            event.preventDefault();
            axios.post(`${API}/logs/`, logs);
             navigate(`/logs`)
        };

      

      const onChange =(event) => {
        console.log([event.target.id]);
        // setLog({...log, [event.target.id]: event.target.value});
        setLogs({...logs, [event.target.id]: event.target.value});
      }


    return ( 
    <>
        <h1>Edit</h1>
        <h5><Link to="../logs/">Back</Link></h5>
            <form className="mb-3" onSubmit={formHandler}>

                <label for="captainName">Captain's Name</label>
                <input type="text" placeholder="Name" value={logs.captainName} id="captainName" onChange={onChange}/>

                <label for="title">Title</label>
                <input type="text" placeholder="title" value={logs.title} id="title" onChange={onChange} />

                
                <label for="post">Post</label>
                <textarea placeholder="post" value={logs.post} id="post" onChange={onChange} />
                


                <label for="mistakesWereMadeToday">Mistakes were made today</label>
                <input
                    type='checkbox'
                    id='mistakesWereMadeToday'
                    value={logs.mistakesWereMadeToday}
                    onChange={onChange}
                />

                <label for="daysSinceLastCrisis">Days Since Last Crisis</label>
                <input type="number" id="daysSinceLastCrisis" value={logs.daysSinceLastCrisis} onChange={onChange}/>
                    <button type="submit" id="submit">Submit</button>
            </form>

    </>

    )
}