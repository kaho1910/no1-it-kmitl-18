import React from "react";
import { Link } from "react-router-dom";
import ps5Logo from "../../img/navbar/PS5-logo.jpg";
import "./NavBar.css";

function NavBar() {
    return (
        <div
            className="flex justify-between bg-gray-300 items-center"
            style={{ height: "64px" }}>
            <div className="items-center p-5">
                <Link to="/">
                    <img src={ps5Logo} alt="logo" width="180px" />
                </Link>
            </div>

            <div className="flex items-stretch space-x-8 items-center">
                <Link to="/" activeStyle>
                    PlayStation 5
                </Link>
                <Link to="/games" activeStyle>
                    เกม
                </Link>
                <Link to="/accessories" activeStyle>
                    อุปกรณ์เสริม
                </Link>
                <Link to="/ps5-features" activeStyle>
                    ฟีเจอร์เพิ่มเติม
                </Link>
                <Link to="/ps5-entertainment" activeStyle>
                    ความบันเทิง
                </Link>
            </div>

            <div className="p-32"></div>
        </div>
    );
}

export default NavBar;
