import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, Grid } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CircularProgress
        variant="determinate"
        {...props}
        size={80}
        thickness={5}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="caption" component="div">
          {`${Math.round(props.value)}%`}
          <br />
          <Typography
            fontSize={8}
            variant={"body1"}
            component={"div"}
            color="text.secondary"
          >
            Goal <br />
            Completed
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export function NetProfit() {
  return (
    <Card sx={{ padding: "20px" }}>
      <Grid container>
        <Grid xs={6} overflow={"hidden"}>
          <Typography variant="body1">Net Profit</Typography>
          <Typography variant="h4" my={1.5} sx={{ fontSize: "2em" }}>
            $6759.25
          </Typography>
          <Typography variant="h4" color={"green"} fontSize={16}>
            <ArrowDropUpIcon sx={{ verticalAlign: "middle" }} />
            3%
          </Typography>
        </Grid>
        <Grid xs={6}>
          <CircularProgressWithLabel value={70} />
          <Typography fontSize={10} mt={0.75} textAlign={"center"}>
            *The values here has been rounded off.
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
