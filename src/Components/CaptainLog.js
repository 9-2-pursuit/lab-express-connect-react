// import { Link } from "react-router-dom";
// import 'react-native-get-random-values';
// import { v4 as uuidv4 } from 'uuid';
// import { useParams } from "react-router-dom";
function CaptainLog({ name, title, daysSinceLastCrisis, index }) {
  // const { v4: uuidv4 } = require('uuid');
  // const {index} = useParams()

  return (
    <tr>
      <td>{daysSinceLastCrisis}</td>
      <td>
        {/* <> 
        <div></div> */}
        <a href={`/logs/${index}`}>{name}</a>
      </td>
      {/* <button href="/logs/new" type="submit">New Log</button> */}
      {/* </>  */}
      <td>{title}</td>
    </tr>
  );
}

export default CaptainLog;
