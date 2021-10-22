import React from "react";
import "./VidBtn.css";

const BtnWhite = (props) => {
    return (
        <button className="main-btn-blue text-white text-xl p-2 px-8 rounded-full transition ease-in duration-200 hover:bg-white">
            <b className="inline-block">{props.txt}</b>
        </button>
    );
};

export default BtnWhite;
