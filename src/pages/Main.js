import React from "react";
import Show from "./Show";
import DocTitle from "../components/etc/DocTitle";
import logoMarvel from "../img/Games/60.png";

function main() {
    DocTitle("PlayStation 5 | Play Has No Limits | PlayStation");
    return (
        <div className="content">
            {/* <Show /> */}

            <div
                className="w-full text-left py-16 px-44"
                style={{ backgroundColor: "#eeeeee" }}>
                <div className="w-2/12">
                    <img src={logoMarvel} width="75%" alt="marvel logo" />
                </div>
                <div className="my-8">
                    <p className="text-base leading-7">© 2021 Marvel</p>
                    <p className="text-base leading-7">
                        © 2021 Sony Interactive Entertainment LLC
                    </p>
                    <p className="text-base">
                        Developed by Insomniac Games, Inc
                    </p>
                </div>
                <div>
                    <p className="text-sm mb-6 leading-8">
                        <sup>1. </sup>สามารถใช้งานได้ในเกมที่รองรับฟีเจอร์
                    </p>
                    <p className="text-sm mb-6 leading-8">
                        <sup>2. </sup>การเล่นเกม PS VR บนคอนโซล PS5 ต้องใช้แว่น
                        PS VR, PlayStation Camera สำหรับ PS4 (รุ่น CUH-ZEY1 หรือ
                        CUH-ZEY2) และอะแดปเตอร์ PlayStation Camera
                        (ไม่จำเป็นต้องซื้อ ไปที่{" "}
                        <span
                            className="cursor-pointer underline"
                            style={{ color: "#0072ce" }}>
                            playstation.com/camera-adaptor
                        </span>{" "}
                        สำหรับรายละเอียด) เพื่อประสบการณ์ PS VR ที่ดีที่สุดบน
                        PS5 เราแนะนำให้ใช้คอนโทรลเลอร์ไร้สาย DUALSHOCK 4
                        เกมที่เลือกอาจต้องใช้คอนโทรลเลอร์ควบคุมการเคลื่อนไหว
                        PlayStation Move หรือเข้ากันได้กับคอนโทรลเลอร์
                        PlayStation VR Aim กล้อง HD รุ่นใหม่สำหรับ PS5
                        ไม่สามารถใช้ได้กับ PS VR ชุดหูฟัง PS VR, กล้อง PS,
                        คอนโทรลเลอร์ไร้สาย DUALSHOCK 4, คอนโทรลเลอร์ PS Move
                        และคอนโทรลเลอร์ PS VR Aim
                        ทั้งหมดจำหน่ายแยกต่างหากจากคอนโซล PS5
                    </p>
                    <p className="text-sm mb-6 leading-8">
                        <sup>3. </sup>ค่าธรรมเนียมการสมัครสมาชิก PlayStation
                        Plus จะถูกเรียกเก็บซ้ำจนกว่าจะถูกยกเลิก
                        มีการจำกัดอายุในการใช้ เงื่อนไขข้อกำหนดแบบเต็ม:{" "}
                        <span
                            className="cursor-pointer underline"
                            style={{ color: "#0072ce" }}>
                            www.playstation.com/legal/ps-plus-usage-terms
                        </span>{" "}
                        จำนวนและความพร้อมใช้งานของเกม PlayStation Plus
                        Collection อาจแตกต่างกันไปในแต่ละประเทศ ดู{" "}
                        <span
                            className="cursor-pointer underline"
                            style={{ color: "#0072ce" }}>
                            playstation.com/psplus
                        </span>{" "}
                        สำหรับรายละเอียดและข้อมูลล่าสุดเกี่ยวกับข้อเสนอของ PS
                        Plus
                    </p>
                    <p className="text-sm mb-6 leading-8">
                        <sup>4. </sup>
                        อาจมีการเสนอการอัปเกรดโดยไม่มีค่าใช้จ่ายเพิ่มเติมหรือมีค่าธรรมเนียม
                        และอาจมีในช่วงเวลาจำกัด หากต้องการอัปเกรดแผ่นดิสก์เกม
                        PS4 เป็นเวอร์ชัน PS5 ดิจิตอล คุณจำเป็นต้องมีคอนโซล PS5
                        ที่มีดิสก์ไดรฟ์
                        บริการสตรีมมิ่งอาจต้องมีการสมัครสมาชิกแบบมีค่าใช้จ่ายและอาจไม่มีให้บริการในบางประเทศ
                        ต้องมีอินเทอร์เน็ตและบัญชีสำหรับ PlayStation Network
                        บริการสตรีมมิ่งอาจต้องมีการสมัครสมาชิกแบบมีค่าใช้จ่ายและใช้บริการไม่ได้ในบางประเทศ
                        ต้องมีอินเทอร์เน็ตและบัญชีสำหรับ PlayStation Network
                        เจ้าของบัญชีต้องมีอายุ 7 ปีขึ้นไป ผู้ใช้ที่มีอายุต่ำกว่า
                        18 ปีต้องได้รับความยินยอมจากผู้ปกครอง
                        เงื่อนไขข้อกำหนดแบบเต็ม –{" "}
                        <span
                            className="cursor-pointer underline"
                            style={{ color: "#0072ce" }}>
                            playstation.com/PSNTerms
                        </span>
                    </p>
                    <p className="text-sm mb-6 leading-8">
                        “PlayStation” “เครื่องหมาย PlayStation Family" “โลโก้
                        PS5” "DualSense" และ "Play Has No Limits"
                        เป็นเครื่องหมายการค้าจดทะเบียนหรือเครื่องหมายการค้าของ
                        Sony Interactive Entertainment Inc. “SONY”
                        เป็นเครื่องหมายการค้าจดทะเบียนของ Sony Corporation
                    </p>
                </div>
            </div>
        </div>
    );
}

export default main;
