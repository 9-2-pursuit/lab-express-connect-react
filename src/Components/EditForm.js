import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function EditForm() {
  let {index} = useParams();
  // console.log(index)
const [checked, setChecked] = useState(false)
  //logs is the previous data populated into the form
  const [log, setlog] = useState(
     {
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: checked,
        daysSinceLastCrisis: 0
});

  const navigate = useNavigate();

  //uses setEdit value of edit to 

  useEffect(() => {
  axios.get(`${API}/logs/${index}`)
    .then((response) => {
      setlog(response.data);
    })
    .catch((e) => console.error(e));

  }, [index]);

  // const [edit, newEdit]= useState([])

  // useEffect(()=>{
  //   newEdit(log)
  // },[log])

  const handleTextChange = (event) => {
    setlog({ ...log, [event.target.id]: event.target.value });
  };

  const handleChange = () => { 
    
    setChecked(!checked) 
    
  }; 

  const updatelog = () => {
    axios
      .put(`${API}/logs/${index}`, log)
      .then((response) => {
        // setlog(response.data); NO NEED TO DO ANYTHING WITH THE DATE IN AN EDIT FORM, JUST HAVE TO NAVIGATE BACK TO TO WHAT YOU WERE EDITING
        navigate(`/logs/${index}`);
      })
      .catch((e) => console.error("catch", e));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updatelog();
  };

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of log"
          required
        />
        <label htmlFor="title">title:</label>
        <input
          id="title"
          type="title"
          // pattern="http[s]*://.+"
          required
          value={log.title}
          // placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="post">post:</label>
        <input
          id="post"
          type="text"
          name="post"
          value={log.post}
          placeholder="income,expense...or anything else!"
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">mistakesWereMadeToday:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          name="mistakesWereMadeToday"
          onChange={handleChange} //should handle separate checkbox...
          value={log.checked}
        />
        <label htmlFor="daysSinceLastCrisis">daysSinceLastCrisis:</label>
        <input
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          type="number"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/logs/${(index)}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default EditForm;

// return(
// <div>

// <form onSubmit={handleSubmit}>

// {/* DATE */}
// <label htmlFor="date">Date:</label><br></br>

// <input type="date" id="date" name="date" value={log.date} onChange={handleTextChange}></input><br></br>

// <label htmlFor="transName">Name of log:</label><br></br>
// <input type="text" id="transName" name="transName" value={log.name} onChange={handleTextChange}></input><br></br>

// <label htmlFor="amount">Amount</label><br></br>
// <input type="number" id="amount" name="amount" value={log.amount} onChange={handleTextChange}></input><br></br>

// <label htmlFor="from">log Origin:</label><br></br>
// <input type="text" id="from" name="from" value={log.from} onChange={handleTextChange}></input><br></br>

// <label htmlFor="category">log Category:</label><br></br>
// <input type="text" id="category" name="category" value={log.category} onChange={handleTextChange}></input><br></br>

// <button type="submit">Submit</button><br></br>
// </form>
// <span>
//           <Link to={`/logs`}>
//             <button>Nevermind!</button>
//           </Link>
//         </span>
//     </div>
// )

// }
