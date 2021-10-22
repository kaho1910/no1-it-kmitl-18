import React from "react";
import arrow from "../../img/etc/play_white.svg";
import "./VidBtn.css";

function VidBtnBlue() {
    return (
        <button
            className="vid-btn-blue text-white border-transparent bg-clip-padding text-lg p-2 px-5 rounded-full transition ease-in duration-100"
            style={{ borderWidth: "3px" }}>
            <img src={arrow} className="arrow-blue inline-block" alt="arrow" />
            <b className="inline-block">ดูวิดีโอ</b>
        </button>
    );
}

export default VidBtnBlue;
