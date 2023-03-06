import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"



const API=process.env.REACT_APP_API_URL
export default function IndexPage(){
    const [logs,setLogs]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`${API}/logs`).then((res)=>setLogs(res.data)).then((res)=>console.log(logs))
    },[])

    console.log(logs)
    return(
        <div className="idx-grd">
             <div className="nav-btn">
                <Link to={`/logs/new`}>New Log</Link>
                </div>

               <div className=" log column-2">
               {logs.map((log,idx)=>{
                return (    <div className="Log card"onClick={()=>navigate(`/logs/${idx}`)}>

                    <h1> <Link to={`/logs/${idx}`}>
                  
                  {log.title}</Link> </h1>
                    <p>{log.captainName}</p>
                    <p>{log.post}</p>
                    <p>{log.mistakesWereMadeToday}</p>
                    <p>{log.daysSinceLastCrisis}</p>
                 </div>)
               })}
               </div>
            


        </div>
   )
}