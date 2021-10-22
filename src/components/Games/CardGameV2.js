import React from "react";
import BtnBlue from "../button/BtnBlue";

const CardGameV2 = (props) => {
    let btn = <div></div>;
    if (props.btn !== undefined) {
        btn = <BtnBlue txt={props.btn} />;
    }

    let colors = "black";
    if (props.color !== undefined) {
        colors = props.color;
    }
    let textStyle = "text-lg text-left my-6 text-" + colors;

    let mb = "8";
    let p = "6";
    if (props.mb !== undefined) {
        mb = props.mb;
        p = props.mb;
    }
    let cardStyle = "p-" + p + " relative m-4 mb-" + mb;

    return (
        <div className={cardStyle} style={{ backgroundColor: "#eeeeee" }}>
            <img src={props.pic} alt={props.alt} />
            <h4 className="text-2xl text-left mt-10">{props.title}</h4>
            <div className={textStyle}>{props.children}</div>
            <p className="text-lg text-left">
                <b>วันเปิดตัว</b>: {props.open}
            </p>
            <div className="text-left mt-12">{btn}</div>
        </div>
    );
};

export default CardGameV2;
