import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@mui/material/styles";

const mockApiData = [
  {
    id: 1,
    name: "Total Orders",
    number: "75",
    percentage: "3%",
    profitOrGain: true,
    icon: <BarChartIcon />,
  },
  {
    id: 2,
    name: "Total Delivered",
    number: "70",
    percentage: "3%",
    profitOrGain: false,
    icon: <ShoppingBasketIcon />,
  },
  {
    id: 3,
    name: "Total Cancelled",
    number: "05",
    percentage: "3%",
    profitOrGain: true,
    icon: <ShoppingBagIcon />,
  },
  {
    id: 4,
    name: "Total Revenue",
    number: "$12k",
    percentage: "3%",
    profitOrGain: false,
    icon: <CurrencyExchangeIcon />,
  },
];

function MyCard(props) {
  const theme = useTheme();

  console.log(theme);

  const color = [
    theme.palette.success,
    theme.palette.error,
    theme.palette.info,
    theme.palette.warning,
  ];

  return (
    <>
      <Card>
        <CardContent>
          <Box
            sx={{
              backgroundColor: color[props?.index].light,
              width: "45px",
              height: "45px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            {props.icon}
          </Box>
          <Typography fontSize={14} component="h5" my={0.5}>
            {props.name}
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h5" fontWeight={600}>
              {props?.number}
            </Typography>
            <Typography
              variant="h4"
              color={props?.profitOrGain ? "green" : "error"}
              fontSize={16}
            >
              {props?.profitOrGain ? (
                <ArrowDropUpIcon sx={{ verticalAlign: "middle" }} />
              ) : (
                <ArrowDropDownIcon sx={{ verticalAlign: "middle" }} />
              )}
              {props?.percentage}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export function Tracker() {
  return (
    <Grid container spacing={2}>
      {mockApiData.map((item, index) => (
        <Grid key={item.id} item xs={12} sm={6} md={3}>
          <MyCard {...item} index={index} />
        </Grid>
      ))}
    </Grid>
  );
}
