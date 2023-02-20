import React from "react";
import classes from "./IconButton.module.css";
const IconButton = ({ icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classes.iconBtn + " " + classes.ripple}
    >
      {icon}
    </button>
  );
};

export default IconButton;
