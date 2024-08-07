import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Box, Card, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";

import Avatar1 from "./../Assests/Images/Avatar1.jpg";
import Avatar2 from "./../Assests/Images/Avatar2.jpg";
import Avatar3 from "./../Assests/Images/Avatar3.jpg";
import Avatar4 from "./../Assests/Images/Avatar4.jpg";
import Avatar5 from "./../Assests/Images/Avatar5.jpg";
import Avatar6 from "./../Assests/Images/Avatar6.jpg";

const mockApiData = [
  {
    id: 1,
    name: "Wait warren",
    orderNo: 15478256,
    amout: "$123.00",
    status: "Delivered",
    img: Avatar1,
  },
  {
    id: 2,
    name: "Jane cooper",
    orderNo: 48965786,
    amout: "$385.02",
    status: "Delivered",
    img: Avatar2,
  },
  {
    id: 3,
    name: "Gay Harkins",
    orderNo: 78958215,
    amout: "$45.88",
    status: "Cancelled",
    img: Avatar3,
  },
  {
    id: 4,
    name: "Kristina watson",
    orderNo: 20565732,
    amout: "$65.00",
    status: "Pending",
    img: Avatar4,
  },
  {
    id: 5,
    name: "Swana Minguan",
    orderNo: 78514568,
    amout: "$128.20",
    status: "Delivered",
    img: Avatar5,
  },
  {
    id: 6,
    name: "Codifisher",
    orderNo: 95715820,
    amout: "$445.20",
    status: "Delivered",
    img: Avatar6,
  },
];

export function RecentOrders() {
  return (
    <Box>
      <Card sx={{ padding: "20px 20px 0px 20px" }}>
        <Typography variant="h6">Recent Orders</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell align="right">Order No.</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockApiData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Box display={"flex"} alignItems={"center"}>
                      <Avatar
                        alt={row.name}
                        src={row.img}
                        sx={{ width: 24, height: 24, marginRight: "7px" }}
                      />
                      <Typography>{row.name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="right">{row.orderNo}</TableCell>
                  <TableCell align="right">{row.amout}</TableCell>
                  <TableCell align="right">
                    <Chip
                      size="small"
                      label={row.status}
                      color={row.status === "Delivered" ? "success" : "error"}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}
