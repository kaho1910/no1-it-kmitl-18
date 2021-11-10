import React from "react";
import { Tween, Timeline, ScrollTrigger } from "react-gsap";
import MainBtnBlue from "../button/MainBtnBlue";

import pic01 from "../../img/Main/Part17.png";

function Part17() {
    return (
        <div
            className="flex justify-content items-center relative"
            style={{ backgroundColor: "#d8dce8", height: "250vh" }}>
            <div>
                <h1 className="text-9xl text-center mb-40">
                    <b>เลือกวิธีเล่นของคุณ</b>
                </h1>
                <div className="flex justify-center items-center w-full">
                    <div>
                        <img src={pic01} width="100%" alt="PS5" />
                    </div>
                </div>
                <div className="px-80 pb-20 grid grid-cols-2 text-center">
                    <div>
                        <h2 className="text-5xl mt-4 mb-16">คอนโซล PS5</h2>
                        <p
                            className="text-2xl px-20"
                            style={{ color: "#1f1f1f" }}>
                            เล่นเกม PS5 และ PS4 บนแผ่นดิสก์ Blu-ray
                            คุณยังสามารถดาวน์โหลดเกม PS5 และ PS4 แบบ ดิจิทัลจาก
                            PlayStation Store ได้อีกด้วย
                        </p>
                    </div>
                    <div>
                        <h2 className="text-5xl mt-4 mb-16">
                            PS5 Digital Edition
                        </h2>
                        <p
                            className="text-2xl px-20"
                            style={{ color: "#1f1f1f" }}>
                            คอนโซล PS5
                            เวอร์ชันดิจิทัลโดยสมบูรณ์และไม่มีดิสก์ไดร์ฟ
                            ลงชื่อเข้าใช้บัญชีสำหรับ PlayStation Network
                            ของคุณและไปที่ PlayStation Store
                            เพื่อซื้อและดาวน์โหลดเกม PS5 และ PS4 แบบดิจิทัล
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <hr
                        className="mb-6  border"
                        style={{
                            borderStyle: "inset",
                            width: "45%",
                        }}
                    />
                </div>
                <MainBtnBlue txt="เลือกดู" />
            </div>
        </div>
    );
}

export default Part17;
