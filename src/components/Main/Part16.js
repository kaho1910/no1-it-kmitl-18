import React from "react";
import { Link } from "react-router-dom";
import MainBtnBlue from "../button/MainBtnBlue";
import pic01 from "../../img/Main/Part16.png";

function Part16() {
    return (
        <div
            className="w-full py-56 flex pl-52 pr-44"
            style={{
                background:
                    "linear-gradient(180deg,#bdc0c9,#d8dce8 67%,#b8bdd1 75%,#787c90)",
            }}>
            <img src={pic01} alt="tv" />
            <div className="text-left pt-32">
                <h2 className="text-5xl">
                    เป็นมากกว่าเกม<sup>4</sup>
                </h2>
                <p className="text-xl my-10">
                    สตรีมความบันเทิง 4K ได้อย่างง่ายดายจากแอปโปรดของคุณ
                    และรับชมแผ่นดิสก์ 4K Blu-ray (PS5 Digital Edition
                    ไม่สามารถเล่นแผ่นดิสก์ได้)
                </p>
                <Link to="/ps5-entertainment">
                    <MainBtnBlue txt="เรียนรู้เพิ่มเติม" />
                </Link>
            </div>
        </div>
    );
}

export default Part16;
