import React, { useRef } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, ScrollTrigger } from "react-gsap";
import MainBtnBlue from "../button/MainBtnBlue";

import Sequence from "../../img/Main/Part15/Sequence";

const Part1 = () => {
    const ref = useRef();
    return (
        <div className="relative">
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
                    start="40500px center"
                    end="41700px center"
                    scrub={true}>
                    <Timeline
                        target={
                            <div
                                class="fixed left-0 grid grid-cols-3"
                                style={{ top: "38%" }}>
                                <div className="px-32 text-left top-1/4">
                                    <h2 className="text-5xl">Tempest 3D</h2>
                                    <h2 className="text-5xl mt-2">AudioTech</h2>
                                    <p className="text-xl mt-12">
                                        ตั้งแต่เสียงเรียกจากเพื่อนร่วมทีมที่อยู่ไกลออกไปจนถึงพรีออเดอร์ที่กำลังแอบย่างกรายเข้ามาสภาพแวดล้อมรอบตัวคุณจะมีความสนจริงด้วย
                                        Tempest 3D AudioTech
                                        กับหูฟังที่เข้ากันได้ในเกมที่รองรับ
                                    </p>
                                </div>
                                <div></div>
                                <div></div>
                            </div>
                        }
                        paused>
                        <Tween
                            from={{ opacity: 0, y: "+=150px", zIndex: "-1" }}
                            to={{ opacity: 1, y: "0px", zIndex: "1" }}
                        />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween
                            from={{ y: "0px" }}
                            to={{ opacity: 0, y: "-=150px", zIndex: "-1" }}
                        />
                    </Timeline>
                </ScrollTrigger>
                <ScrollTrigger
                    start="41700px center"
                    end="42900px center"
                    scrub={true}
                    markers>
                    <Timeline
                        target={
                            <div
                                class="fixed left-0 grid grid-cols-3"
                                style={{ top: "38%" }}>
                                <div className="px-32 text-left top-1/4">
                                    <h2 className="text-5xl">ชุดหูฟังไร้สาย</h2>
                                    <h2 className="text-5xl mt-2">PULSE 3D</h2>
                                    <p className="text-xl mt-12 mb-8">
                                        สร้างมาเพื่อประสบการณ์เสียง 3D
                                        ที่ปรับแต่งเพื่อความสบายสูงสุด
                                        อยู่กับช่วงเวลาสำคัญด้วยเทคโนโลยีตัดเสียงรบกวนและการบันทึกเสียงที่คมชัด
                                    </p>
                                    <MainBtnBlue txt="เรียนรู้เพิ่มเติม" />
                                </div>
                                <div></div>
                                <div></div>
                            </div>
                        }
                        paused>
                        <Tween
                            from={{ opacity: 0, y: "+=150px", zIndex: "-1" }}
                            to={{ opacity: 1, y: "0px", zIndex: "1" }}
                        />
                        <Tween to={{ opacity: 1 }} />
                        <Tween to={{ opacity: 1 }} />
                        <Tween
                            from={{ y: "0px" }}
                            to={{ opacity: 0, y: "-=150px", zIndex: "-1" }}
                        />
                    </Timeline>
                </ScrollTrigger>
            </div>
        </div>
    );
};
export default Part1;
