import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

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

               <div className="column-2">
               {logs.map((log,idx)=>{
                return (    <div className="card"onClick={()=>navigate(`/logs/${idx}`)}>
                    <h1>{log.tile}</h1>
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