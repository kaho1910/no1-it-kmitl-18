import React, { useRef } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import Sequence from "../../img/Main/Part15/Sequence";

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
            <div className="absolute top-0 left-1/4 w-1/2 h-1/2">
                {/* <Controller>
                    <Scene duration="300%" triggerHook="onLeave" pin>
                        {(progress) => (
                            <div style={{ height: "100vh" }}>
                                <Sequence
                                    ref={ref}
                                    progress={progress}></Sequence>
                            </div>
                        )}
                    </Scene>
                </Controller> */}
                {/* <div className="sticky">
                    <Tween
                        from={{ x: "10%", top: "60%" }}
                        to={{ x: "60%", top: "10%" }}>
                        <div>hello world</div>
                    </Tween>
                    <Timeline
                        target={
                            <div>
                                <h2>This is a cool heading</h2>
                            </div>
                        }>
                        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                        <Tween to={{ x: "110%" }} />
                    </Timeline>
                </div> */}
            </div>
        </div>
    );
};
export default Part1;
