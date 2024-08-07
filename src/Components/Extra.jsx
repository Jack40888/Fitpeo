import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Groups2Icon from "@mui/icons-material/Groups2";

export function Extra() {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: "error.light" }}>
            <CrisisAlertIcon sx={{ color: "#ffffff" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Goals" secondary="Jan 9, 2014" />
        <ExpandCircleDownIcon
          sx={{ rotate: "-90deg", cursor: "pointer", color: "grey" }}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: "success.light" }}>
            <WorkIcon sx={{ color: "#ffffff" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Careers" secondary="Jan 7, 2014" />
        <ExpandCircleDownIcon
          sx={{ rotate: "-90deg", cursor: "pointer", color: "grey" }}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: "info.light" }}>
            <BeachAccessIcon sx={{ color: "#ffffff" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
        <ExpandCircleDownIcon
          sx={{ rotate: "-90deg", cursor: "pointer", color: "grey" }}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: "warning.light" }}>
            <FormatListBulletedIcon sx={{ color: "#ffffff" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="TODO" secondary="July 20, 2014" />
        <ExpandCircleDownIcon
          sx={{ rotate: "-90deg", cursor: "pointer", color: "grey" }}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: "grey.0" }}>
            <Groups2Icon sx={{ color: "#ffffff" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Team" secondary="Sep 20, 2014" />
        <ExpandCircleDownIcon
          sx={{ rotate: "-90deg", cursor: "pointer", color: "grey" }}
        />
      </ListItem>
    </List>
  );
}
