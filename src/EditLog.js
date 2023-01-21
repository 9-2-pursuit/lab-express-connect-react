import { useParams, useNavigate } from "react-router-dom";
import { getOneLog, editLog } from "./fetch";
import { useEffect, useState } from "react";

export default function EditLog() {
  const [unitLog, setUnitLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: "",
  });

  //obtengo el index por el que el usuario llego a esta pagina:
  const { index } = useParams();
  //ejecuto navigate para retornar a mis titulos
  const navigate = useNavigate();

  useEffect(() => {
    getOneLog(index).then((oneLogData) => setUnitLog(oneLogData));
  }, [index]);

  function handleSubmit(event) {
    event.preventDefault();
    editLog(index, unitLog).then((logsUpdated) => {
      navigate(`/logs/${index}`);
    });
  }

  function handleTextChange(event) {
    setUnitLog({
      ...unitLog,
      [event.target.id]: event.target.value, //quiere decir que si activamos la funcion handle text change (se activa cuando se clickea el check box) esta cambiara al valor contrario del actual
    });
  }

  // toggle/////luego asegurarse de que esta clave tenga valor de un booleano (porque es lo que estamos recibiendp desde el servidor)
  function handleCheckbox() {
    setUnitLog({
      ...unitLog,
      mistakesWereMadeToday: !unitLog.mistakesWereMadeToday,
    });
  }

  return (
    <div>
      <div>
        <h2>Edit</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name</label>
        <input
          type="text"
          id="captainName"
          value={unitLog.captainName}
          onChange={handleTextChange}
        />

        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={unitLog.title}
          onChange={handleTextChange}
        />

        <label htmlFor="post">Post</label>
        <textarea
          id="post"
          value={unitLog.post}
          onChange={handleTextChange}
        ></textarea>

        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          type="checkbox"
          id="mistakesWereMadeToday"
          checked={unitLog.mistakesWereMadeToday}
          onChange={handleCheckbox}
        />

        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          type="number"
          id="daysSinceLastCrisis"
          value={unitLog.daysSinceLastCrisis}
          onChange={handleTextChange}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
