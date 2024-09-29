import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import { ReactElement } from "react";
import { colors } from "../Colors";

interface SingleRowSummaryContainerProps {
    backgroundColorBase: string;
}

const SingleRowSummaryContainer = styled(Box)<SingleRowSummaryContainerProps>((props) => ({
    position: "relative",
  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: props.backgroundColorBase,
    opacity: 0.1,
    pointerEvents: "none",
    borderRadius: '10px',
  }
}));


interface SingleRowSummaryProps {
    title: string;
    icon: ReactElement;
    score: number;
    titleColor: string;
}

const SingleRowSummary = (props: SingleRowSummaryProps) => {
    const {title, icon, score, titleColor } = props;

    return (
        <SingleRowSummaryContainer backgroundColorBase={titleColor}>
            <Grid container style={{padding: '10px'}} justifyContent="space-between" direction="row">
                <Grid container direction="row" width={'120px'}>
                    {icon}
                    <Typography fontWeight="bold" color={titleColor} variant="body2">
                        {title}
                    </Typography>
                </Grid>
                <div>
                    <Grid container direction="row">
                        <Box>
                            <Typography variant="body2" fontWeight="bold" component="span">
                                {score + " "}
                            </Typography>
                            <Typography variant="body2" fontWeight="bold" color="#918d97" component="span">
                                / 100
                            </Typography>
                        </Box>
                    </Grid>
                </div>
            </Grid>
        </SingleRowSummaryContainer>
    );
}

export default SingleRowSummary;
