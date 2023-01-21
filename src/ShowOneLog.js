// captainName
// title
// post
// mistakesWereMadeToday
// daysSinceLastCrisis

import { useEffect, useState } from "react";
import { getOneLog, deleteLog } from "./fetch";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function ShowOneLog() {
  // const navigate = useNavigate()
  // /logs/:index ==> /logs/:id
  const { index } = useParams();
  //   "/:index"
  // 3
  const navigate = useNavigate();

  function deleteLogAndBack(index) {
    deleteLog(index).then((logsLessEliminated) => {
      navigate(`/logs`);
    });
  }

  const [oneLog, setOneLog] = useState({});

  // Toma tiempo
  useEffect(() => {
    getOneLog(index).then((oneLogData) => {
      setOneLog(oneLogData);
    });
  }, [index]);

  return (
    <section>
      <div>
        <h2>
          {oneLog.title} - By {oneLog.captainName}
        </h2>
        <h3>Show</h3>
      </div>
      <article>
        <p>
          <b>Captain Name:</b> {oneLog.captainName}
        </p>
        <p>
          <b>Title:</b> {oneLog.title}
        </p>
        <p>
          <b>Post:</b> {oneLog.post}
        </p>
        <p>
          <b>Mistakes Were Made Today:</b>
          {oneLog.mistakesWereMadeToday
            ? "Yes! There were many mistakes!"
            : "No! It's fine"}
        </p>
        <p>
          <b>Days since last crisis:</b> {oneLog.daysSinceLastCrisis}
        </p>
      </article>

      <aside>
        <Link to="/logs">Back</Link>

        <button className="delete" onClick={() => deleteLogAndBack(index)}>
          Delete
        </button>
        <Link to={`/logs/${index}/edit`}>
          <button>Edit</button>
        </Link>
      </aside>
    </section>
  );
}
