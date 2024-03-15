import React from "react";
import { Link } from "react-router-dom";

import SidebarItem from "./SidebarItem";
import "../css/Sidebar.css";

function Sidebar() {
    const menus = [
        { name: "디렉토리 이름 1", path:"/" },
        { name: "디렉토리 이름 2", path:"/" },
        { name: "디렉토리 이름 3", path:"/" },
    ];

    return (
        <div className = "sidebar">
            {menus.map((menu, index) => {
                return (
                    <Link to={menu.path} key={index}>
                        <SidebarItem menu={menu} />
                    </Link>
                );
            })}
        </div>
    );
}

export default Sidebar;