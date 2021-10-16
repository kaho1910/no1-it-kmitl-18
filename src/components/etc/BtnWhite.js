import React from "react";
import "./VidBtn.css";

const BtnWhite = (props) => {
    return (
        <button className="btn-white bg-white text-black text-lg p-3 pr-6 pl-6 rounded-full transition ease-in duration-100">
            <b className="inline-block">{props.txt}</b>
        </button>
    );
};

export default BtnWhite;
