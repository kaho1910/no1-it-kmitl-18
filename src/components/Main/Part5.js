import React, { useRef } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, ScrollTrigger } from "react-gsap";

import Sequence from "../../img/Main/Part5/Sequence";
import pic01 from "../../img/Main/Part5/ps5-immersive_controller-internals-widescreen-0073.jpg";

const Part1 = () => {
    const ref = useRef();
    return (
        <div className="">
            {/* <Controller> */}
            <Scene duration="300%" triggerHook="onLeave" pin>
                {(progress) => (
                    <div style={{ height: "100vh" }}>
                        <Sequence ref={ref} progress={progress}></Sequence>
                    </div>
                )}
            </Scene>
            {/* </Controller> */}
            <div className="absolute top-0 left-1/4 w-1/2 h-1/2">
                {/* <ScrollTrigger
                    start="210px center"
                    end="1300px center"
                    scrub={true}
                    markers>
                    <Timeline
                        target={
                            <div className="fixed top-1/2 w-full justify-center">
                                <div className="text-5xl text-center">
                                    <h2>คอนโทรลเลอร์ไร้สาย</h2>
                                    <h2>DualSense</h2>
                                </div>
                            </div>
                        }
                        paused></Timeline>
                </ScrollTrigger> */}
            </div>
        </div>
    );
};
export default Part1;
