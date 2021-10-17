import React from "react";
import "./VidBtn.css";

const BtnBlue = (props) => {
    return (
        <button className="vid-btn-blue text-white border-white text-lg p-3 pr-6 pl-6 border-2 rounded-full transition ease-in duration-100">
            <b className="inline-block">{props.txt}</b>
        </button>
    );
};

export default BtnBlue;
