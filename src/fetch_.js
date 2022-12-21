let API = process.env.REACT_APP_API_URL;
let add_message = null;

let setMsgEntry = (func)=>{
  add_message = func;
}

function error_handle (error){
 
  if(add_message)
  { 
    add_message("read error",error.toString());
  }

}
function read(text,cb)//get
{
  fetch(`${API}/${text}`)
    .then(response=>response.json())
    .then(data=>{cb(data)})
    .catch(error_handle);
}

function update(text,body,cb)//put
{
  let options = {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch(`${API}/${text}`,options)
    .then(response=>response.json())
    .then(data=>{cb(data)})
    .catch(error_handle);
}
function del(text,cb)//delete
{
  let options = {
    method: 'DELETE',
    
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch(`${API}/logs/${text}`,options)
    .then(response=>response.json())
    .then(data=>{cb(data)})
    .catch(error_handle);
}
function create(text,body,cb)//post
{
  let options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch(`${API}/logs/`,options)
    .then(response=>response.json())
    .then(data=>{cb(data)})
    .catch(error_handle);
}



export{read,update,del,create,setMsgEntry}