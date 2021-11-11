import React from "react";
import DocTitle from "../components/etc/DocTitle";
import "./Accessories.css";
import dualsense from "../img/Accessories/dualsense.png";
import charge from "../img/Accessories/charge.png";
import pulse from "../img/Accessories/pulse.png";
import remote from "../img/Accessories/remote.png";
import cam from "../img/Accessories/cam.png";
import next from "../img/Accessories/next-black.svg";
import VIDACCZ from "../img/Accessories/vidacc.mp4";
import BtnBlue from "../components/button/BtnBlue";

function Accessories() {
    DocTitle("อุปกรณ์เสริม PS5 | อุปกรณ์เสริม PlayStation รุ่นใหม่ ประเทศไทย");
    const multi = {
        color: "#0072CE",
    };
    return (
        <div>
            <div className="grid grid-cols-1 pr-81 pl-81 justify-items-center">
                <video
                    autoPlay
                    loop
                    muted
                    style={{
                        width: "1920px",
                        height: "850px",
                        objectFit: "cover",
                    }}>
                    <source src={VIDACCZ} />
                </video>
                <div className="theheader absolute">
                    <h1 className="text-5xl" style={{ color: "#0072CE" }}>
                        อุปกรณ์เสริม PlayStation®5
                    </h1>
                    <p className="text-2xl mt-6" style={{ color: "grey" }}>
                        ก้าวข้ามขีดจำกัดของการเล่นเกมด้วยอุปกรณ์เสริมรุ่นใหม่จาก
                        PlayStation®
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 justify-items-center">
                <h1 className="text-5xl m-16">คอนโทรลเลอร์ไร้สาย DualSense™</h1>
                <img src={dualsense} width="60%" alt="pic" />
                <p className="text-lg mt-16 mb-8 mx-52 px-96">
                    ค้นพบประสบการณ์การเล่นเกมที่ล้ำลึก และสมจริงมากขึ้น
                    <sup>1</sup>
                    จากคอนโทรลเลอร์ PS5™ ที่ปรับปรุงใหม่
                    ด้วยการตอบสนองแบบสัมผัสและเอฟเฟกต์ทริกเกอร์แบบไดนามิก
                    <sup>2</sup>
                    คอนโทรลเลอร์ไร้สาย DualSense ยังมีไมโครโฟนในตัวและปุ่มครีเอท
                    ซึ่งทั้งหมดถูกออกแบบมาอย่างเป็นเอกลักษณ์
                    ทำให้ใช้งานได้อย่างสะดวกสบาย
                </p>
                <BtnBlue txt="เรียนรู้เพิ่มเติม" />
                {/* <LMBB /> */}
                <div
                    className="cursor-pointer hover:underline learnmore text-lg mt-8 mb-16 flex"
                    style={multi}>
                    พบกับเกมผู้เล่นหลายคนที่เล่นในเครื่องเดียวกันได้{" "}
                    <img src={next} className="ml-1" alt="next" />
                </div>
            </div>

            <div
                className="grid grid-cols-2 justify-items-center"
                style={{ backgroundColor: "#eee" }}>
                <div className="coll">
                    <div className="text-left px-40">
                        <h1 className="text-4xl m-8 ml-0">
                            แท่นชาร์จ DualSense™
                        </h1>
                        <p className="text-lg m-8 ml-0">
                            ชาร์จคอนโทรลเลอร์ไร้สาย DualSense™
                            ได้สูงสุดสองตัวพร้อมกันโดยไม่ต้อง เชื่อมต่อกับคอนโซล
                            PlayStation®5
                        </p>
                        <BtnBlue txt="ศึกษาข้อมูลเพิ่มเติม" />
                        {/* <LMBB /> */}
                    </div>
                </div>
                <div>
                    <img src={charge} width="80%" className="m-16" alt="pic" />
                </div>
            </div>

            <div className="grid grid-cols-1 justify-items-center">
                <h1 className="text-5xl m-16">ชุดหูฟังไร้สาย PULSE 3D™</h1>
                <img src={pulse} width="30%" alt="pic" />
                <p className="text-lg mt-16 mb-8 mx-32 px-96">
                    เล่นเกมอย่างสะดวกสบายด้วยชุดหูฟังไร้สายที่ได้รับการปรับแต่งมาเป็นอย่างดีเพื่อรองรับเสียง
                    3D บนคอนโซล PS5<sup>2</sup> มาพร้อมระบบชาร์จผ่าน USB Type-C®
                    และไมโครโฟนตัดเสียงรบกวนคู่ ทำให้การสนทนาในปาร์ตี้ของคุณ
                    ลื่นไหลและชัดเจน<sup>3</sup>
                </p>
                <BtnBlue txt="เรียนรู้เพิ่มเติม" />
                {/* <LMBB /> */}
            </div>

            <div
                className="grid grid-cols-2 justify-items-center mt-16"
                style={{ backgroundColor: "#eee" }}>
                <div>
                    <img src={remote} width="80%" className="m-16" alt="pic" />
                </div>
                <div className="coll">
                    <div className="text-left pr-56">
                        <h1 className="text-5xl m-8 ml-0">รีโมตสื่อ</h1>
                        <p className="text-lg m-8 ml-0">
                            ควบคุมการเล่นภาพยนตร์ บริการสตรีมมิ่ง<sup>4</sup>
                            และอื่นๆ บนคอนโซล PS5™ ของคุณได้สะดวกยิ่งขึ้น
                            ด้วยเลย์เอาต์ที่ใช้งานง่าย
                        </p>
                        <BtnBlue txt="เรียนรู้เพิ่มเติม" />
                        {/* <LMBB /> */}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 justify-items-center mt-16">
                <div className="coll">
                    <div className="text-left px-40">
                        <h1 className="text-5xl m-8 ml-0">กล้อง HD</h1>
                        <p className="text-lg m-8 ml-0 pr-32">
                            ปรากฎตัวในวิดีโอเกมเพลย์ของคุณเองและนำออกอากาศ
                            <sup>3</sup>
                            ในคุณภาพ Full-HD ที่ราบรื่นคมชัด
                        </p>
                        <BtnBlue txt="เรียนรู้เพิ่มเติม" />
                        {/* <LMBB /> */}
                    </div>
                </div>
                <div>
                    <img src={cam} width="80%" className="m-16" alt="pic" />
                </div>
            </div>

            <div className="grid grid-cols-1 justify-items-center mt-16">
                <h1 className="text-5xl m-6">อะแดปเตอร์ PlayStation®Camera</h1>
                <p className="text-lg m-8 px-96">
                    เชื่อมต่อ PlayStation®VR กับคอนโซล PS5™
                    แล้วสนุกไปกับหลากหลายเกมที่รองรับ PS VR โดยคุณต้องมี
                    PlayStation®Camera<sup>5</sup> สำหรับ PS4™ และอะแดปเตอร์
                    PlayStation®Camera (ไม่จำเป็นต้องซื้อ) เพื่อติดตั้ง PS VR
                    เข้ากับคอนโซล PS5™
                    ของคุณรายละเอียดเพิ่มเติมเกี่ยวกับวิธีรับอะแดปเตอร์จะแจ้งให้ทราบบน
                    PlayStation.com เมื่อพร้อมให้บริการ
                </p>
                <BtnBlue txt="ขออะแดปเตอร์ PlayStation Camera เลย" />
                {/* <ADPTBB /> */}
            </div>

            <div
                className="grid grid-cols-1 mt-16 text-left px-96 py-4"
                style={{ backgroundColor: "#eee" }}>
                <div className="px-12">
                    <p className="text-md mt-16 mb-6">
                        <sup>1</sup> เมื่อเปรียบเทียบกับคอนโทรลเลอร์ไร้สาย
                        DUALSHOCK®4
                    </p>
                    <p className="text-md mb-6">
                        <sup>2</sup> สามารถใช้งานได้เมื่อเกมรองรับฟีเจอร์
                    </p>
                    <p className="text-md mb-6">
                        <sup>3</sup> ต้องมีอินเทอร์เน็ตและบัญชีสำหรับ
                        PlayStation™Network
                    </p>
                    <p className="text-md mb-6">
                        <sup>4</sup> จำเป็นต้องมีอินเทอร์เน็ตและบัญชีสำหรับ
                        PlayStation™ Network
                        บริการสตรีมมิ่งอาจต้องมีการสมัครสมาชิกแบบมีค่าใช้จ่ายและอาจใช้บริการไม่ได้
                        ในบางประเทศ
                    </p>
                    <p className="text-md mb-6">
                        <sup>5</sup>การเล่นเกม PS VR บนคอนโซล PS5 ™ต้องใช้แว่น
                        PS VR, PlayStation®Camera สำหรับ PS4™ (รุ่น CUH-ZEY1
                        หรือ CUH-ZEY2) และอะแดปเตอร์ PlayStation®Camera
                        (ไม่จำเป็นต้องซื้อ ไปที่ playstation.com/camera-adaptor
                        สำหรับรายละเอียด) เพื่อประสบการณ์ PS VR ที่ดีที่สุดบน
                        PS5 เราแนะนำให้ใช้คอนโทรลเลอร์ไร้สาย DUALSHOCK®4
                        เกมที่เลือกอาจต้องใช้คอนโทรลเลอร์ควบคุมการเคลื่อนไหว
                        PlayStation®Move หรือเข้ากันได้กับคอนโทรลเลอร์
                        PlayStation®VR Aim กล้อง HD รุ่นใหม่สำหรับ PS5
                        เข้าไม่ได้กับ PS VR แว่น PS VR, กล้อง PS,
                        คอนโทรลเลอร์ไร้สาย DUALSHOCK 4, คอนโทรลเลอร์ PS Move
                        และคอนโทรลเลอร์ PS VR Aim ทั้งหมดจำหน่ายแยกจาก PS5
                    </p>
                    <p className="text-md mb-12">
                        “PlayStation”, “เครื่องหมาย PlayStation Family", “PS4”,
                        “โลโก้ PS5”, “PS5” และ “DualSense”
                        เป็นเครื่องหมายการค้าจดทะเบียนหรือเครื่องหมายการค้าของ
                        Sony Interactive Entertainment Inc. “SONY”
                        เป็นเครื่องหมายการค้าจดทะเบียนของ Sony Corporation USB
                        Type-C® เป็นเครื่องหมายการค้าที่จดทะเบียนของ USB
                        Implementers Forum
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Accessories;
