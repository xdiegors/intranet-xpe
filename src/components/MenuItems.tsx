import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "@mui/material/Link";

interface IMenuItems {
  title: string;
  items: string[];
  canDownload?: boolean;
  onSelectMenuItem?: (item: string) => void;
}

export default function MenuItems({
  title,
  onSelectMenuItem,
  items,
  canDownload,
}: IMenuItems) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: React.MouseEvent, optionText: string) => {
    onSelectMenuItem?.(optionText); // Pass the selected option text to the parent
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
        {items.map((item, index) => (
          <MenuItem
            onClick={(event) => handleMenuItemClick(event, item)}
            key={index}
          >
            {canDownload ? (
              <Link
                href={`http://localhost:3000/uploads/${item}`}
                underline="none"
                color="black"
              >
                {item.includes(".") ? item.slice(0, -4) : item}
              </Link>
            ) : (
              item
            )}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
