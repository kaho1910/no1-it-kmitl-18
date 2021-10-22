import React from "react";
import "./VidBtn.css";

const BtnWhite = (props) => {
    return (
        <button className="bg-white text-black p-2 px-8 rounded-full transition ease-in duration-200 hover:bg-black hover:text-white">
            <p className="inline-block text-xl font-semibold">{props.txt}</p>
        </button>
    );
};

export default BtnWhite;
