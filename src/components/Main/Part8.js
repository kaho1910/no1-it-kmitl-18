import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, ScrollTrigger } from "react-gsap";

import pic01 from "../../img/Main/Part8.png";

function Part8() {
    return (
        <div style={{ backgroundColor: "#d8dce8", zIndex: "1" }}>
            <Controller>
                <Scene duration="300%" triggerHook="onLeave" pin>
                    <div></div>
                </Scene>
            </Controller>
            <div className="absolute top-0 left-0 w-full h-full">
                <ScrollTrigger
                    start="19500px center"
                    end="20500px center"
                    scrub={true}>
                    <Timeline
                        target={
                            <div className="fixed w-full h-full flex justify-content items-center">
                                <h2 className="text-5xl text-center w-full">
                                    สัมผัสประสบการณ์พลังที่แท้จริงของการเล่นเกม
                                </h2>
                            </div>
                        }>
                        <Tween
                            from={{ zIndex: "-1", opacity: 0 }}
                            to={{ zIndex: "1", opacity: 1 }}
                        />
                        <Tween to={{ zIndex: "-1", opacity: 0, y: "-=50px" }} />
                    </Timeline>
                </ScrollTrigger>
                <ScrollTrigger
                    start="20300px center"
                    end="22300px center"
                    scrub={true}>
                    <Timeline
                        target={
                            <div className="fixed w-full h-full flex justify-content items-center">
                                <h2 className="text-5xl text-center w-full px-96">
                                    ควบคุมพลังของ CPU GPU และ SSD
                                    ที่กำหนดเองได้พร้อม Intregrated I/O
                                    ที่จะมากำหนดกฏเกณฑ์ใหม่ที่คอนโซล PlayStation
                                    สามารถทำได้
                                </h2>
                            </div>
                        }>
                        <Tween
                            from={{ zIndex: "-1", opacity: 0, y: "+=50px" }}
                            to={{ zIndex: "1", opacity: 1, y: "-=50px" }}
                        />
                        <Tween to={{ opacity: 0, zIndex: "-1" }} />
                    </Timeline>
                </ScrollTrigger>
                <ScrollTrigger
                    start="19000px center"
                    end="23500px center"
                    scrub={true}>
                    <Timeline
                        target={
                            <div className="fixed w-full h-full flex justify-center items-center">
                                <img
                                    src={pic01}
                                    width="28%"
                                    alt="bg"
                                    className="spin"
                                />
                            </div>
                        }
                        paused>
                        <Tween
                            from={{ zIndex: "-1", scale: 0.2, opacity: 0 }}
                            to={{ zIndex: "0", scale: 1, opacity: 1 }}
                        />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ zIndex: "-1", opacity: 0 }} />
                    </Timeline>
                </ScrollTrigger>
            </div>
        </div>
    );
}

export default Part8;
