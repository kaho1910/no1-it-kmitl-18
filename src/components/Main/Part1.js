import React, { useRef } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, ScrollTrigger } from "react-gsap";

import Sequence from "../../img/Main/Part1/Sequence";
import pic01 from "../../img/Main/Part1/01.png";
import pic02 from "../../img/Main/Part1/02.png";

const Part1 = () => {
    const ref = useRef();
    return (
        <div className="relative">
            <Controller>
                <Scene duration="300%" triggerHook="onLeave" pin>
                    {(progress) => (
                        <div className="z-20" style={{ height: "100vh" }}>
                            <Sequence ref={ref} progress={progress}></Sequence>
                        </div>
                    )}
                </Scene>
            </Controller>
            <div className="absolute top-0 left-0 w-full h-full z-20">
                <ScrollTrigger
                    start="210px center"
                    end="1500px center"
                    scrub={true}>
                    <Timeline
                        target={
                            <div
                                className="fixed"
                                style={{
                                    left: "16%",
                                    top: "30%",
                                }}>
                                <img src={pic01} width="90%" alt="ps5 logo" />
                            </div>
                        }
                        paused>
                        <Tween to={{ display: "none", opacity: 0 }} />
                    </Timeline>
                </ScrollTrigger>

                <ScrollTrigger
                    start="1200px center"
                    end="2400px center"
                    scrub={true}>
                    <Timeline
                        target={
                            <div
                                className="fixed w-full flex justify-center"
                                style={{ top: "47%" }}>
                                <img
                                    src={pic02}
                                    className="w-2/5"
                                    alt="ps5 logo"
                                />
                            </div>
                        }
                        paused>
                        <Tween
                            from={{ zIndex: "-1", opacity: 0 }}
                            to={{ zIndex: "1", opacity: 1 }}
                        />
                        <ScrollTrigger start="2100px center" scrub={true}>
                            <Tween to={{ display: "none", opacity: 0 }} />
                        </ScrollTrigger>
                    </Timeline>
                </ScrollTrigger>

                <ScrollTrigger
                    start="2400px center"
                    end="3700px center"
                    scrub={true}>
                    <Timeline
                        target={
                            <div className="fixed top-1/2 w-full flex justify-center">
                                <h1 className="text-white text-5xl">
                                    ??????????????????????????????????????????????????????????????????????????????????????????
                                </h1>
                            </div>
                        }>
                        <Tween
                            from={{ zIndex: "-1", scale: 0.4, opacity: 0 }}
                            to={{ zIndex: "1", scale: 1, opacity: 1 }}
                        />
                        <ScrollTrigger start="3800px center" scrub={true}>
                            <Tween
                                to={{
                                    display: "none",
                                    opacity: 0,
                                    y: "-=50px",
                                }}
                            />
                        </ScrollTrigger>
                    </Timeline>
                </ScrollTrigger>
            </div>
        </div>
    );
};
export default Part1;
