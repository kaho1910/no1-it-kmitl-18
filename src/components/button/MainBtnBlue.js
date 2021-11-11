import React from "react";
import "./VidBtn.css";

const BtnWhite = (props) => {
    return (
        <button className="main-btn-blue text-white p-2 px-8 rounded-full transition ease-in duration-200 hover:bg-white">
            <p className="inline-block  text-xl">{props.txt}</p>
        </button>
    );
};

export default BtnWhite;
