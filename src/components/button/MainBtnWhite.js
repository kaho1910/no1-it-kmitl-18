import React from "react";
import "./VidBtn.css";

const BtnWhite = (props) => {
    return (
        <button className="bg-white text-black text-xl p-2 px-8 rounded-full transition ease-in duration-100 hover:bg-black hover:text-white">
            <b className="inline-block">{props.txt}</b>
        </button>
    );
};

export default BtnWhite;
