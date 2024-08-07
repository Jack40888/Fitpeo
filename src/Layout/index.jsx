import React, { useEffect, useState } from "react";
import Header from "./Header";
import SideNavigation from "./SideNavigation";
import { styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Default drawer width;
const drawerWidth = 80;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: `${drawerWidth}px`,
    }),
  })
);

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);

  const theme = useTheme();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const checkWindowSize = window.addEventListener("resize", () => {
      if (window.innerWidth > 767) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    });

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, [open]);

  return (
    <>
      <Header
        drawerWidth={drawerWidth}
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        handleToggle={handleToggle}
      />
      <SideNavigation
        drawerWidth={drawerWidth}
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        handleToggle={handleToggle}
      />
      <Main open={open}>{children}</Main>
    </>
  );
};

export default Layout;
