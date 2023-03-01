import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const API=process.env.REACT_APP_API_URL
export default function ShowPage(){

    const [logs,setLogs]=useState([])
    const {index}=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
    axios.get(`${API}/logs/${index}`).then((res)=>setLogs(res.data)).then(()=>console.log(logs))
    },[index])

    function handleDelete(){
        axios.delete(`${API}/logs/${index}`).then(()=>navigate("/logs"))
    }


    return (
        <div className="show">

            <div>
                {logs?(
                    <div >

                        <div className="card adj">
                        <h1>{logs.captainName}</h1>
                        <p>{logs.title}</p>
                        <p>{logs.post}</p>
                        <p>Days since last crisis:{logs.daysSinceLastCrisis}</p>
                        </div>

                        <div>
                            <button onClick={()=>navigate(`/logs/${index}/edit`)}>Edit </button>
                            <button className="ml" onClick={()=>handleDelete()}>Delete</button>
                            <button className="ml" onClick={()=>navigate("/logs")}>Back</button>
                        </div>

                 </div>)
                :
                "not found"}
            </div>
        </div>
    )
}