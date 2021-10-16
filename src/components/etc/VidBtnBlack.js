import React from "react";
import arrow from "../../img/etc/play_black.svg";
import "./VidBtn.css";

function VidBtnBlack() {
    return (
        <button className="vid-btn-black text-black bg-white text-lg p-3 pr-6 pl-6 border-2 border-black rounded-full transition ease-in duration-100">
            <img src={arrow} className="arrow-black inline-block" alt="arrow" />
            <b className="inline-block">ดูวิดีโอ</b>
        </button>
    );
}

export default VidBtnBlack;
