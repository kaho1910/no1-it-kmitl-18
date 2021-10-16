import React from "react";
import DocTitle from "../components/etc/DocTitle";
import "./Features.css";
import pic1 from "../img/Features/01.png";
import pic2 from "../img/Features/02.png";
import pic3 from "../img/Features/03.jpg";

function Features() {
    DocTitle("ฟีเจอร์ PS5 | ค้นพบวิธีใหม่ๆ ในการเล่น PlayStation 5");
    return (
        <div>
            <div className="relative">
                <img src={pic1} width="100%" alt="ps5" />
                <div className="absolute items-center top-0 w-full h-full grid grid-cols-2">
                    <div className="grid justify-items-center">
                        <div>
                            <h1 className="text-6xl mb-6 text-left">
                                ฟีเจอร์ PS5™ อื่นๆ
                            </h1>
                            <p className="text-lg text-left">
                                ลองสัมผัส UI ของคอนโซล PS5 ให้ละเอียด
                                และค้นพบวิธีใหม่ๆ ในการเล่น
                            </p>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>

            <div
                className="grid grid-cols-1 justify-items-center w-full p-16 pr-96 pl-96"
                style={{ backgroundColor: "#eee" }}>
                <div className="p-12 pt-2 justify-items-center">
                    <h2 className="text-5xl">เกมฮับ</h2>
                    <p className="text-2xl mt-6 mb-6" style={{ color: "#777" }}>
                        มีฮับของเกมบน PS5
                        โดยแต่ละฮับจะรวบรวมทุกอย่างที่เกี่ยวข้องกับเกมนั้นๆ
                        ไว้ด้วยกัน ทั้งกิจกรรม การออกอากาศของชุมชน
                        และเนื้อหาเกมใหม่ๆ
                        ฮับเป็นพื้นที่ที่มีการอัปเดตอย่างต่อเนื่อง
                        โดยจะพัฒนาและปรับเปลี่ยนตลอดอายุการให้บริการของเกม
                    </p>
                </div>
                <img src={pic2} alt="game hub" />
            </div>

            <div className="grid justify-items-center w-full p-16 pb-6 pt-0 relative">
                <img
                    src={pic3}
                    className="relative top-16"
                    width="75%"
                    alt="activities"
                />
                <div className="grid grid-cols-2 justify-items-stretch ml-24 mr-24 relative bottom-12">
                    <div className="grid text-left m-2 mr-4">
                        <div className="h-40"></div>
                        <div className="mb-12">
                            <h4 className="text-3xl mb-4">กิจกรรม</h4>
                            <p className="text-lg">
                                ผู้สร้างเกมสามารถสร้างเกม PS5
                                ของพวกเขาให้คุณสามารถกระโดดข้ามมาที่ภารกิจเฉพาะ
                                โหมด เควส และอีกมากมายจาก
                                ศูนย์ควบคุมของคอนโซลได้โดยตรง
                            </p>
                        </div>
                        <div>
                            <h4 className="text-3xl mb-4">ศูนย์ควบคุม</h4>
                            <p className="text-lg">
                                เข้าถึงฟีเจอร์ระบบที่ใช้บ่อย เนื้อหาเกม
                                และกิจกรรมได้อย่างรวดเร็วโดยไม่ต้องออกจากการเล่นเกม
                                เพียงกดปุ่ม PS
                                ขณะเล่นเกมเพื่อดูโอเวอร์เลย์ศูนย์ควบคุม
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-full m-4 rounded-3xl bg-red-500">
                        video
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
