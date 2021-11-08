import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, ScrollTrigger } from "react-gsap";

import v01 from "../../img/Main/Part10.mp4";

function Part10() {
    return (
        <div>
            <Controller>
                <Scene duration="300%" triggerHook="onLeave" pin>
                    <div></div>
                </Scene>
            </Controller>
            <div className="absolute top-0 left-0 w-full h-full">
                <ScrollTrigger
                    start="23290px center"
                    end="28300px center"
                    scrub={true}>
                    <Timeline
                        target={
                            <video
                                src={v01}
                                className="fixed top-0 left-0 object-cover object-center w-full h-screen"
                                autoPlay
                                loop
                                muted></video>
                        }
                        paused>
                        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 0 }} />
                    </Timeline>
                </ScrollTrigger>
                <ScrollTrigger
                    start="23290px center"
                    end="24800px center"
                    scrub={true}>
                    <Timeline
                        target={
                            <div className="fixed w-full h-full px-48 grid grid-cols-3">
                                <div className="flex justify-center items-center pl-16">
                                    <div className="text-left">
                                        <h2 className="text-5xl">
                                            วาร์ปไปมาระหว่างมิติในชั่วพริบตา
                                        </h2>
                                        <p
                                            className="text-xl mt-12"
                                            style={{ color: "#1f1f1f" }}>
                                            SSD
                                            ความเร็วสูงพิเศษจะช่วยเพิ่มระยะเวลาการเล่นเกมให้ถึงขีดสุด
                                            ด้วยการโหลดเกมที่รวดเร็วแทบจะพริบตาสำหรับเกมที่ติดตั้งใน
                                            PS5
                                        </p>
                                    </div>
                                </div>
                                <div></div>
                                <div></div>
                            </div>
                        }
                        paused>
                        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 0, y: "-=50px" }} />
                    </Timeline>
                </ScrollTrigger>
                <ScrollTrigger
                    start="24800px center"
                    end="29400px center"
                    scrub={true}>
                    <Timeline
                        target={
                            <div className="fixed w-full h-full px-48 grid grid-cols-3">
                                <div className="flex justify-center items-center pl-16">
                                    <div className="text-left">
                                        <h2 className="text-5xl">
                                            พบกับการปลดปล่อยพลังการออกแบบเกม
                                        </h2>
                                        <p
                                            className="text-xl mt-12"
                                            style={{ color: "#1f1f1f" }}>
                                            Intregrated I/O
                                            เฉพาะสำหรับระบบคอนโซล PS5
                                            ให้ผู้พัฒนาเกมดึงข้อมูลจาก SSD
                                            ได้อย่างรวดเร็วจนพวกเขาสามารถสร้างสรรค์เกมในแบบที่ไม่เคยเกิดขึ้นมาก่อน
                                        </p>
                                    </div>
                                </div>
                                <div></div>
                                <div></div>
                            </div>
                        }
                        paused>
                        <Tween
                            from={{ opacity: 0 }}
                            to={{ opacity: 1, y: "-=50px" }}
                        />
                        <Tween to={{ opacity: 0 }} />
                    </Timeline>
                </ScrollTrigger>
            </div>
        </div>
    );
}

export default Part10;
