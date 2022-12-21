import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    <div className="Logs">
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
                <StyledTableCell component="th" scope="row">
                  {log.post}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {log.captainName}
                </StyledTableCell>
                <StyledTableCell align="right">{log.title}</StyledTableCell>
                <StyledTableCell align="right">
                  {log.daysSinceLastCrisis}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {log.mistakesWereMadeToday ? "True" : "False"}
                </StyledTableCell>
                <StyledTableCell align="right" className="Log">
                  <Link to={"/logs/" + index} className="log-link">
                    Link
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
