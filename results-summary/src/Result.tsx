import { Box, Grid, Typography } from "@mui/material";
import { colors } from "./Colors";
import styled from "@emotion/styled";

const GridContainer = styled(Grid)({
    height: '100%',
})

const Result = () => {
    return (
        <Box height="100%" >
            <GridContainer container direction="column" alignItems="center" justifyContent="space-between">
                <Grid item>
                    <Typography variant="h6" color={colors.Neutral.lightLavender}>
                        Your Result
                    </Typography>
                </Grid>
                <Grid item style={{background: "linear-gradient(hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0))", height: '150px', width: '150px', borderRadius: '100px'}}>
                    <GridContainer container direction="column" justifyContent="center" alignItems="center">
                        <Grid item>
                            <Typography variant="h2" fontWeight="bold" color={colors.Neutral.white}>
                                76 
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" fontWeight="bold" color={colors.Neutral.lightLavender}>
                                of 100
                            </Typography>
                        </Grid>
                    </GridContainer>
                </Grid>
                <Grid item>
                    <Grid container direction="column" alignItems="center" justifyContent="space-between" height="100%">
                        <Grid item>
                            <Typography variant="h5" fontWeight="bold" color={colors.Neutral.white} paddingBottom={'10px'}>
                                Great
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2" align="center" color={colors.Neutral.lightLavender}>
                                You scored higher than 65% of the people who have taken these tests.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </GridContainer>
        </Box>
    );
}

export default Result;
