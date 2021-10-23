import React from "react";
import bg from "../../img/Main/Part12.mp4";

function Part12() {
    return (
        <div className="w-full h-screen relative">
            <video
                autoPlay
                loop
                muted
                className="object-cover object-center w-full h-full"
                src={bg}></video>
            <div className="w-full h-full absolute top-0 left-0 px-96 flex items-center">
                <b className="p-32 text-8xl text-white text-center font-extrabold">
                    ร่วมผจญภัยไปกับ โลกใหม่
                </b>
            </div>
        </div>
    );
}

export default Part12;
