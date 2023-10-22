import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar color="transparent" position="relative">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              <FitnessCenterIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              Concrete Exercises
            </Link>
          </Typography>
          <Button color="inherit">
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
