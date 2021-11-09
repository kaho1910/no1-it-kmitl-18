import React from "react";
import { Tween, Timeline, ScrollTrigger } from "react-gsap";

import bg from "../../img/Main/Pre15/bg.jpg";
import pic01 from "../../img/Main/Pre15/01.png";

function Pre15() {
    return (
        <div
            className="relative"
            style={{
                backgroundColor: "#d8dce8",
                height: "230vh",
            }}>
            <div className="absolute top-0 left-0 w-full">
                <ScrollTrigger
                    start="3100px bottom"
                    end="6100px bottom"
                    scrub={true}>
                    <Timeline
                        target={
                            <img
                                src={bg}
                                className="object-cover"
                                width="100%"
                                alt="bg"
                            />
                        }
                        paused>
                        <Tween
                            from={{ opacity: 0 }}
                            to={{ opacity: 1, y: "-=400px" }}
                        />
                        <Tween to={{ opacity: 0, y: "-=400px" }} />
                    </Timeline>
                </ScrollTrigger>
            </div>
            <ScrollTrigger
                start="36300px bottom"
                end="38500px bottom"
                scrub={true}>
                <Timeline
                    target={
                        <div
                            className="fixed left-0 flex justify-center items-center px-96 pt-96 h-full"
                            style={{ bottom: "-120vh" }}>
                            <div className="z-10">
                                <ScrollTrigger
                                    start="36450px bottom"
                                    end="36650px bottom"
                                    scrub={true}>
                                    <Timeline
                                        target={
                                            <h2 className="text-5xl text-center">
                                                เพิ่มการรับรู้ของคุณ
                                            </h2>
                                        }
                                        paused>
                                        <Tween
                                            from={{ opacity: 0 }}
                                            to={{ opacity: 1 }}
                                        />
                                    </Timeline>
                                </ScrollTrigger>
                                <ScrollTrigger
                                    start="35900px bottom"
                                    end="36150px bottom"
                                    scrub={true}
                                    markers>
                                    <Timeline
                                        target={
                                            <img
                                                className="my-20"
                                                src={pic01}
                                                alt="pulse-3d"
                                            />
                                        }
                                        paused>
                                        <Tween
                                            from={{ y: "+=50vh" }}
                                            to={{ y: "-=50vh" }}
                                        />
                                    </Timeline>
                                </ScrollTrigger>
                                <h2 className="text-5xl text-center">
                                    พร้อมเสียง 3D
                                </h2>
                            </div>
                        </div>
                    }
                    paused>
                    <Tween from={{ y: "0px" }} to={{ y: "-=80vh" }} />
                    <Tween to={{ y: "-=0vh" }} />
                    <Tween to={{ y: "-=45vh" }} />
                    <Tween to={{ y: "-=45vh" }} />
                    <Tween to={{ y: "-=45vh" }} />
                    <Tween to={{ y: "-=45vh" }} />
                </Timeline>
            </ScrollTrigger>
            {/* <div className="flex justify-center items-center px-96 pt-96 h-full">
                <ScrollTrigger
                    start="2400px bottom"
                    end="3900px bottom"
                    scrub={true}
                    markers>
                    <Timeline
                        target={
                            <div className="z-10">
                                <ScrollTrigger
                                    start="3100px bottom"
                                    end="3250px bottom"
                                    scrub={true}>
                                    <Timeline
                                        target={
                                            <h2 className="text-5xl text-center">
                                                เพิ่มการรับรู้ของคุณ
                                            </h2>
                                        }
                                        paused>
                                        <Tween
                                            from={{ opacity: 0 }}
                                            to={{ opacity: 1 }}
                                        />
                                    </Timeline>
                                </ScrollTrigger>
                                <img
                                    className="my-20"
                                    src={pic01}
                                    alt="pulse-3d"
                                />
                                <h2 className="text-5xl text-center">
                                    พร้อมเสียง 3D
                                </h2>
                            </div>
                        }
                        paused>
                        <Tween from={{ y: "0px" }} to={{ y: "-=100px" }} />
                    </Timeline>
                </ScrollTrigger>
            </div> */}
        </div>
    );
}

export default Pre15;
