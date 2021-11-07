import React, { useRef } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, ScrollTrigger } from "react-gsap";

import Sequence from "../../img/Main/Part5/Sequence";
import pic01 from "../../img/Main/Part5/01.png";

const Part1 = () => {
    const ref = useRef();
    return (
        <div className="">
            <Controller>
                <Scene duration="300%" triggerHook="onLeave" pin>
                    {(progress) => (
                        <div style={{ height: "100vh" }}>
                            <Sequence ref={ref} progress={progress}></Sequence>
                        </div>
                    )}
                </Scene>
            </Controller>
            <div className="absolute top-0 left-0 w-full h-full">
                <ScrollTrigger
                    start="9500px center"
                    end="11500px center"
                    scrub={true}>
                    <Timeline
                        target={
                            <div
                                className="fixed w-full justify-center"
                                style={{ top: "40%" }}>
                                <div className="text-5xl text-center">
                                    <h2>คอนโทรลเลอร์ไร้สาย</h2>
                                    <h2>DualSense</h2>
                                </div>
                            </div>
                        }
                        paused>
                        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 0, scale: 0.15 }} />
                    </Timeline>
                </ScrollTrigger>
                <ScrollTrigger
                    start="12200px center"
                    end="13500px center"
                    scrub={true}>
                    <Timeline
                        target={
                            <div
                                className="fixed w-full justify-center"
                                style={{ top: "33%" }}>
                                <h2 className="text-5xl text-center">
                                    พัฒนาเพื่อประสบการณ์ความรู้สึกใหม่ๆ
                                </h2>
                            </div>
                        }
                        paused>
                        <Tween
                            from={{ opacity: 0 }}
                            to={{ opacity: 1, y: "-=70px" }}
                        />
                        <Tween to={{ opacity: 0 }} />
                    </Timeline>
                </ScrollTrigger>
                <ScrollTrigger
                    start="12200px center"
                    end="13500px center"
                    scrub={true}>
                    <Timeline
                        target={
                            <div className="fixed w-full flex justify-center">
                                <img
                                    src={pic01}
                                    alt="bg"
                                    width="55%"
                                    class="spin"
                                />
                            </div>
                        }
                        paused>
                        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 0 }} />
                    </Timeline>
                </ScrollTrigger>
            </div>
        </div>
    );
};
export default Part1;
