import { Card, Grid } from '@mui/material';
import React from 'react';
import Summary from './summary/Summary';
import Result from './Result';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    "fontFamily": `"Hanken Grotesk"`,
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Grid container style={{height: '100vh', fontFamily: 'Hanken Grotesk !important'}} alignItems="center" justifyContent="center">
      <Card variant="outlined" style={{width: "600px", borderRadius: '20px'}}>
        <Grid container height={400} direction="row" alignItems="stretch" justifyContent="space-between">
          <Grid item xs={6} padding={'24px 48px 40px 48px'} style={{borderRadius: '20px', background: "linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%))"}}>
            <Result/>
          </Grid>
          <Grid item xs={6} padding={'24px 34px 34px 34px'}>
            <Summary/>
          </Grid>
        </Grid>
      </Card>
    </Grid>
    </ThemeProvider>
  );
}

export default App;
