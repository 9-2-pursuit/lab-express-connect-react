import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function LogNewForm() {
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    console.log(typeof log.daysSinceLastCrisis);
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(typeof log.daysSinceLastCrisis);
    axios
      .post(`${API}/logs`, log)
      .then(() => {
        navigate(`/logs`);
      })
      .catch((c) => console.error("catch", c));
  };

  const previousPage = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div className="New mb-3 text-center">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName" className="form-label h4">
          Captain's Name:
        </label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Name..."
          className="form-control text-center"
          required
        />
        <label htmlFor="title" className="form-label h4">
          Title:
        </label>
        <input
          id="title"
          type="text"
          required
          value={log.title}
          placeholder="Title..."
          className="form-control text-center"
          onChange={handleTextChange}
        />
        <label htmlFor="post" className="form-label h4">
          Post:
        </label>
        <textarea
          id="post"
          type="text"
          name="post"
          value={log.post}
          placeholder="favorite quote..."
          className="form-control text-center"
          onChange={handleTextChange}
        />
        <label htmlFor="daysSinceLastCrisis" className="form-label h4">
          Days Since Last Crisis:
        </label>
        <input
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="When was the last crisis?"
          className="form-control text-center"
          type="number"
          min="0"
        />

        <div className="form-check form-switch row checkbox-row">
          <div className="col-xs-2 col-xs-offset-4">
            <div className="checkbox-inline" style={{ textAlign: "center" }}>
              <label
                htmlFor="mistakesWereMadeToday"
                className=" checkbox-inline h4"
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
        <button type="submit button" className="btn btn-outline-success">
          Submit
        </button>
      </form>
      <br />
      <button
        type="button"
        className="btn  btn-outline-warning"
        onClick={previousPage}
      >
        Back
      </button>
    </div>
  );
}

export default LogNewForm;
