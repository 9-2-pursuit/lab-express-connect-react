import React from "react";
import { Link } from "react-router-dom";
const Log = ({ log, index }) => {
  return (
   
        <tr>
            <td className="Log">

            <Link to={`/logs/${index}`}>
                
       {log.title}
      </Link>
     

            </td>
            <td>
                {log.captainName}
            </td>
        </tr>

  );
};

export default Log;
