import React from "react";
import arrow from "../../img/etc/play_black.svg";
import "./VidBtn.css";

function VidBtnWhite() {
    return (
        <button
            className="vid-btn-white bg-white text-black border-transparent bg-clip-padding text-lg p-2 px-5 rounded-full transition ease-in duration-100"
            style={{ borderWidth: "3px" }}>
            <img src={arrow} className="arrow-white inline-block" alt="arrow" />
            <b className="inline-block">ดูวิดีโอ</b>
        </button>
    );
}

export default VidBtnWhite;
