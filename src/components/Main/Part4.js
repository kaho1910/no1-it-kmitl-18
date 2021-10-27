import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, ScrollTrigger } from "react-gsap";

import pic01 from "../../img/Main/Part4/01.png";
import pic02 from "../../img/Main/Part4/02.jpg";
import v01 from "../../img/Main/Part4/v01.mp4";

function Part4() {
    return (
        <div style={{ backgroundColor: "#d8dce8" }}>
            <Controller>
                <Scene duration="500%" triggerHook="onLeave" pin>
                    <ScrollTrigger
                        start="6200px center"
                        end="7200px center"
                        scrub={true}
                        markers>
                        <Timeline
                            target={
                                <div
                                    className="fixed left-0 w-full justify-center"
                                    style={{ top: "15%", zIndex: "5" }}>
                                    <img src={pic01} width="100%" alt="" />
                                </div>
                            }>
                            <Tween to={{ scale: 0.35, y: "-=600px" }} />
                        </Timeline>
                    </ScrollTrigger>
                </Scene>
            </Controller>
        </div>
    );
}

export default Part4;
