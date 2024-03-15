import React from "react";
import logo from "../image/logo_name.png";

const mainHeader = () => {
  return (
    <Wrapper>
      <div>
        <img
          src={logo}
          alt="logo"
          style={{
            width: "150px",
            height: "auto",
          }}
        />
      </div>
    </Wrapper>
  );
};

export default mainHeader;
