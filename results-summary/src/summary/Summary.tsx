import { Box, Button, Grid, Typography } from "@mui/material";
import SingleRowSummary from "./SingleRowSummary";
import { colors } from "../Colors";
import MemoryIcon from './icons/icon-memory.svg';
import ReactionIcon from './icons/icon-reaction.svg';
import VerbalIcon from './icons/icon-verbal.svg';
import VisualIcon from './icons/icon-visual.svg';

const Summary = () => {
    return (
        <Box height="100%" >
            <Grid container direction="column" height="100%" justifyContent="space-between">
                <Grid item height={"80%"}>
                    <Grid container direction="column" height="100%" spacing={2} justifyContent="flex-start">
                        <Grid item>
                            <Typography  variant="h6" fontWeight="bold">
                                Summary
                            </Typography>
                        </Grid>
                        <Grid item height={'82%'}>
                            <Grid container direction="column" justifyContent="space-between" height="100%">
                                <Grid item>
                                    <SingleRowSummary 
                                    title="Reaction" 
                                    score={80} 
                                    icon={<img height="20" width="30" src={ReactionIcon} alt="lightning"/>} 
                                    titleColor={colors.primary.lightRed}
                                />
                                </Grid>
                                <Grid item>
                                    <SingleRowSummary
                                    title="Memory"
                                    score={92}
                                    icon={<img height="20" width="30" src={MemoryIcon} alt="brain" />}
                                    titleColor={colors.primary.orangeyYello}
                                />
                                </Grid>
                                <Grid item>
                                    <SingleRowSummary
                                    title="Verbal"
                                    score={61}
                                    icon={<img height="20" width="30" src={VerbalIcon} alt="speech bubble" />}
                                    titleColor={colors.primary.greenTeal}
                                />
                                </Grid>
                                <Grid item>
                                    <SingleRowSummary
                                    title="Visual"
                                    score={72}
                                    icon={<img height="20" width="30" src={VisualIcon} alt="eye" />}
                                    titleColor={colors.primary.cobaltBlue}
                                />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button variant="contained" style={{borderRadius: '25px', width: '100%', height: "45px", textTransform: 'none', background: colors.Neutral.darkGrayBlue}}>
                        <Typography  variant="body2">
                            Continue
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

// "linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%))"

export default Summary;