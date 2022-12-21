
export default function LogForm ({log,setLog,previus_data,onsave}){
  
  ///////////////////////////////////////////
  
  const on_submit = (evt)=>{
    evt.preventDefault();
    onsave();
  }
  const on_reset = (evt)=>{
    evt.preventDefault();
    if(window.confirm("confirm reset!"))
    {
      setLog({...previus_data});
    }
  }
  const on_change = (evt) =>{
    setLog(pv=>({...pv,[evt.target.getAttribute("name")]:evt.target.value}));
  }
  const on_change_checkbox = (evt)=>{
    setLog(pv=>({...pv,[evt.target.getAttribute("name")]:evt.target.checked}));
  }
  ///////////////////////////////////////////
  return (
    <div>
      <form onSubmit={on_submit}>
      <div className="field">
        <label className="label">Captain's Name: </label>
        <div className="control">
          <input className="input" type="text" placeholder="e.g Hector Zhong" value={log.captainName} name="captainName" onChange={on_change} id="captainName"/>
        </div>
      </div>

      <div className="field">
        <label className="label">Title: </label>
        <div className="control">
          <input className="input" type="text" placeholder="e.g. Courage" value={log.title} name="title" onChange={on_change} id="title"/>
        </div>
      </div>
      <div className="field">
        <label className="label">Post: </label>
        <div className="control">
        
        </div>
      </div>
      <textarea className="textarea" placeholder="e.g. What happened today?" value={log.post} name="post" onChange={on_change} id="post"></textarea>
      <div className="field">
        <label className="label">Days Since Last Crisis</label>
        <div className="control">
          <input className="input" type="number" placeholder="e.g. 0" value={log.daysSinceLastCrisis} name="daysSinceLastCrisis" id="daysSinceLastCrisis" onChange={on_change}/>
        </div>
      </div>
      <div className="field">
        <label className="label">Mistakes were made today: </label>
        <div className="control">
          <label className="label"><input type="checkbox" checked={log.mistakesWereMadeToday} name="mistakesWereMadeToday" onChange={on_change_checkbox} id="mistakesWereMadeToday"/></label>
        </div>
      </div>
      <div className="buttons is-centered">
        <button className="button is-normal is-responsive  is-success">
          Submit
        </button>
        <button onClick={on_reset} className="button is-normal is-responsive  is-danger">
          Reset
        </button>
      </div>
      </form>
    </div>
  )
}