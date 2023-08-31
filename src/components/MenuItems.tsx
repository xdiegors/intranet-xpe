import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function MenuItems({ title, onSelectMenuItem }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, optionText) => {
    onSelectMenuItem(optionText); // Pass the selected option text to the parent
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        color="inherit"
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleClick}
      >
        {title}
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
        <MenuItem onClick={(event) => handleMenuItemClick(event, "Profile")}>
          Profile
        </MenuItem>
        <MenuItem onClick={(event) => handleMenuItemClick(event, "My account")}>
          My account
        </MenuItem>
        <MenuItem onClick={(event) => handleMenuItemClick(event, "Logout")}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
