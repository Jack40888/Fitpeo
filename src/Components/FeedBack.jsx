import { Avatar, Box, Card, Typography } from "@mui/material";
import React from "react";
import Avatar1 from "./../Assests/Images/Avatar1.jpg";
import Avatar2 from "./../Assests/Images/Avatar2.jpg";
import Avatar3 from "./../Assests/Images/Avatar3.jpg";
import Rating from "@mui/material/Rating";

const mockApiData = [
  {
    id: 1,
    name: "Jenney Willsen",
    img: Avatar1,
    rating: 4,
    desc: "Learn about the history, usage and variations of Lorem Ipsum, the industry's standard dummy text for printing and typesetting. ",
  },
  {
    id: 2,
    name: "Diani Russle",
    img: Avatar2,
    rating: 3,
    desc: "Learn about the history, usage and variations of Lorem Ipsum.",
  },
  {
    id: 3,
    name: "Divon Len",
    img: Avatar3,
    rating: 5,
    desc: "Learn about the history, Generate your own Lorem Ipsum with a dictionary of over 200 Latin words and model sentence structures.",
  },
];

const Review = (props) => {
  return (
    <Box mt={2}>
      <Box display={"flex"} alignItems={"center"} mb={1}>
        <Avatar alt="Remy Sharp" src={props.img} />
        <Typography component="legend" sx={{ marginLeft: "7px" }}>
          {props.name}
        </Typography>
      </Box>
      <Rating name="read-only" value={props?.rating} readOnly />
      <Typography>{props.desc}</Typography>
    </Box>
  );
};

export const FeedBack = () => {
  return (
    <>
      <Card sx={{ padding: "20px" }}>
        <Typography variant="h6">Customer's Feedback</Typography>
        <Box sx={{ maxHeight: "450px", overflowY: "auto" }}>
          {mockApiData.map((item) => (
            <Review key={item.id} {...item} />
          ))}
        </Box>
      </Card>
    </>
  );
};
