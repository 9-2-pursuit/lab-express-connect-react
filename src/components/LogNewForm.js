import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const LogNewForm = () => {
  const navigate = useNavigate();

  const [captainName, setCaptainName] = useState("");

  const [title, setTitle] = useState("");

  const [post, setPost] = useState("");

  const [mistakesWereMadeToday, setMistakesWereMadeToday] = useState("");

  const [daysSinceLastCrisis, setDaysSinceLastCrisis] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${API}/logs`, {
        captainName,
        title,
        post,
        daysSinceLastCrisis,
        mistakesWereMadeToday,
      })
      .then(() => {
        navigate("/logs");
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
  
        <label htmlFor="name" classtitle="new_labels">
          Captain's Name:
        </label>
        <input
          onChange={(e) => setCaptainName(e.target.value)}
          id="captainName"
          title="captainName"
          type="text"
          value={captainName}
        />

<label htmlFor="title" classtitle="new_labels">
          Title:
        </label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          title="title"
          type="text"
          value={title}
        />

        <label htmlFor="post" classtitle="new_labels">
          Post:
        </label>
        <textarea
          onChange={(e) => setPost(e.target.value)}
          id="post"
          title="post"
          type="text"
          value={post}
        ></textarea>

        <label htmlFor="mistakesWereMadeToday" classtitle="new_labels">
          Mistakes were made today:
        </label>
        <input
          onChange={(e) => setMistakesWereMadeToday(e.target.value)}
          id="mistakesWereMadeToday"
          title="mistakesWereMadeToday"
          type="checkbox"
          checked={mistakesWereMadeToday}
        />


        <label htmlFor="crisis" classtitle="new_labels">
          Days Since Last Crisis:
        </label>
        <input
          onChange={(e) => setDaysSinceLastCrisis(e.target.value)}
          id="daysSinceLastCrisis"
          title="daysSinceLastCrisis"
          type="number"
          value={daysSinceLastCrisis}
        />

        <br />

        <input
          classtitle="new-submit"
          type="submit"
          value="submit"
          style={{ }}
        />
      </form>
    </div>
  );
};

export default LogNewForm;
