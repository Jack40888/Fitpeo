import * as React from "react";
import { BarChart } from "@mui/x-charts";
import { Box, Card, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

export function Activty() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Card sx={{ padding: "20px 20px 0px 20px" }}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h6">Activity</Typography>
          <Box>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              endIcon={<ArrowDropDownOutlinedIcon />}
            >
              Dashboard
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Box>
        <Box sx={{ height: "300px", width: "100%" }}>
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: [5, 9, 11, 13, 15, 17, 19, 21, 25, 27],
              },
            ]}
            series={[
              { data: [4, 3, 5, 7, 8, 10, 13, 15, 17, 19, 22, 26] },
              { data: [1, 6, 3, 6, 11, 21, 17, 9, 15, 19, 25, 22] },
            ]}
          />
        </Box>
      </Card>
    </Box>
  );
}
