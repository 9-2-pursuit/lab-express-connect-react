import axios from "axios";
import { useState, useEffect } from "react"; //usememo
import CaptainLog from "./CaptainLog";
// import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

function CaptainLogs() {
  const [logs, setlogs] = useState([]);
  const API = process.env.REACT_APP_API_URL;
//   let accumulatorArray = useMemo(() => [], []);

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((response) => setlogs(response.data))
      .catch((e) => console.error("catch", e));
  }, [API]);

  return (
    <section>
      <table id="customers">
        <tbody className="Log">
          {logs.map((individuallogs, index) => {
            // const keyValueforlog = (Number({individuallogs.date*index}))

            return (
              <CaptainLog
                key={uuidv4()}
                index={index}
                name={individuallogs.captainName}
                title={individuallogs.title}
                daysSinceLastCrisis={individuallogs.daysSinceLastCrisis}

              />
            );
          })}
        </tbody>
      </table>
     {/* {logs.reduce((accumulator,currentValue) =>  accumulator = Number(accumulator) + Number(currentValue.amount) , 0 )
} */}
    </section>
  );
}

export default CaptainLogs;
