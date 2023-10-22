import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./Components/Navbar";
import { purple } from '@mui/material/colors';
import { useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Exercise from "./pages/Exercise";
import Footer from "./Components/Footer";

function App() {
const [mode, setMode] = useState("light")
const theme = createTheme({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary :{
            main: "#000000"
          },
          secondary :{
            main: "#ffffff"
          },
        }
      : {
        primary :{
          main: "#ffffff"
        },
        secondary :{
          main: "#000000"
        },
        }),
  },
})

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <Navbar/>
    <Container maxWidth="xl">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/exercise/:id" element={<Exercise/>}/>
      </Routes>
    </Container>
    <Footer/>
    </ThemeProvider>
  );
}

export default App;
