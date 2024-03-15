import React from "react";
import logo from "../image/logo_name.png";

const Logo = () => {
  return (
    <img
      src={logo}
      alt="logo"
      className="logo"
      style={{
        width: "150px",
        height: "auto",
        marginLeft: "5px",
        marginTop: "5px",
      }}
    />
  );
};

export default Logo;
