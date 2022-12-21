import { useEffect, useState } from "react";
import * as srv from "../fetch_";
import { useNavigate, Link } from "react-router-dom";
export default function Index (){
  let navigate = useNavigate();
  const [logs, setLogs] = useState([]);
  
  useEffect(()=>{
    srv.read("logs",(data)=>{setLogs(data)});
  },[])
  //////////////////////////////////////////
  const on_see_log_click = (idx)=>{
    navigate(`/logs/${idx}`);
  }
  //////////////////////////////////////////
  return (
    <div className="p-4">
      <h1 className="is-size-2">Index</h1>
      <div className="box"><table className="table is-striped is-fullwidth is-hoverable">
        <thead><tr><th>Mistakes</th><th>Name</th><th>See this log</th><th></th></tr></thead>
        <tbody className="Log">{logs.map((el,idx)=><tr className="is-clickable" key={idx} onClick={()=>{on_see_log_click(idx)}}>
          
            <td>{el.mistakesWereMadeToday?"🧨":""}</td>
            <td>{el.captainName}</td>
            <td>{el.title}</td>
            <th><Link to={`/logs/${idx}`}>Detail</Link></th>
        </tr>)}</tbody>
      </table></div>
    </div>
  )
}