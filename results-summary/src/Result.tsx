import { Box, Grid } from "@mui/material";

const Result = () => {
    return (
        <Box>
            <Grid container direction="column" alignItems="center">
                <Grid item>
                    Result
                </Grid>
                <Grid item>
                    76 out of 100
                </Grid>
                <Grid item>
                    Great
                </Grid>
                <Grid item>
                    you score higher than 65% of the people who have taken these tests.
                </Grid>
            </Grid>
        </Box>
    );
}

export default Result;
