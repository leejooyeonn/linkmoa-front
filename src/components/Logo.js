import React from "react";
import logo from "../image/logo.png";

const Logo = () => {
    return (
        <img src={logo} alt="logo" className="logo" style={{ width: "70px", height: "auto", marginLeft: "20px", marginTop: "20px" }} />
    );
};

export default Logo;