import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"




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
                        Show
                        <div className="card adj">
                       <p>{logs.title} - By {logs.captainName}</p>
                        <p>{logs.post}</p>
                        <p>Days since last crisis: {logs.daysSinceLastCrisis}</p>
                        </div>

                        <div>
                           <Link to={`/logs`}>Back</Link>
                        
                                <Link to={`/logs/${index}/edit`}> Edit </Link>


                            <button className="ml" onClick={()=>handleDelete()}>Delete</button>


                        </div>

                 </div>)
                :
                "not found"}
            </div>
        </div>
    )
}