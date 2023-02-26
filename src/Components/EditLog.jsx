import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'
const API = process.env.REACT_APP_API_URL;

// Path: src/Components/EditLog.jsx
export default function Editlog() {
    //returns an object with a property for each parameter in the current URL
    let { index } = useParams();
    //returns a function that can be used to navigate to a new location
    const navigate = useNavigate();
    //state for the log
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: ""
    })
    //axios call to get the log
    useEffect(() => {
        axios.get(`${API}/logs/${index}`)
        .then(response => {
            setLog(response.data)
        })
        .catch(e => {
            console.log(e)
        })
    }, [index])
}