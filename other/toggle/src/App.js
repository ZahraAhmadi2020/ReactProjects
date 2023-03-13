import { useState } from "react";
import Nav from "./components/Nav";
import Part1 from "./components/part1/Part1";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Paper } from "@mui/material";

function App() {

  const[mode,setMode]=useState(false)
  const theme = createTheme({
    palette: {
       mode:mode?'dark':'light'


     }
   })

  return (
    <ThemeProvider theme={theme} >
      <Paper style={{height:'250vh'}}>


        <Nav check={mode} change={() => setMode(!mode)} />
        <Part1 />
     </Paper>
    </ThemeProvider>
  );
}

export default App;
