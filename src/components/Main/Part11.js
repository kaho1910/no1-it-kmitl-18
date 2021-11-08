import React from "react";

import bg from "../../img/Main/Part11/bg01.png";
import shadow from "../../img/Main/Part11/shadow.png";
import v01 from "../../img/Main/Part11/v01.mp4";
import v02 from "../../img/Main/Part11/v02.mp4";
import v03 from "../../img/Main/Part11/v03.mp4";
import v04 from "../../img/Main/Part11/v04.mp4";

function Part11() {
    return (
        <div className="w-full">
            <div className="w-full transform translate-y-2/3 relative z-20">
                <img
                    className="object-contain"
                    width="100%"
                    src={bg}
                    alt="bg"
                />
                <div className="absolute w-full" style={{ top: "38%" }}>
                    <h2 className="text-7xl text-white mb-5">ออกแบบมาเพื่อ</h2>
                    <h2 className="text-7xl text-white">ภาพที่น่าทึ่ง</h2>
                </div>
            </div>
            <div
                className="w-full relative pt-96 pb-0 mt-48"
                style={{ backgroundColor: "#d8dce8", height: "440vh" }}>
                <div className="grid grid-cols-2 px-52 mt-28">
                    <video
                        src={v01}
                        autoPlay
                        loop
                        muted
                        className="object-cover object-center w-full h-full z-30"></video>
                    <div className="p-48 pt-40 text-left">
                        <h3 className="text-5xl leading-tight">
                            สำรวจสภาพแวดล้อมที่เหมือนจริงด้วย Ray Tracing
                        </h3>
                        <p
                            className="text-xl mt-12 pr-24"
                            style={{ color: "#1f1f1f" }}>
                            Ray Tracing
                            นำเสนอระดับใหม่ของความสมจริงด้วยแสงเงาและการสะท้อนที่เป็นธรรมชาติในเกม
                            PS5 ที่รองรับ
                        </p>
                    </div>
                    <img src={shadow} alt="shadow" />
                </div>
                <div className="grid grid-cols-2 mt-16 pr-52 transform -translate-y-16">
                    <div className="pl-80 pr-20 pt-72 text-left">
                        <h3 className="text-5xl leading-tight">
                            มองเห็นสีสันที่มีชีวิตชีวา
                        </h3>
                        <p
                            className="text-xl mt-12 pr-36"
                            style={{ color: "#1f1f1f" }}>
                            ด้วยโทรทัศน์ที่มีระบบ HDR จะทำให้เกม PS5
                            ที่รองรับมอบสีสันที่สดใสอย่างไม่น่าเชื่อ
                        </p>
                    </div>
                    <video
                        src={v02}
                        autoPlay
                        loop
                        muted
                        className="object-cover object-center w-full h-full"></video>
                    <div></div>
                    <img src={shadow} alt="shadow" />
                </div>
                <div className="grid grid-cols-2 pr-52 transform -translate-y-56">
                    <video
                        src={v03}
                        autoPlay
                        loop
                        muted
                        className="object-cover object-center w-full h-full pl-52"></video>
                    <div className="text-left p-44 pr-64">
                        <h3 className="text-5xl leading-tight">
                            ก้าวผ่านโลกของเกมที่สมจริงอย่างเหลือเชื่อ
                        </h3>
                        <p
                            className="text-xl mt-12 pr-36"
                            style={{ color: "#1f1f1f" }}>
                            การเล่นเกมในอัตราเฟรมที่ราบรื่นและลื่นไหลสูงสุดกว่า
                            120 fps ในเกมที่รองรับ พร้อมรองรับเอาต์พุตแบบ 120Hz
                            บนจอแสดงผล 4K
                        </p>
                    </div>
                    <img src={shadow} alt="shadow" />
                    <div></div>
                </div>
                <div className="grid grid-cols-3 pr-80 transform -translate-y-96">
                    <div></div>
                    <div className="text-left pt-12 pr-36 pl-12">
                        <h3 className="text-5xl leading-tight">
                            สัมผัสประสบการณ์กราฟิก 4K ที่คมชัด
                        </h3>
                        <p
                            className="text-xl mt-12 pr-20"
                            style={{ color: "#1f1f1f" }}>
                            รายละเอียดที่ซับซ้อนจะมีชีวิตชีวาด้วยทีวี 4K และเกม
                            PS5 ที่เข้ากันได้
                        </p>
                    </div>
                    <video
                        src={v04}
                        autoPlay
                        loop
                        muted
                        className="object-cover object-center w-full h-full"></video>
                    <div></div>
                    <div></div>
                    <img src={shadow} alt="shadow" />
                </div>
            </div>
        </div>
    );
}

export default Part11;
