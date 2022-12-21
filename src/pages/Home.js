import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <div className="home">
      <Container maxWidth="md" sx={{ textAlign: "center", mt: 8 }}>
        <Typography variant="h1" gutterBottom>
          Welcome to Captain's Log
        </Typography>
      </Container>
    </div>
  );
}
