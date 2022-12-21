export default function MsgBoard({msg,setMsg}){
  const on_delete_click = (idx)=>{
    setMsg(pv=>{
      console.log(pv.splice(idx,1))
      
      return [...pv];
    })
  }
  return (
    <div>
      {msg.map((el,idx)=>{
        return (
          <div key={`msg-${idx}`} className="notification is-info">
            <button className="delete" onClick={()=>{on_delete_click(idx)}}></button>
             <strong>{el.title}</strong>{el.body}
          </div>
        )
      })}
      
    </div>
  )
}