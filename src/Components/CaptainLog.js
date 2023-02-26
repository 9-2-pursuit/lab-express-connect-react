import { Link } from "react-router-dom";
// import 'react-native-get-random-values';
// import { v4 as uuidv4 } from 'uuid';

function CaptainLog({ name, title,daysSinceLastCrisis, index }) {
  // const { v4: uuidv4 } = require('uuid');

  return (
    <tr><td>{daysSinceLastCrisis}</td>
    <td><Link to={`/logs/${index}`}>{name}</Link></td>
    <td>{title}</td></tr>


  );
}

export default CaptainLog;
