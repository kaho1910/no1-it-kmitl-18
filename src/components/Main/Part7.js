import React from "react";
import MainBtnBlue from "../button/MainBtnBlue";
import "./styles.css";
import pic01 from "../../img/Main/Part7/01.png";
import pic02 from "../../img/Main/Part7/02.png";
import pic03 from "../../img/Main/Part7/03.jpg";

function Part7() {
    return (
        <div
            className="w-full py-24 px-32"
            style={{ backgroundColor: "#d8dce8" }}>
            <div className="grid grid-cols-2 px-72">
                <div></div>
                <div className="text-left pr-24">
                    <h2 className="text-5xl">
                        พูดคุยกับ ผู้เล่นคนอื่นๆ ได้อย่างง่ายดาย
                    </h2>
                    <p className="text-xl mt-10 pr-24">
                        เริ่มการสนทนาด้วยไมโครโฟนในตัว<sup>1</sup>
                        ปิดไมโครโฟนด้วยปุ่มปิดเสียงโดยเฉพาะ
                        เมื่อคุณต้องการมีสมาธิกับเกมของคุณ คอนโทรลเลอร์
                    </p>
                </div>
            </div>
            <div className="relative px-96 transform -translate-y-24">
                <img src={pic01} alt="controller" />
                <img
                    src={pic02}
                    className="absolute z-50 spin"
                    style={{
                        width: "8%",
                        top: "42.5%",
                        left: "46%",
                    }}
                    alt="circle"
                />
            </div>
            <div className="grid grid-cols-2 px-24 transform -translate-y-32">
                <div className="text-left pl-28 pr-36 pt-24">
                    <h2 className="text-5xl">
                        สร้างและแบ่งปัน ช่วงเวลาที่ดีที่สุดของคุณ
                    </h2>
                    <p className="text-xl my-12">
                        บันทึกการเล่นเกมของคุณและแบ่งปันกับผู้อื่นบน PlayStation
                        Network หรือแอปสื่อสังคมที่เลือก
                    </p>
                    <MainBtnBlue txt="เรียนรู้เพิ่มเติม" />
                </div>
                <img src={pic03} alt="switch" />
            </div>
        </div>
    );
}

export default Part7;
