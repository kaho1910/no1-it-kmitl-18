import React from "react";
import VidPlayer from "../etc/VidPlayer";
import bg from "../../img/Main/Part3/bg.png";
import pic01 from "../../img/Main/Part3/01.jpg";
import pic02 from "../../img/Main/Part3/02.jpg";
import pic03 from "../../img/Main/Part3/03.jpg";
import pic04 from "../../img/Main/Part3/04.jpg";
import pic05 from "../../img/Main/Part3/05.jpg";

function Part3() {
    return (
        <div
            className="py-40 px-60 text-white grid justify-items-center relative"
            style={{
                backgroundImage: "linear-gradient(180deg, #002fc3, #0018f4)",
            }}>
            <img
                src={bg}
                className="absolute bottom-0 right-0"
                alt="background"
            />
            <p className="text-6xl">ดูเกมเหล่านี้ในขณะเล่นจริง</p>
            <div className="pt-28 pb-16 px-64">
                <VidPlayer pic={pic01} />
                <p className="text-2xl text-left pt-4">
                    สัมผัสประสบการณ์ PlayStation 5
                </p>
            </div>
            <div className="grid grid-cols-4">
                <div className="mx-3">
                    <VidPlayer pic={pic02} />
                    <p className="text-2xl text-left pt-4">
                        เทรลเลอร์ฮาร์ดแวร์ PS5
                    </p>
                </div>
                <div className="mx-3">
                    <VidPlayer pic={pic03} />
                    <p className="text-2xl text-left pt-4">
                        โลกใหม่ที่น่าสำรวจ
                    </p>
                </div>
                <div className="mx-3">
                    <VidPlayer pic={pic04} />
                    <p className="text-2xl text-left pt-4">
                        ความดื่มด่ำจนแทบหยุดหายใจ
                    </p>
                </div>
                <div className="mx-3">
                    <VidPlayer pic={pic05} />
                    <p className="text-2xl text-left pt-4">
                        ความเข้ากันได้ย้อนหลัง
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Part3;
