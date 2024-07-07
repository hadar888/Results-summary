import { Box, Grid } from "@mui/material";

const Summary = () => {
    return (
        <Box>
            <Grid container direction="column">
                <Grid item>
                    Summary
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            Reaction 80/100
                        </Grid>
                        <Grid item>
                            Memory 92/100
                        </Grid>
                        <Grid item>
                            Verbal 61/100
                        </Grid>
                        <Grid item>
                            Visual 72/100
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    Continue
                </Grid>
            </Grid>
        </Box>
    );
}

export default Summary;