import React from "react";
import { Tween, Timeline, ScrollTrigger } from "react-gsap";
import MainBtnBlue from "../button/MainBtnBlue";

import pic01 from "../../img/Main/Part17.png";

function Part17() {
    return (
        <div
            className="flex justify-content items-center relative"
            style={{ backgroundColor: "#d8dce8", height: "460vh" }}>
            <ScrollTrigger
                start="43500px center"
                end="48500px center"
                scrub={true}>
                <Timeline
                    target={
                        <div className="fixed left-0" style={{ top: "100vh" }}>
                            <ScrollTrigger
                                start="44500px center"
                                end="45000px center"
                                scrub={true}>
                                <Timeline
                                    target={
                                        <h1 className="text-8xl text-center mb-48">
                                            <b>เลือกวิธีเล่นของคุณ</b>
                                        </h1>
                                    }
                                    paused>
                                    <Tween
                                        from={{ opacity: 0, y: "+=100px" }}
                                        to={{ opacity: 1, y: "-=100px" }}
                                    />
                                </Timeline>
                            </ScrollTrigger>
                            <div className="flex justify-center items-center w-full">
                                <ScrollTrigger
                                    start="45000px center"
                                    end="46000px center"
                                    scrub={true}>
                                    <Timeline
                                        target={
                                            <div>
                                                <img
                                                    src={pic01}
                                                    width="100%"
                                                    alt="PS5"
                                                />
                                            </div>
                                        }
                                        paused>
                                        <Tween
                                            from={{ scale: 1 }}
                                            to={{ scale: 0.45 }}
                                        />
                                    </Timeline>
                                </ScrollTrigger>
                            </div>

                            <div
                                className="px-80 pb-20 grid grid-cols-2 text-center"
                                style={{ transform: "translateY(-250px)" }}>
                                <div>
                                    <h2 className="text-5xl mt-4 mb-16">
                                        คอนโซล PS5
                                    </h2>
                                    <p
                                        className="text-2xl px-20"
                                        style={{
                                            color: "#1f1f1f",
                                        }}>
                                        เล่นเกม PS5 และ PS4 บนแผ่นดิสก์ Blu-ray
                                        คุณยังสามารถดาวน์โหลดเกม PS5 และ PS4 แบบ
                                        ดิจิทัลจาก PlayStation Store ได้อีกด้วย
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-5xl mt-4 mb-16">
                                        PS5 Digital Edition
                                    </h2>
                                    <p
                                        className="text-2xl px-20"
                                        style={{
                                            color: "#1f1f1f",
                                        }}>
                                        คอนโซล PS5
                                        เวอร์ชันดิจิทัลโดยสมบูรณ์และไม่มีดิสก์ไดร์ฟ
                                        ลงชื่อเข้าใช้บัญชีสำหรับ PlayStation
                                        Network ของคุณและไปที่ PlayStation Store
                                        เพื่อซื้อและดาวน์โหลดเกม PS5 และ PS4
                                        แบบดิจิทัล
                                    </p>
                                </div>
                            </div>
                            <div
                                className="w-full"
                                style={{ transform: "translateY(-300px)" }}>
                                <div className="flex justify-center items-center">
                                    <ScrollTrigger
                                        start="46000px bottom"
                                        end="47000px bottom"
                                        scrub={true}>
                                        <Timeline
                                            target={
                                                <hr
                                                    className="mb-6  border"
                                                    style={{
                                                        borderStyle: "inset",
                                                    }}
                                                />
                                            }
                                            paused>
                                            <Tween
                                                from={{ width: "0%" }}
                                                to={{ width: "45%" }}
                                            />
                                        </Timeline>
                                    </ScrollTrigger>
                                </div>
                                <ScrollTrigger
                                    start="46000px bottom"
                                    end="47000px bottom"
                                    scrub={true}
                                    markers>
                                    <Timeline
                                        target={
                                            <div>
                                                <MainBtnBlue txt="เลือกดู" />
                                            </div>
                                        }
                                        paused>
                                        <Tween
                                            from={{ opacity: 0 }}
                                            to={{ opacity: 1 }}
                                        />
                                    </Timeline>
                                </ScrollTrigger>
                            </div>
                        </div>
                    }
                    paused>
                    <Tween from={{ y: "+=0px" }} to={{ y: "-=700px" }} />
                    <Tween to={{ y: "-=0px" }} />
                    <Tween to={{ y: "-=750px" }} />
                    <Tween to={{ y: "-=0px" }} />
                    <Tween to={{ y: "-=900px" }} />
                </Timeline>
            </ScrollTrigger>
        </div>
    );
}

export default Part17;
