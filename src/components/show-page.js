import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom";
import * as srv from "../fetch_";
export default function Show (){
  let navigate = useNavigate()
  let {idx} = useParams();

  const [log, setLog] = useState(undefined);
  useEffect(()=>{
    srv.read(`logs/${idx}`,(data)=>{setLog(data)});
  },[])

  ///////////////////////////////////////////////
  // const on_back_click = (evt) =>{
  //   navigate(-1);
  // }
  // const on_edit_click = (evt) =>{
  //   navigate(`/logs/${idx}/edit`);
  // }
  const on_delete_click = (evt) =>{
    if(window.confirm("Delete this Post?"))
    {
      // navigate(`/logs/${idx}/delete`);
      srv.del(`${idx}`,(data)=>{
        console.log(data);
        navigate(`/logs`);

      })
    }
  }
  ///////////////////////////////////////////////
  return (
    <div className="p-4">
      <h1 className="is-size-2">Show</h1>
        {log&&log['captainName']!==undefined
        ?<>
          <div className="box p-5">
            <p className="is-size-2 is-strong"><span>{log['title']}</span> - By <span>{log['captainName']}</span></p>
            <p className="is-size-4">{log.post}</p>
            <p className="is-size-4"><span>Days since last crisis: {log.daysSinceLastCrisis}</span></p>
          </div>
          <div className="buttons is-centered">
            <Link to="/logs" className="button is-success">Back</Link>
            <Link to={`/logs/${idx}/edit`} className="button is-info">Edit</Link>
            
            {/* <button className="button is-success" onClick={on_edit_click}>Back</button>
            <button className="button is-info" onClick={on_edit_click}>Edit</button> */}
            <button className="button is-danger" onClick={on_delete_click}>Delete</button>
          </div>
        </>
        :
          <div className="box p-5">
            <p className="is-size-1">Index not found!</p>
          </div>
        }
    </div>
  )
}