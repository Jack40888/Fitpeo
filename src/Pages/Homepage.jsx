import React from "react";
import {
  Activty,
  Tracker,
  RecentOrders,
  NetProfit,
  Extra,
  FeedBack,
} from "./../Components";
import { Grid, Typography } from "@mui/material";

const Homepage = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Dashbaord
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <Tracker />
        </Grid>
        <Grid item md={4} xs={12}>
          <NetProfit />
        </Grid>
        <Grid item md={8} xs={12}>
          <Activty />
        </Grid>
        <Grid item md={4} xs={12}>
          <Extra />
        </Grid>
        <Grid item md={8} xs={12}>
          <RecentOrders />
        </Grid>
        <Grid item md={4} xs={12}>
          <FeedBack />
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;
