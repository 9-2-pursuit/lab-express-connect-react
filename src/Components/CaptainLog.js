import { Link } from "react-router-dom";
// import 'react-native-get-random-values';
// import { v4 as uuidv4 } from 'uuid';

function CaptainLog({ individuallogs, index }) {
  // const { v4: uuidv4 } = require('uuid');

  return (
    <tr><td>{individuallogs.date}</td>
    <td><Link to={`/logs/${index}`}>{individuallogs.name}</Link></td>
    <td>{individuallogs.title}</td></tr>


  );
}

export default CaptainLog;
