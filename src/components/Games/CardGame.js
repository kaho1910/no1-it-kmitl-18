import React from "react";
import BtnBlue from "../etc/BtnBlue";

const CardGame = (props) => {
    let btn = <div></div>;
    if (props.btn !== undefined) {
        btn = <BtnBlue txt={props.btn} />;
    }
    return (
        <div
            className="p-6 relative pb-28 m-4 mb-12"
            style={{ backgroundColor: "#F5F5F5" }}>
            <img src={props.pic} alt={props.alt} />
            <h4 className="text-2xl text-left mt-10">{props.title}</h4>
            <p className="text-lg text-left my-6">{props.children}</p>
            <p className="text-lg text-left">
                <b>วันเปิดตัว</b>: {props.open}
            </p>
            <div className="absolute bottom-0 left-0 transform -translate-y-6 translate-x-6">
                {btn}
            </div>
        </div>
    );
};

export default CardGame;
