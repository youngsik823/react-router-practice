import React, { useState } from "react";
import "../css/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ menuList }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <FontAwesomeIcon
                    icon={faXmark}
                    className="side-menu-cancel"
                    onClick={toggleSidebar}
                />
                <div className="menu-list-container">
                    {menuList.map((menu, index) => (
                        <div className="sidebar-menu" key={index}>{menu}</div>
                    ))}
                </div>
            </div>
            <div className="side-menu">
                <FontAwesomeIcon
                    icon={faBars}
                    className="side-menu-icon"
                    onClick={toggleSidebar}
                />
            </div>
        </>
    );
};

export default Sidebar;
