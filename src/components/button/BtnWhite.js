import React from "react";
import "./VidBtn.css";

const BtnWhite = (props) => {
    return (
        <button
            className="vid-btn-white bg-white text-black border-transparent bg-clip-padding text-lg p-2 px-5 rounded-full transition ease-in duration-100"
            style={{ borderWidth: "3px" }}>
            <b className="inline-block">{props.txt}</b>
        </button>
    );
};

export default BtnWhite;
