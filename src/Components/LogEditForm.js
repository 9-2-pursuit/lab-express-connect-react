import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function LogEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setLog(response.data);
      })
      .catch((e) => console.error(e));
  }, [index]);

  const updateLog = () => {
    axios
      .put(`${API}/logs/${index}`, log)
      .then((response) => {
        setLog(response.data);
        navigate(`/logs/${index}`);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateLog();
  };

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate(`/logs`);
      })
      .catch((e) => console.error(e));
  };


  return (
    <div className="Edit mb-3 text-center">
     <form onSubmit={handleSubmit}>
        <label htmlFor="captainName" className="form-label">Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Name..."
          className="form-control text-center"
          required
        />
        <label htmlFor="title" className="form-label">Title:</label>
        <input
          id="title"
          type="text"
          required
          value={log.title}
          placeholder="Title..."
          className="form-control text-center"
          onChange={handleTextChange}
        />
        <label htmlFor="post" className="form-label">Post:</label>
        <textarea
          id="post"
          type="text"
          name="post"
          value={log.post}
          placeholder="favorite quote..."
          className="form-control text-center"
          onChange={handleTextChange}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="When was the last crisis?"
          className="form-control text-center"
          type="number"
        />
        <div className="form-check form-switch row checkbox-row">
          <div className="col-xs-2 col-xs-offset-4">
            <div className="checkbox-inline" style={{ "textAlign": "center" }}>
              <label
                htmlFor="mistakesWereMadeToday"
                className=" checkbox-inline"
              >
                Mistakes were made today:{" "}
                <input
                  className="form-check-input "
                  id="mistakesWereMadeToday"
                  type="checkbox"
                  role="switch"
                  onChange={handleCheckboxChange}
                  checked={log.mistakesWereMadeToday}
                />
              </label>
            </div>
          </div>
        </div>
        <br />
        <button type="button" class="btn  btn-outline-danger" onClick={handleDelete}>Delete</button>
        {" "}
        <button type="button submit" class="btn  btn-outline-success" >Submit</button>
      </form>
      <br/>
      <Link to={`/logs/${index}`}>
        <button type="button" class="btn  btn-outline-warning" >Back</button>
      </Link>
    </div>
  );
}

export default LogEditForm;