import React from "react";
import "./VidPlayer.css";
import playCircle from "../../img/etc/play_circle_white.svg";
import youtube from "../../img/etc/youtube-logo.svg";
import t01 from "../../img/Features/t03.jpg";

function VidPlayer() {
    return (
        <div className="video-player relative w-full rounded-3xl my-4 cursor-pointer transition duration-300 ease-in-out bg-red-500">
            <img src={t01} className="w-full rounded-3xl" alt="thumbs" />
            <img
                src={playCircle}
                className="absolute"
                style={{ top: "35%", left: "40%" }}
                width="20%"
                alt="play"
            />
            <div
                className="youtube absolute w-1/5 rounded-lg"
                style={{ padding: "2%", bottom: "4%", right: "4%" }}>
                <img src={youtube} alt="youtube" />
            </div>
        </div>
    );
}

export default VidPlayer;
