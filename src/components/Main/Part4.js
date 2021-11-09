import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, ScrollTrigger } from "react-gsap";

import pic01 from "../../img/Main/Part4/01.png";
import pic02 from "../../img/Main/Part4/02.jpg";
import v01 from "../../img/Main/Part4/v01.mp4";

function Part4() {
    return (
        <div
            className="relative"
            style={{ backgroundColor: "#d8dce8", height: "350vh" }}>
            <Controller>
                <Scene duration="500%" triggerHook="onLeave" pin>
                    <ScrollTrigger
                        start="5500px center"
                        end="8500px center"
                        scrub={true}>
                        <Timeline
                            target={
                                <div
                                    className="fixed left-0 w-full justify-center"
                                    style={{ top: "55%", zIndex: "-1" }}>
                                    <img src={pic01} width="100%" alt="" />
                                </div>
                            }>
                            <ScrollTrigger
                                start="300px center"
                                end="800px center">
                                <Timeline
                                    target={
                                        <h3 className="absolute top-0 text-5xl text-center w-full mt-72">
                                            ควบคุมการผจญภัยอย่างเต็มรูปแบบ
                                        </h3>
                                    }
                                    paused>
                                    {/* <ScrollTrigger
                                        start="-20px center"
                                        end="20px center">
                                        <Tween
                                            from={{ position: "absolute" }}
                                            to={{ position: "fixed" }}
                                        />
                                    </ScrollTrigger> */}
                                    <ScrollTrigger
                                        start="-200px center"
                                        end="0px center">
                                        <Tween
                                            from={{ opacity: 0 }}
                                            to={{
                                                opacity: 1,
                                                position: "fixed",
                                            }}
                                        />
                                    </ScrollTrigger>
                                    {/* <Tween to={{ position: "fixed" }} /> */}
                                    <ScrollTrigger
                                        start="200px center"
                                        end="800px center">
                                        <Tween
                                            to={{
                                                scale: 0.2,
                                                opacity: 0,
                                            }}
                                        />
                                    </ScrollTrigger>
                                </Timeline>
                            </ScrollTrigger>
                            <ScrollTrigger start="5500px" end="5600px">
                                <Tween to={{ zIndex: "+=5" }} />
                            </ScrollTrigger>
                            <ScrollTrigger start="5800px" end="6200px">
                                <Tween to={{ y: "-=300px" }} />
                            </ScrollTrigger>
                            <ScrollTrigger start="6200px" end="7200px">
                                <Tween
                                    to={{
                                        scale: 0.38,
                                        y: "-=700px",
                                    }}
                                />
                            </ScrollTrigger>
                            <ScrollTrigger
                                start="7600px center"
                                end="9900px center"
                                scrub={true}>
                                <Timeline
                                    target={
                                        <div
                                            className="fixed top-0 left-0 w-full justify-center"
                                            style={{ height: "100vh" }}>
                                            <video
                                                poster={pic02}
                                                src={v01}
                                                className="object-cover object-center w-full h-screen"
                                                autoPlay
                                                loop
                                                muted></video>
                                        </div>
                                    }>
                                    <ScrollTrigger
                                        start="8000px center"
                                        end="8200px center">
                                        <Tween to={{ opacity: 0 }} />
                                    </ScrollTrigger>
                                    <ScrollTrigger
                                        start="8300px center"
                                        end="8900px center"
                                        scrub={true}>
                                        <Tween
                                            from={{ opacity: 0 }}
                                            to={{ opacity: 1 }}
                                        />
                                        <Timeline
                                            target={
                                                <div className="fixed top-0 left-0 w-full h-screen justify-center flex items-center px-96">
                                                    <b className="text-center text-white text-8xl w-full px-64">
                                                        ยกระดับ สัมผัสของคุณ
                                                    </b>
                                                </div>
                                            }>
                                            <Tween
                                                from={{ opacity: 0 }}
                                                to={{
                                                    opacity: 1,
                                                    zIndex: "20",
                                                }}
                                            />
                                            <ScrollTrigger
                                                start="10000px center"
                                                scrub={true}>
                                                <Tween
                                                    to={{ display: "none" }}
                                                />
                                            </ScrollTrigger>
                                        </Timeline>
                                    </ScrollTrigger>
                                    <ScrollTrigger
                                        start="10000px center"
                                        scrub={true}>
                                        <Tween to={{ display: "none" }} />
                                    </ScrollTrigger>
                                </Timeline>
                            </ScrollTrigger>
                            {/* here */}
                            <ScrollTrigger start="10000px center" scrub={true}>
                                <Tween to={{ display: "none" }} />
                            </ScrollTrigger>
                            {/* <ScrollTrigger
                                start="8900px center"
                                end="8900px center"
                                markers>
                                <Tween to={{ position: "static" }} />
                            </ScrollTrigger> */}
                        </Timeline>
                    </ScrollTrigger>
                </Scene>
            </Controller>
            {/* <div
                className="absolute w-full justify-center"
                style={{ height: "100vh", bottom: "-100vh" }}>
                <video
                    poster={pic02}
                    src={v01}
                    className="object-cover object-center w-full h-screen"
                    autoPlay
                    loop
                    muted></video>
            </div> */}
        </div>
    );
}

export default Part4;
