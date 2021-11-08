import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, ScrollTrigger } from "react-gsap";

import pic01 from "../../img/Main/Part8.png";

function Part8() {
    return (
        <div style={{ backgroundColor: "#d8dce8" }}>
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
                            from={{ opacity: 0 }}
                            to={{ opacity: 1, zIndex: "50" }}
                        />
                        <Tween to={{ opacity: 0, y: "-=50px" }} />
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
                            from={{ opacity: 0 }}
                            to={{ opacity: 1, y: "-=50px", zIndex: "50" }}
                        />
                        <Tween to={{ opacity: 0 }} />
                    </Timeline>
                </ScrollTrigger>
                <ScrollTrigger
                    start="19000px center"
                    end="22500px center"
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
                            from={{ scale: 0.2, opacity: 0 }}
                            to={{ scale: 1, opacity: 1 }}
                        />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 0 }} />
                    </Timeline>
                </ScrollTrigger>
            </div>
        </div>
    );
}

export default Part8;
