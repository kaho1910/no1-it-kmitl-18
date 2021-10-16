import React from "react";
import DocTitle from "../components/etc/DocTitle";
import VidPlayer from "../components/etc/VidPlayer";
import VidBtnWhite from "../components/etc/VidBtnWhite";
import VidBtnBlue from "../components/etc/VidBtnBlue";
import "./Features.css";
import pic1 from "../img/Features/01.png";
import pic2 from "../img/Features/02.png";
import pic3 from "../img/Features/03.jpg";
import pic4 from "../img/Features/04.jpg";
import pic5 from "../img/Features/05.jpg";
import pic6 from "../img/Features/06.jpg";
import pic7 from "../img/Features/07.jpg";
import pic8 from "../img/Features/08.png";
import pic9 from "../img/Features/09.png";
import pic10 from "../img/Features/10.png";
import pic11 from "../img/Features/11.png";
import pic12 from "../img/Features/12.png";
import pic13 from "../img/Features/13.jpg";
import pic14 from "../img/Features/14.jpg";
import pic15 from "../img/Features/15.jpg";
import pic16 from "../img/Features/16.png";
import pic17 from "../img/Features/17.png";

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
                    <div>
                        <VidPlayer></VidPlayer>
                    </div>
                </div>
            </div>

            <div
                className="w-full justify-items-center p-40 pt-0 pb-16 relative"
                style={{ backgroundColor: "#eee" }}>
                <img
                    src={pic4}
                    style={{ height: "37rem" }}
                    className="object-cover w-full relative top-24"
                    alt="game 1"
                />
                <div className="grid grid-cols-2">
                    <div className="p-12 pt-0 z-40">
                        <img src={pic5} alt="game 2" />
                    </div>
                    <div className="flex items-center text-left p-2 mt-4">
                        <div>
                            <h3 className="text-4xl mb-5">การแนะนำเกม</h3>
                            <p className="text-lg">
                                ค้นหาการผจญภัยครั้งถัดไปของคุณผ่านคำแนะนำที่จัดตามประเภทของเกมที่คุณชื่นชอบ
                                <sup>2</sup>
                            </p>
                        </div>
                    </div>
                </div>
                <p className="text-left text-sm">
                    Destruction AllStars คาดว่าจะเปิดตัวเดือนกุมภาพันธ์ 2021
                </p>
            </div>

            <div className="grid justify-items-center w-full p-16 pb-6 pt-0 relative">
                <img
                    src={pic6}
                    className="relative top-16"
                    width="70%"
                    alt="activities"
                />
                <div className="grid grid-cols-2 justify-items-stretch ml-24 mr-24 relative bottom-12">
                    <div className="flex items-center text-left m-2 mr-4 mt-48 mb-24">
                        <div>
                            <h4 className="text-4xl mb-4">การประลอง</h4>
                            <p className="text-lg">
                                เผชิญการประลองพิเศษในเกมสำหรับเกม PS5 ที่รองรับ
                                และแชร์ผลของคุณกับเพื่อนบน PS5
                                เพื่อดูกันว่าพวกเขาจะเอาชนะคุณได้หรือไม่
                                หากเพื่อนของคุณทำลายสถิติคะแนนสูงสุดหรือเวลาของคุณ
                                คุณจะได้รับการแจ้งและมีโอกาสเอาคืนได้ทันที
                            </p>
                        </div>
                    </div>
                    <div>
                        <VidPlayer></VidPlayer>
                    </div>
                </div>
                <div className="grid grid-cols-2 justify-items-stretch ml-24 mr-24 pb-8">
                    <div className="p-4">
                        <img src={pic7} alt="comment" />
                    </div>
                    <div className="flex items-center text-left m-4 mt-2 mb-40">
                        <div>
                            <h4 className="text-4xl mb-4">คำชม</h4>
                            <p className="text-lg">
                                ผู้เล่นสามารถให้คำชมเพื่อให้กำลังใจคู่แข่งคนอื่นๆ
                                ในการแข่งขันแบบผู้เล่นหลายคนได้แล้ว<sup>1</sup>
                                คำชมที่คุณได้รับนี้จะแสดงในโพรไฟล์ของคุณ
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="grid grid-cols-2 p-16 pl-44 pr-44"
                style={{ backgroundColor: "#eeeeee" }}>
                <img src={pic8} alt="ps5 and ps4" />
                <div className="flex items-center">
                    <div className="text-left p-4">
                        <h3 className="text-4xl mb-6">แชทข้ามรุ่นกับ PS4™</h3>
                        <p className="text-lg">
                            ไม่ว่าเพื่อนของคุณจะเล่นอยู่บน PS4 หรือ PS5
                            การแชทผ่านเสียงข้ามรุ่นจะทำให้ทุกคนสามารถสนทนากันได้ผ่านบัญชีสำหรับ
                            PlayStation™Network
                            คุณยังสามารถพูดคุยกับผู้เล่นบนอุปกรณ์มือถือที่มี
                            PlayStation®App ได้
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative">
                <img src={pic9} width="100%" alt="mutiplayer" />
                <div className="absolute items-center top-0 w-full h-full grid grid-cols-2">
                    <div className="grid justify-items-center">
                        <div className="p-40 grid justify-items-start">
                            <h2 className="text-5xl mb-6 text-left text-white">
                                ผู้เล่นหลายคนแบบข้ามรุ่น
                            </h2>
                            <p className="text-lg text-left text-white mb-6">
                                เกมครีเอเตอร์สามารถเลือกเปิดใช้งานการแข่งขันเกมแบบผู้เล่นหลายคนออนไลน์ระหว่าง
                                PS5 และ PS4 ได้<sup>1</sup> ผู้เล่น PS4
                                สามารถรับคำเชิญให้มาเล่นกับผู้เล่น PS5
                                และผู้เล่น PS5 ก็สามารถรับคำเชิญจากผู้เล่น PS4
                                ได้เช่นกัน
                            </p>
                            <VidBtnWhite />
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>

            <div className="grid grid-cols-2 w-full pt-16 pl-44 pr-44 pb-12">
                <div className="mr-4">
                    <img src={pic10} alt="content1" />
                    <div className="text-left mt-10">
                        <h3 className="text-4xl mb-6">การค้นหาที่ครอบคลุม</h3>
                        <p className="text-lg">
                            เล่นได้นานขึ้นและใช้เวลาค้นหาสิ่งที่ต้องการทำน้อยลง
                            - PS5 สามารถค้นหาเกมบน PlayStation Store
                            ภาพยนตร์บนบางแอปสตรีมวิดีโอ<sup>5</sup>
                            หรือผู้เล่นคนอื่นได้อย่างรวดเร็ว
                        </p>
                    </div>
                </div>
                <div className="ml-4">
                    <img src={pic11} alt="content1" />
                    <div className="text-left mt-10">
                        <h3 className="text-4xl mb-6">
                            ชุดการตั้งค่าล่วงหน้าของเกม
                        </h3>
                        <p className="text-lg">
                            ผู้เล่นสามารถเลือกชุดการตั้งค่าล่วงหน้าของเกมที่บันทึกไว้สำหรับเกมที่รองรับทั้งหมด
                            อาทิ กลับด้านขึ้น-ลง (Inverted Y-axis) และคำบรรยาย
                        </p>
                    </div>
                </div>
                <i className="text-sm text-left mt-6">
                    หมายเหตุ: ผลิตภัณฑ์ในรูปภาพอาจเปลี่ยนแปลงได้
                </i>
            </div>

            <div className="relative">
                <img src={pic12} height="95%" alt="mutiplayer" />
                <div className="absolute items-center top-0 w-full h-full grid grid-cols-2">
                    <div></div>
                    <div className="grid justify-items-center">
                        <div className="p-40 grid justify-items-start">
                            <h2 className="text-5xl mb-6 text-left text-white">
                                PlayStation®App
                            </h2>
                            <p className="text-lg text-left text-white mb-6">
                                พูดคุยกับเพื่อน รับข่าวสารล่าสุดเกี่ยวกับเกม
                                และดาวน์โหลดเกมมายังคอนโซลจาก PlayStation Store
                                โดยใช้ PlayStation App
                                คุณทำได้แม้กระทั่งจัดการที่จัดเก็บของคอนโซล PS5
                                จากทางไกล
                                และนั่นทำให้คุณพร้อมสำหรับการผจญภัยครั้งต่อไปในการเล่นเกมเสมอ
                                <sup>2</sup>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2">
                <div className="pl-44 pr-2 flex items-center">
                    <div className="text-left">
                        <h3 className="text-4xl mb-6">Game Base</h3>
                        <p className="text-lg mb-6">
                            เข้าถึงพื้นที่พูดคุยที่สร้างไว้พิเศษสำหรับคุณและผู้เล่นคนอื่นด้วยบัญชีสำหรับ
                            PlayStation Network ของคุณ แบ่งปันเนื้อหา
                            วางแผนเซสชันการเล่น กระโดดเข้าเกม
                            หรือเพียงมาพูดคุยกัน
                            คุณยังสามารถเข้าถึงฟีเจอร์บางอย่างบนเว็บและอุปกรณ์มือถือด้วย
                            PlayStation App ได้
                        </p>
                        <VidBtnBlue />
                    </div>
                </div>
                <div className="pl-6 pb-16">
                    <img src={pic13} alt="community1" />
                </div>

                <div className="pr-6 pb-16">
                    <img src={pic14} alt="community1" />
                </div>
                <div className="pl-6 pr-44 flex items-center">
                    <div className="text-left">
                        <h3 className="text-4xl mb-6">
                            การเริ่มเกมผู้เล่นหลายคนแบบกลุ่ม
                        </h3>
                        <p className="text-lg mb-6">
                            เริ่มการแข่งขันผู้เล่นหลายคนได้โดยตรงจากปาร์ตี้ Game
                            Base และเริ่มเชิญทุกคนโดยอัตโนมัติ<sup>1</sup>{" "}
                            โดยไม่ต้องเชิญทีละคน
                        </p>
                        <VidBtnBlue />
                    </div>
                </div>

                <div className="pl-44 pr-2 flex items-center">
                    <div className="text-left">
                        <h3 className="text-4xl mb-6">
                            แบ่งปันหน้าจอพร้อมทำหลายอย่างพร้อมกัน
                        </h3>
                        <p className="text-lg mb-6">
                            ผู้เล่นออนไลน์สามารถดูหน้าจอของสมาชิกปาร์ตี้
                            รวมทั้งเล่นเกมของตัวเองขณะดูพวกเขาไปพร้อมกันได้
                        </p>
                        <VidBtnBlue />
                    </div>
                </div>
                <div className="pl-6">
                    <img src={pic15} alt="community1" />
                </div>
            </div>

            <div
                className="grid grid-cols-1 justify-items-center w-full p-16 pr-96 pl-96"
                style={{ backgroundColor: "#eeeeee" }}>
                <h2 className="text-4xl mb-6">การเล่นระยะไกล</h2>
                <p className="text-lg mb-20 px-10">
                    เข้าถึงเกมบนคอนโซล PS5 ของคุณ<sup>3 </sup>
                    โดยสตรีมเกมไปยังคอนโซล PS5 อีกเครื่องหรือคอนโซล PS4, PC
                    และโทรศัพท์ระบบ Apple iOS หรือ Android ของคุณ
                </p>
                <img src={pic16} className="w-11/12" alt="remote play" />
            </div>

            <div className="relative">
                <img src={pic17} width="100%" alt="mutiplayer" />
                <div className="absolute items-center top-0 w-full h-full grid grid-cols-2">
                    <div className="grid justify-items-center">
                        <div className="p-40 grid justify-items-start">
                            <h3 className="text-4xl mb-6 text-left">
                                ความเข้ากันได้ของไดรฟ์ USB ภายนอก
                            </h3>
                            <p className="text-lg text-left mb-6">
                                คอนโซล PS5 สามารถจัดเก็บเกม PS4 และเกม PS5
                                ที่เข้ากันได้บนไดรฟ์ USB ที่รองรับ SuperSpeed
                                USB*<sup>4</sup>
                                ซึ่งหมายความว่าคุณสามารถประหยัดพื้นที่บน SSD
                                ภายในความเร็วสูงพิเศษไปได้
                                อีกทั้งยังประหยัดเวลาด้วยการติดตั้งเกม PS5
                                ใหม่จากไดรฟ์ USB ภายนอก
                                แทนที่จะต้องดาวน์โหลดใหม่หรือติดตั้งจากแผ่น
                            </p>
                            <p className="text-lg text-left mb-6">
                                เมื่อคุณพร้อมจะเล่นเกม PS5 ที่อยู่บนไดรฟ์ USB
                                ภายนอก ก็เพียงย้ายเกมกลับมายัง SSD
                                ภายในผ่านเมนูตัวเลือกในห้องสมุด คุณสามารถเล่นเกม
                                PS4 ได้โดยตรงจากไดรฟ์ USB ภายนอกหรือจาก SSD
                                ภายใน
                            </p>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>

            <div
                className="grid grid-cols-1 justify-items-center w-full pt-16 pr-48 pl-48 pb-40"
                style={{ backgroundColor: "#eee" }}>
                <h2 className="text-4xl mb-6">วิดีโอเพิ่มเติม</h2>
                <p className="text-2xl mb-10 px-10" style={{ color: "#777" }}>
                    คุณสมบัติเพิ่มเติมที่คุณจะพบได้ใน PS5
                </p>
                <div className="grid grid-cols-3 h-72">
                    <div className="mr-8">
                        <VidPlayer></VidPlayer>
                        <h4 className="text-2xl mb-4">
                            ความช่วยเหลือเกี่ยวกับเกมกับ PlayStation Plus
                        </h4>
                    </div>
                    <div className="mr-8">
                        <VidPlayer></VidPlayer>
                        <h4 className="text-2xl mb-4">สร้างและแบ่งปัน</h4>
                    </div>
                    <div>
                        <VidPlayer></VidPlayer>
                        <h4 className="text-2xl mb-4">กิจกรรมผู้เล่นหลายคน</h4>
                    </div>
                </div>
            </div>

            <div className="w-full text-left py-16 px-44">
                <p className="text-sm mb-6">
                    <sup>1</sup>ต้องสมัครสมาชิก PlayStation®Plus
                    เพื่อเล่นเกมแบบผู้เล่นหลายคน PS Plus
                    เป็นการสมัครสมาชิกต่อเนื่องแบบมีค่าใช้จ่าย
                    โดยจะมีการเรียกเก็บค่าบริการโดยอัตโนมัติตามความถี่ที่ผู้บริโภคเลือกไว้ในขณะซื้อจนกว่าจะมีการยกเลิก
                </p>
                <p className="text-sm mb-6">
                    <sup>2</sup>ต้องมีบัญชีสำหรับ PlayStation Network
                    ข้อกำหนดทั้งหมดมีผลบังคับใช้ –
                    <span
                        className="cursor-pointer underline"
                        style={{ color: "#0072ce" }}>
                        playstation.com/PSNTerms
                    </span>
                    ปิดการปรับให้เหมาะสมกับบุคคลหากคุณไม่ต้องการรับการแนะนำที่ปรับให้เหมาะสมกับบุคคล
                    เมื่อปิดใช้งาน คุณจะยังคงเห็นข้อเสนอและคำแนะนำอยู่
                    เพียงแต่อาจมีความเกี่ยวข้องน้อยลง
                </p>
                <p className="text-sm mb-6">
                    <sup>3</sup>ต้องมีบัญชีสำหรับ PlayStation Network
                    เกมที่เข้ากันได้ คอนโซล PS5 ที่มีซอฟต์แวร์ระบบล่าสุด
                    การเชื่อมต่ออินเทอร์เน็ตความเร็วสูง และอุปกรณ์ iOS หรือ
                    Android ที่เข้ากันได้เพื่อเล่นระยะไกล
                    แนะนำให้ใช้การเชื่อมต่อเครือข่ายแบบใช้สายกับคอนโซล PS5
                </p>
                <p className="text-sm mb-6">
                    <sup>4</sup>ความจุต่ำสุด 250 GB และสูงสุด 8 TB Seagate 2TB
                    External Game Drive
                    พัฒนาขึ้นภายใต้โปรแกรมที่ได้รับอนุญาตอย่างเป็นทางการสำหรับ
                    PlayStation® และจะทำงานร่วมกับ PlayStation®5
                    ภายใต้การอนุมัติผลิตภัณฑ์ขั้นสุดท้ายของ Sony Interactive
                    Entertainment
                </p>
                <p className="text-sm">
                    <sup>5</sup>บริการสตรีมมิ่งอาจไม่พร้อมใช้งานในบางภูมิภาค
                    อาจต้องใช้อินเทอร์เน็ต
                    การสมัครสมาชิกบริการสตรีมมิ่งแบบมีค่าใช้จ่าย และบัญชีสำหรับ
                    PlayStation®Network
                </p>
            </div>
        </div>
    );
}

export default Features;
