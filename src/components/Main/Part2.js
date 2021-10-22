import React from "react";
import pic01 from "../../img/Main/Part2/01-speed.svg";
import pic02 from "../../img/Main/Part2/02-immersion.svg";
import pic03 from "../../img/Main/Part2/03-games.svg";

function Part2() {
    return (
        <div
            className="w-full py-40 pb-96"
            style={{
                backgroundImage: "linear-gradient(180deg,#1000fe,#002fc3)",
            }}>
            <div className=" px-96 text-white">
                <div className="grid grid-cols-3 justify-items-center">
                    <img src={pic01} className="px-40 pb-6" alt="speed" />
                    <img src={pic02} className="px-40 pb-6" alt="immersion" />
                    <img src={pic03} className="px-40 pb-6" alt="games" />
                    <b className="text-sm px-32">ความเร็ว ดุจสายฟ้า</b>
                    <b className="text-sm px-32">ความดื่มด่ำ จนแทบหยุดหายใจ</b>
                    <b className="text-sm px-32">เกม อันน่าทึ่ง</b>
                </div>
                <hr
                    className="w-3/4 justify-self-center mx-auto my-10 opacity-50"
                    style={{ border: "1px solid #fff" }}
                />
                <p className="text-xl px-40 pt-2 leading-8">
                    สัมผัสประสบการณ์โหลดเกมอย่างรวดเร็วดุจสายฟ้าด้วย SSD
                    ความเร็วสูงพิเศษ
                    ดื่มด่ำกับการเล่นเกมมากกว่าเดิมด้วยการรองรับการตอบสนองการสัมผัส
                    <sup>1</sup>, ทริกเกอร์แบบปรับเปลี่ยนได้<sup>1</sup>{" "}
                    และเสียง 3D* รวมทั้งเกมรุ่นใหม่ล่าสุดอันน่าเหลือเชื่อของ
                    PlayStation
                </p>
                <p className="text-base mt-16 pb-12">
                    *เสียง 3D กับหูฟังที่เข้ากันได้
                </p>
            </div>
        </div>
    );
}

export default Part2;
