import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"
import LogForm from "./log-form";
import * as srv from "../fetch_";

export default function EditLogPage(){
  let {idx} =useParams();
  let navigate = useNavigate();
  let [ log, setLog ] = useState({
    captainName:"",
    title:"",
    post:"",
    mistakesWereMadeToday:false,
    daysSinceLastCrisis:0,
  });
  let [previus_data , setPreviusData] = useState(log);
  /////////////////////////////////////////
  useEffect(()=>{
    srv.read(`logs/${idx}`,(data)=>{
      setLog(data);
      setPreviusData({...data});
    });
  },[])
  /////////////////////////////////////////
  const on_save = (evt)=>{
    srv.update(`logs/${idx}`,log,(data)=>{
      navigate(`/logs/${idx}`);
    });
  }
  return (
    <div>
      <h1 className="is-size-2">Edit</h1>
      <Link className="button is-primary" to={`/logs/${idx}`}>Back</Link>
      <div className="box p-5 m-5">
        <LogForm log={log} setLog={setLog} previus_data={previus_data} onsave={on_save}/>

      </div>
    </div>
  )
}