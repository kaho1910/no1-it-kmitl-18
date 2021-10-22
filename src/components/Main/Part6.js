import React from "react";
import MainBtnBlue from "../button/MainBtnBlue";
import v01 from "../../img/Main/Part6/v01.mp4";
import v02 from "../../img/Main/Part6/v02.mp4";

function Part6() {
    return (
        <div className="w-full">
            <div className="relative">
                <video autoPlay loop muted src={v01}></video>
                <div className="grid grid-cols-3 justify-items-center absolute top-1/4 left-0 px-24">
                    <div></div>
                    <div></div>
                    <div className="px-16 py-64">
                        <h2 className="text-5xl text-left">
                            ทริกเกอร์แบบปรับเปลี่ยนได้<sup>1</sup>
                        </h2>
                        <p className="text-2xl text-left mt-10">
                            แรงต้านทานแบบไดนามิกจะเลียนแบบแรงตึงของการโต้ตอบกับอุปกรณ์และสิ่งของในเกม
                            PS5 ที่เลือก
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative">
                <video autoPlay loop muted src={v02}></video>
                <div className="grid grid-cols-2 justify-items-center absolute top-1/4 left-0 px-24">
                    <div></div>
                    <div className="items-center text-left pl-72 pr-24">
                        <h2 className="text-5xl text-left">
                            การตอบสนองการสัมผัส<sup>1</sup>
                        </h2>
                        <p className="text-2xl text-left mt-10 mb-8">
                            การสั่นสะเทือนที่ตอบสนองต่อตัวเลือกในเกมของคุณและจำลองปัจจัยสิ่งแวดล้อมในเกม
                            PS5 ที่เลือก
                        </p>
                        <MainBtnBlue txt="เรียนรู้เพิ่มเติม" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Part6;
