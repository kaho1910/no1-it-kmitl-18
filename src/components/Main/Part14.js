import React from "react";
import MainBtnWhite from "../button/MainBtnWhite";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "animate.css";
import pic01 from "../../img/Main/Part14/01.jpg";
import pic02 from "../../img/Main/Part14/02.png";
import pic03 from "../../img/Main/Part14/03.png";

function Part14() {
    return (
        <div className="w-full relative">
            <img
                src={pic01}
                className="object-cover object-top w-full"
                style={{ height: "57rem" }}
                alt="bg"
            />
            <div className="absolute top-0 left-0 pt-40">
                <div className="grid grid-cols-2 pl-96 pr-96 text-left mb-12">
                    <img
                        src={pic03}
                        className="w-2/5 mb-8"
                        alt="playstation plus"
                    />
                    <div></div>
                    <h2 className="text-5xl">
                        ขยายห้องสมุดของคุณด้วยคอลเลคชัน PlayStation Plus
                        <sup>3</sup>
                    </h2>
                    <div className="pr-56">
                        <p className="text-2xl mb-12">
                            เพลิดเพลินไปกับเกมที่บ่งบอกความเป็นยุค PS4
                            ที่ผ่านการคัดสรร ซึ่งมาพร้อมกับการเป็นสมาชิก
                            PlayStation Plus ของคุณโดยไม่มีค่าใช้จ่ายเพิ่มเติม
                        </p>
                        <MainBtnWhite txt="เรียนรู้เพิ่มเติม" />
                    </div>
                </div>
                <ScrollAnimation
                    animateIn="animate__slideInRight"
                    duration="1"
                    animateOnce="false">
                    <div>
                        <img
                            src={pic02}
                            className="object-cover"
                            style={{ height: "21rem" }}
                            alt="games"
                        />
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
}

export default Part14;
