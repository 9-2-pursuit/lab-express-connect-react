import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function CaptainDetails() {
  const API = process.env.REACT_APP_API_URL;
  const [log, setlog] = useState([]);
  let { index } = useParams();
  const navigate = useNavigate();

  // useEffect(() => {}, []);
  // const API = process.env.REACT_APP_API_URL;

  ///promise
  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setlog(response.data);
      })
      .catch((err) => {
        // navigate("/not-found");
        console.log(err);
      });
  }, [API, index]);

  // const handleDelete = () => {};
  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate(`/logs`);
      })
      .catch((e) => console.error(e));
  };
  return (
    <article>
      <fieldset>
        <legend> log #{index}</legend>
        <h3>
          <strong></strong>
          {log.title} - By {log.captainName}
        </h3>

        <h3>
          <strong>post:</strong> {log.post}
        </h3>
        <h3>
          <strong>mistakesWereMadeToday:</strong>{" "}
          {log.mistakesWereMadeToday ? <span>true</span> : <span>false</span>}
        </h3>
        <h3>
          <strong>daysSinceLastCrisis:</strong> Days since last crisis:{" "}
          {log.daysSinceLastCrisis}
        </h3>
      </fieldset>

      {/* <div> <a href='/logs'>Back</a></div> */}
      <div>
        <a href="/logs">
          <button type="submit">Back</button>
        </a>
      </div>
      <div>
        {" "}
        <a href={`/logs/${index}/edit`}>
          <button type="submit">Edit</button>
        </a>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </article>
  );
}

export default CaptainDetails;

// OLD CODE

// import axios from "axios";
// // import { useState, useEffect } from "react";
// import {  useParams, useNavigate } from "react-router-dom";
// // import Specificlog from "./Specificlog";
// // import { useState, useEffect } from "react";

// function logDetails({individuallogs, index}){

//     const API = process.env.REACT_APP_API_URL;
//     let navigate = useNavigate();
//       // index = useParams();

//     // const [log, setlog] = useState([]);

//     // useEffect(() => {
//     //     axios
//     //       .get(`${API}/logs`)
//     //       .then((response) => setlog(response.data))
//     //       .catch((e) => console.error("catch", e));
//     //   }, [API]);

//       // useEffect(() => {
//       //   axios
//       //     .get(`${API}/logs/${index}`)
//       //     .then((response) => {
//       //       setlog(response.data);
//       //     })
//       //     .catch(() => {
//       //       navigate("/not-found");
//       //     });
//       // }, [index, navigate]);

// // console.log(API)

// const handleDelete = () => {
//     axios
//       .delete(`${API}/logs/${index}`)
//       .then(() => {
//         navigate(`/logs`);
//       })
//       .catch((e) => console.error(e));
//   };

// return(
//     <div key={individuallogs}>
// <fieldset>
// <legend>log Number: {index}</legend>

// <h3>Name: {individuallogs.name}</h3>
// <h3>Date: {individuallogs.date}</h3>
// <h3>Amount: {individuallogs.amount}</h3>
// <h3>Origin of log: {individuallogs.from}</h3>
// <h3>Category of log: {individuallogs.category}</h3>
// </fieldset>
// <button onClick={(index) => {
//         navigate(`${API}/logs/${index}`)}}>Navigate to individual log</button>
// <button onSubmit={handleDelete}>Delete</button>

//     </div>
// )

// }

// export default logDetails
