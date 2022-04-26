import DeleteOutlineSharp from "@mui/icons-material/DeleteOutlineSharp";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";


export const ListMenu = (props) => {
  const { title = "", size = 20, showTitle = true } = props;

  // pop up menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MoreHorizSharpIcon
        onClick={handleClick}
        aria-controls={open ? "list-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      />
      <Menu
        anchorEl={anchorEl}
        id="list-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        sx={{ boxShadow: 1 }}
        PaperProps={{
          elevation: 0,
          overflow: "visible",
          className: "ul-menu",
          mt: 1.5,
        }}
        transformOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
      >
        <MenuItem className="user-menu">
          <ListItemIcon>
            <PermIdentityIcon
              fontSize="small"
              sx={{ color: "#222222", fontSize: "0.9rem" }}
            />
          </ListItemIcon>
          User Profile
        </MenuItem>
        <Divider sx={{ margin: "0px !important" }} />
        <MenuItem
          className="user-menu"
          sx={{ color: "#d33c40", fontSize: "0.9rem" }}
        >
          <ListItemIcon>
            <DeleteOutlineSharp
              fontSize="small"
              sx={{ color: "#d33c40", fontSize: "0.9rem" }}
            />
          </ListItemIcon>
          Remove
        </MenuItem>
      </Menu>
    </>
  );
};
