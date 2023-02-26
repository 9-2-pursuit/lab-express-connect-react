import axios from "axios";
import { useState, useEffect } from "react"; //usememo
// import log from "./log";
// import "react-native-get-random-values";
// import { v4 as uuidv4 } from "uuid";

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
{/* <strong>Total Balance</strong>: */}
        {
        //   <span
        //     style={
        //       accumulatorArray[accumulatorArray.length - 1] <= 0
        //         ? {
        //             color:"red"
        //           }
        //         : (accumulatorArray[accumulatorArray.length - 1] >= 1000
        //         ? {color:"green"}
        //         : {color:"black"})
        //     }
        //   >
        //     {logs.reduce((accumulator, currentValue) => {
        //       accumulator = Number(accumulator) + Number(currentValue.amount);
        //       accumulatorArray.push(accumulator);
        //       return accumulator;
        //     }, 0)}
        //   </span>
        }

      <table id="customers">
        <tbody>
          {logs.map((individuallogs, index) => {
            // const keyValueforlog = (Number({individuallogs.date*index}))

            return (
              <log
                // key={uuidv4()}
                index={index}
                individuallogs={individuallogs}
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
