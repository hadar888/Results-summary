import { Card, Grid } from '@mui/material';
import React from 'react';
import Summary from './Summary';
import Result from './Result';

function App() {
  return (
    <Grid container  style={{height: '100vh'}} alignItems="center" justifyContent="center">
      <Card variant="outlined" style={{width: "600px", borderRadius: '20px'}}>
        <Grid container  direction="row" alignItems="stretch" justifyContent="space-between">
          <Grid item xs={6} bgcolor="blue" style={{borderRadius: '20px'}}>
            <Result/>
          </Grid>
          <Grid item xs={6}>
            <Summary/>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default App;
