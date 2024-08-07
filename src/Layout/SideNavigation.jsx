import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import { Tooltip, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useTheme } from "@mui/material/styles";

const sideNavigationData = [
  {
    id: 1,
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "Chart",
    icon: <InsertChartOutlinedIcon />,
  },
  {
    id: 3,
    name: "Note",
    icon: <CheckBoxOutlinedIcon />,
  },
  {
    id: 4,
    name: "Payment",
    icon: <CreditCardOutlinedIcon />,
  },
  {
    id: 5,
    name: "Shopping",
    icon: <ShoppingBagOutlinedIcon />,
  },
];

const SideNavigation = (props) => {
  const theme = useTheme();

  return (
    <>
      <Drawer
        sx={{
          width: props?.drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: props?.drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={props?.open}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          py={2}
          px={1}
          sx={{ display: { xs: "none", sm: "block", fontSize: "1em" } }}
        >
          FITpeo
        </Typography>
        <List>
          {sideNavigationData.map((item, index) => (
            <ListItem key={item.id} disablePadding>
              <Tooltip title={item.name}>
                <ListItemButton
                  sx={
                    index === 0 && {
                      backgroundColor: theme.palette.grey[900],
                      position: "relative",
                      "&:before": {
                        content: '""',
                        position: "absolute",
                        left: "0",
                        borderLeft: `5px solid ${theme.palette.primary.main}`,
                        width: "5px",
                        height: "100%",
                        borderRadius: "5px",
                      },
                    }
                  }
                >
                  <ListItemIcon
                    sx={{
                      justifyContent: "center",
                      marginTop: "5px",
                      marginBottom: "5px",
                      color:
                        index === 0
                          ? theme.palette.primary.main
                          : theme.palette.grey[400],
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
        <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
          <Tooltip>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  color: theme.palette.grey[200],
                }}
              >
                <LogoutOutlinedIcon />
              </ListItemIcon>
            </ListItemButton>
          </Tooltip>
        </List>
      </Drawer>
    </>
  );
};

export default SideNavigation;
