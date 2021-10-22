import React from "react";
import "./VidPlayer.css";
import playCircle from "../../img/etc/play_circle_white.svg";
import youtube from "../../img/etc/youtube-logo.svg";

const VidPlayer = (props) => {
    return (
        <div className="video-player relative w-full rounded-3xl my-4 cursor-pointer transition duration-300 ease-in-out shadow-lg hover:shadow-xl bg-red-500">
            <img src={props.pic} className="w-full rounded-3xl" alt="thumbs" />
            <img
                src={playCircle}
                className="absolute"
                style={{ top: "37.5%", left: "42.5%" }}
                width="15%"
                alt="play"
            />
            <div
                className="youtube absolute w-24 p-2.5 rounded-lg"
                style={{ bottom: "4%", right: "4%" }}>
                <img src={youtube} alt="youtube" />
            </div>
        </div>
    );
};

export default VidPlayer;
