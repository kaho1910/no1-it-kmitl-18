import React from "react";
import "./VidBtn.css";

const BtnBlue = (props) => {
    return (
        <button
            className="vid-btn-blue text-white border-transparent bg-clip-padding text-lg p-2 px-5 rounded-full transition ease-in duration-100"
            style={{ borderWidth: "3px" }}>
            <b className="inline-block">{props.txt}</b>
        </button>
    );
};

export default BtnBlue;
