// import { useEffect,useMemo } from "react";
// import { useEffect } from "react";

import { NavLink } from "react-router-dom";


function Nav() {
  // let accumulatorArray = useMemo(() => [], []);
// console.log(accumulatorArray[accumulatorArray.length - 1])

// useEffect(()=>{

//   transactions.reduce((accumulator, currentValue) => {
//     accumulator = Number(accumulator) + Number(currentValue.amount);
//     accumulatorArray.push(accumulator);
//     return null;
//   }, 0)},[accumulatorArray,transactions])

  return (
    <nav>
     
      <ul className="no-bullets">
       <li> <NavLink
          className="links"
          to="/"
          exact="true"
          activestyle={{ color: "white" }}
        >
          Home
        </NavLink></li>
        <li><NavLink
          className="links"
          to="/logs"
          exact="true"
          activestyle={{ color: "white" }}
        >
          All Logs
        </NavLink></li>
       <li> <NavLink
          className="links"
          to="/logs/new"
          exact="true"
          activestyle={{ color: "white" }}
        >
          New Form
        </NavLink></li>
        {/* <span className="totalSUM"><TotalSum /></span> */}
        {/* <span>{TotalSum}</span> */}
       {/* <li className="totalHOVERCHANGE"> <strong>Total Balance</strong>:
        {
          <span
            style={
              accumulatorArray[accumulatorArray.length - 1] <= 0
                ? {
                    color:"red"
                  }
                : (accumulatorArray[accumulatorArray.length - 1] >= 1000
                ? {color:"rgb(161, 240, 161)"}
                : {color:"white"})
            }
          >
            {transactions.reduce((accumulator, currentValue) => {
              accumulator = Number(accumulator) + Number(currentValue.amount);
              accumulatorArray.push(accumulator);
              return accumulator;
            }, 0)}
          </span>
        }</li> */}
      </ul>
    </nav>
  );
}

export default Nav;
