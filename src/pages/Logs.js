import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

// mui
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const API = process.env.REACT_APP_API_URL;

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((data) => setLogs(data.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(logs);

  return (
    <motion.div
      className="Logs"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.8 } }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Mistakes </StyledTableCell>
              <StyledTableCell align="right">Captain's Name</StyledTableCell>
              <StyledTableCell align="right">Title</StyledTableCell>
              <StyledTableCell align="right">
                Days Since Last Crisis
              </StyledTableCell>
              <StyledTableCell align="right">
                Mistakes were made today
              </StyledTableCell>
              <StyledTableCell align="right">See This Log</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.map((log, index) => (
              <StyledTableRow key={log.mistake}>
                <StyledTableCell scope="row">{log.post}</StyledTableCell>
                <StyledTableCell align="right">
                  {log.captainName}
                </StyledTableCell>
                <StyledTableCell align="right">{log.title}</StyledTableCell>
                <StyledTableCell component="th" align="right">
                  {log.daysSinceLastCrisis}
                </StyledTableCell>
                <StyledTableCell component="th" align="right">
                  {log.mistakesWereMadeToday ? "True" : "False"}
                </StyledTableCell>
                <StyledTableCell component="th" align="right" className="Log">
                  <Link to={"/logs/" + index} className="log-link">
                    Link
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </motion.div>
  );
}
