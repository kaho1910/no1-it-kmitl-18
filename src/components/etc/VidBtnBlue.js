import React from "react";
import arrow from "../../img/etc/play_white.svg";
import "./VidBtn.css";

function VidBtnBlue() {
    return (
        <button className="vid-btn-blue text-white border-white text-lg p-3 pr-6 pl-6 border-2 rounded-full transition ease-in duration-100">
            <img src={arrow} className="arrow-blue inline-block" alt="arrow" />
            <b className="inline-block">ดูวิดีโอ</b>
        </button>
    );
}

export default VidBtnBlue;
