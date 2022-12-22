import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const API = process.env.REACT_APP_API_URL;

export default function NewLogForm() {
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0
    })

    const navigate = useNavigate();

    function handleTextChange(e) {
        setLog({ ...log, [e.target.id]: e.target.value})
    }
    
    function handleCheckboxChange() {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday })
    }

    function handleSubmit(e) {
        e.preventDefault()
        addLog(log)
    }

    function addLog(newLog) {
        axios.post(`${API}/logs`, log).then(response => {
            navigate(`/logs`)
        }).catch(e => console.log(e))
    }
  return (
    <div> New Log
      <form>
        <label> Captain's Name
            <input type="text" />
        </label>
        <label> Title
            <input type="text" />
        </label>
        <label> Post
            <input type="text" />
        </label>
        <label> Days Since Last Crisis
            <input type="text" />
        </label>
        <label> Mistakes were made today:
            <input type="text" />
        </label>
      </form>
    </div>
  )
}
