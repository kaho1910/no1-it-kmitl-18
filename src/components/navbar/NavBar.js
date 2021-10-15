import React from "react";
// import { Link } from "react-router-dom";
import ps5Logo from "../../img/navbar/PS5-logo.jpg";
import "./NavBar.css";
import { NavLink } from "./NavLink";

function NavBar() {
    return (
        <div
            className="flex justify-between items-center"
            style={{ height: "64px" }}>
            <div className="items-center p-5">
                <img src={ps5Logo} alt="logo" width="180px" />
            </div>

            <div className="flex items-stretch  items-center">
                <NavLink to="/" activeStyle exact>
                    PlayStation 5
                </NavLink>
                <NavLink to="/games" activeStyle>
                    เกม
                </NavLink>
                <NavLink to="/accessories" activeStyle>
                    อุปกรณ์เสริม
                </NavLink>
                <NavLink to="/ps5-features" activeStyle>
                    ฟีเจอร์เพิ่มเติม
                </NavLink>
                <NavLink to="/ps5-entertainment" activeStyle>
                    ความบันเทิง
                </NavLink>
            </div>

            <div className="p-32">{/* <NavLink to="/">check</NavLink> */}</div>
        </div>
    );
}

export default NavBar;
