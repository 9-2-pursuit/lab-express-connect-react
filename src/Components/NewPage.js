

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API=process.env.REACT_APP_API_URL
export default function NewPage(){

const [log,setLog]=useState({captainName:"", title:"",post:"", mistakesWereMadeToday:"",daysSinceLastCrisis:""})
const navigate=useNavigate()


function handleChange(e){
setLog({...log,[e.target.id]:e.target.value})
}

function handleSubmit(e){
    e.preventDefault()
    axios.post(`${API}/logs`,log).then(()=>navigate("/logs"))
    
}

return (
    <div className="default-grid">

        <h1 className="column-2 new-header grey ">New Log Entry</h1>

            <form className="grid column-2" onSubmit={(e)=>handleSubmit(e)}>

                <div className="grid">
                <label htmlFor="captainName">Captain-Name</label>
                <input type='text' id="captainName" className="" value={log.captainName}  required  onChange={(e)=>handleChange(e)}/>

                <label htmlFor="title">Title</label>
                <input type='text' id="title" className="" value={log.title}  required onChange={(e)=>handleChange(e)}/>

                <label htmlFor="post">Post</label>
                <input type='text' id="post" className="" value={log.post} required  onChange={(e)=>handleChange(e)}/>

                <label htmlFor="mistakes">Mistakes Were Made Today</label>
                <input type='checkbox' id="mistakes" className="" value={log.mistakesWereMadeToday} required  onChange={(e)=>handleChange(e)}/>


                <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
                <input type='number' id="daysSinceLastCrisis" className="" value={log.daysSinceLastCrisis} required  onChange={(e)=>handleChange(e)}/>

              

                <button type="submit" className="sub def-btn">Submit</button>
                </div>

            </form>
    </div>

)



}