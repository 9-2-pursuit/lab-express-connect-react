import LogForm from "./log-form";
import { useState } from "react";
import * as srv from "../fetch_";
import { useNavigate } from "react-router-dom";

export default function NewLogPage(){
  let navigate = useNavigate();
  let [ log, setLog ] = useState({
    captainName:"",
    title:"",
    post:"",
    mistakesWereMadeToday:false,
    daysSinceLastCrisis:0,
  });
  let [previus_data] = useState(log);
  /////////////////////////////////////////
   const on_save = (evt)=>{
    srv.create(`logs/`,log,(data)=>{
      navigate(`/logs`);
    });
    //srv.create
  }
  //////////////////////////////////////
  
  return (
    <div>
      <h1 className="is-size-2">New</h1>
      <div className="box p-5 m-5">
        <LogForm log={log} setLog={setLog} previus_data={previus_data} onsave={on_save}/>
      </div>
    </div>
  )
}