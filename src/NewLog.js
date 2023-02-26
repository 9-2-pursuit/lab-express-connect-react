import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addNewLog } from "./fetch";

export default function NewLog() {
  const [templateLog, setTemplateLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: "",
  });

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    addNewLog(templateLog).then((result) => {
      navigate("/logs");
    });
  }

  function handleTextChange(event) {
    // y si yo no lo quisiera atrapar? con use state? como seria la sinatxis
    setTemplateLog({ ...templateLog, [event.target.id]: event.target.value });
    // console.log(templateLog);
  }

  function handleCheckbox() {
    setTemplateLog({
      ...templateLog,
      mistakesWereMadeToday: !templateLog.mistakesWereMadeToday,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="captainName">Captain's Name</label>
      <input
        type="text"
        id="captainName"
        value={templateLog.captainName}
        onChange={handleTextChange}
      />

      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={templateLog.title}
        onChange={handleTextChange}
      />
      {/* para espacios donde se debe poner mucho texto se recomienda usar textarea como etiqueta */}
      <label htmlFor="post">Post</label>
      <textarea
        id="post"
        value={templateLog.post}
        onChange={handleTextChange}
      ></textarea>

      <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
      <input
        type="checkbox"
        id="mistakesWereMadeToday"
        checked={templateLog.mistakesWereMadeToday}
        onChange={handleCheckbox}
      />

      <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
      <input
        type="number"
        id="daysSinceLastCrisis"
        value={templateLog.daysSinceLastCrisis}
        onChange={handleTextChange}
      />

      <br />
      <input type="submit" />
    </form>
  );
}
