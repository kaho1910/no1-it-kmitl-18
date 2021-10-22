import React from "react";
import "./Games.css";
import DocTitle from "../components/etc/DocTitle";
import VidPlayer from "../components/button/VidPlayer";
import BtnBlue from "../components/button/BtnBlue";
import BtnWhite from "../components/button/BtnWhite";
import CardGame from "../components/Games/CardGame";
import CardGameV2 from "../components/Games/CardGameV2";
import pic1 from "../img/Games/01.jpg";
import pic2 from "../img/Games/02.png";
import pic3 from "../img/Games/03.jpg";
import pic4 from "../img/Games/04.jpg";
import pic5 from "../img/Games/05.jpg";
import pic6 from "../img/Games/06.jpg";
import pic7 from "../img/Games/07.jpg";
import pic8 from "../img/Games/08.jpg";
import pic9 from "../img/Games/09.jpg";
import pic10 from "../img/Games/10.jpg";
import pic11 from "../img/Games/11.jpg";
import pic12 from "../img/Games/12.jpg";
import pic13 from "../img/Games/13.jpg";
import pic14 from "../img/Games/14.jpg";
import pic15 from "../img/Games/15.jpg";
import pic16 from "../img/Games/16.png";
import pic17 from "../img/Games/17.jpg";
import pic18 from "../img/Games/18.jpg";
import pic19 from "../img/Games/19.jpg";
import pic20 from "../img/Games/20.jpg";
import pic21 from "../img/Games/21.jpg";
import pic22 from "../img/Games/22.png";
import pic23 from "../img/Games/23.jpg";
import pic24 from "../img/Games/24.png";
import pic25 from "../img/Games/25.jpg";
import pic26 from "../img/Games/26.jpg";
import pic27 from "../img/Games/27.jpg";
import pic28 from "../img/Games/28.png";
import pic29 from "../img/Games/29.jpg";
import pic30 from "../img/Games/30.jpg";
import pic31 from "../img/Games/31.png";
import pic32 from "../img/Games/32.jpg";
import pic33 from "../img/Games/33.png";
import pic34 from "../img/Games/34.jpg";
import pic35 from "../img/Games/35.png";
import pic36 from "../img/Games/36.png";
import pic37 from "../img/Games/37.jpg";
import pic38 from "../img/Games/38.png";
import pic39 from "../img/Games/39.jpg";
import pic40 from "../img/Games/40.jpg";
import pic41 from "../img/Games/41.jpg";
import pic42 from "../img/Games/42.jpg";
import pic43 from "../img/Games/43.jpg";
import pic44 from "../img/Games/44.jpg";
import pic45 from "../img/Games/45.jpg";
import pic46 from "../img/Games/46.jpg";
import pic47 from "../img/Games/47.jpg";
import pic48 from "../img/Games/48.jpg";
import pic49 from "../img/Games/49.jpg";
import pic50 from "../img/Games/50.png";
import pic51 from "../img/Games/51.jpg";
import pic52 from "../img/Games/52.jpg";
import pic53 from "../img/Games/53.jpg";
import pic54 from "../img/Games/54.jpg";
import pic55 from "../img/Games/55.jpg";
import pic56 from "../img/Games/56.png";
import pic57 from "../img/Games/57.jpg";
import pic58 from "../img/Games/58.jpg";
import pic59 from "../img/Games/59.png";
import pic60 from "../img/Games/60.png";
import t1 from "../img/Games/t01.jpg";

let tab = 1;
function switchTab(num) {
    if (num !== tab) {
        if (tab === 1) {
            tab = 2;
            document.getElementById("head1").className =
                "text-lg cursor-pointer p-2 inline text-gray-500 hover:text-gray-400 transition ease-in-out";
            document.getElementById("head2").className =
                "text-lg cursor-pointer p-2 inline";
            document.getElementById("tab1").className = "hidden";
            document.getElementById("tab2").className = "";
            document.getElementById("tab-bar").className =
                "w-1/2 transition-all duration-300 ease-in-out";
        } else {
            tab = 1;
            document.getElementById("head1").className =
                "text-lg cursor-pointer p-2 inline";
            document.getElementById("head2").className =
                "text-lg cursor-pointer p-2 inline text-gray-500 hover:text-gray-400 transition ease-in-out";
            document.getElementById("tab1").className = "";
            document.getElementById("tab2").className = "hidden";
            document.getElementById("tab-bar").className =
                "w-0 transition-all duration-300 ease-in-out";
        }
    }
}

function Games() {
    DocTitle("เกม PS5 | เกมสุดพิเศษใน PlayStation 5 | PlayStation");
    return (
        <div>
            <div className="relative">
                <img src={pic1} width="100%" alt="spidy" />
                <div className="absolute items-center top-0 w-full h-full grid grid-cols-2">
                    <div className="grid justify-items-center">
                        <div className="p-44">
                            <img src={pic2} className="w-4/5" alt="PS5" />
                            <h1 className="text-6xl text-white mt-8 text-left">
                                เกมที่คุณปรารถนา
                            </h1>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>

            <div
                className="w-full py-12 px-32"
                style={{ backgroundColor: "#eeeeee" }}>
                <div className="px-80">
                    <VidPlayer pic={t1} />
                    <h2
                        className="text-4xl py-12"
                        style={{ color: "rgb(0,114,206)" }}>
                        เกมสุดพิเศษจาก PlayStation Studios
                    </h2>
                </div>
            </div>

            <div
                className="w-full pb-12 px-44"
                style={{ backgroundColor: "#eeeeee" }}>
                <div className="grid grid-cols-2">
                    <img src={pic3} alt="spiderman" />
                    <div className="p-8 pt-4 text-left">
                        <h2 className="text-4xl">
                            Marvel's Spider-Man: Miles Morales
                        </h2>
                        <p className="text-lg my-8">
                            สัมผัสความสนุกกับการมาของ “ไมลส์ โมราเลส”
                            ในฐานะมาสเตอร์ผู้เก่งกาจคนใหม่พร้อมพลังอันน่าเหลือเชื่อจากการเป็นสไปเดอร์แมน
                        </p>
                        <BtnBlue txt="เรียนรู้เพิ่มเติม(EN ver.)" />
                    </div>
                </div>
            </div>

            <div className="w-full relative">
                <img src={pic4} alt="forbidden west" />
                <div className="absolute items-center top-0 w-full h-full grid grid-cols-2 px-44">
                    <img src={pic5} alt="aloy" />
                    <div className="text-left self-start p-8">
                        <h2 className="text-4xl text-white mt-8 text-left">
                            Horizon Forbidden West
                        </h2>
                        <p className="text-lg text-white my-8">
                            ผจญภัยไปกับ “เอลอย”
                            ที่ต้องฝ่าฟันในดินแดนที่ถูกขนานนามว่า “Forbidden
                            West” ผ่านพรหมแดนที่ยิ่งใหญ่
                            และสุดแสนอันตรายเต็มไปด้วยภัยซ้อนเร้นที่เธอไม่เคยพบเจอมาก่อน
                        </p>
                        <BtnWhite txt="เรียนรู้เพิ่มเติม(EN ver.)" />
                    </div>
                </div>
            </div>

            <div
                className="w-full py-12 px-44"
                style={{ backgroundColor: "#eeeeee" }}>
                <div className="grid grid-cols-2">
                    <img src={pic6} alt="ratchet&clank" />
                    <div className="p-8 pt-4 text-left">
                        <h2 className="text-4xl">
                            Ratchet & Clank: Rift Apart
                        </h2>
                        <p className="text-lg my-8">
                            บุกตะลุย และออกผจญภัยแบบ 3 มิติ ไปกับคู่หูคู่จักรวาล
                            “แรทเช็ท” และ “แคลงค์”
                        </p>
                        <BtnBlue txt="เรียนรู้เพิ่มเติม(EN ver.)" />
                    </div>
                </div>
            </div>

            <div className="w-full relative">
                <img src={pic7} alt="forbidden west" />
                <div className="absolute items-center top-0 w-full h-full grid grid-cols-2 px-44">
                    <img src={pic8} alt="aloy" />
                    <div className="text-left self-start p-8">
                        <h2 className="text-4xl text-white mt-8 text-left">
                            Gran TurismoTM 7
                        </h2>
                        <p className="text-lg text-white my-8">
                            จากประสบการณ์มากกว่า 22 ปี ทำให้เกม Gran Turismo 7
                            พร้อมนำเสนอประสบการณ์ที่ดีที่สุดในประวัติศาตร์ของซีรีส์เกมแข่งรถ
                        </p>
                        <BtnWhite txt="เรียนรู้เพิ่มเติม(EN ver.)" />
                    </div>
                </div>
            </div>

            <div className="w-full pt-12 px-44">
                <div className="grid grid-cols-2">
                    <div className="text-left pr-4 pb-20">
                        <img src={pic9} alt="returnal" />
                        <h2 className="text-4xl mt-12">Returnal</h2>
                        <p className="text-lg my-6">
                            ทำลายวงโคจรแห่งความโกลาหลบนดวงดาวเอเลี่ยนสุดประหลาดสภาพแวดล้อมเปลี่ยนแปลงอยู่ตลอดเวลา
                            กับเกมชูตเตอร์แบบลอบเร้นผ่านมุมมองบุคคลที่สาม
                        </p>
                        <BtnBlue txt="เรียนรู้เพิ่มเติม(EN ver.)" />
                    </div>
                    <div className="text-left pl-4 pb-20">
                        <img src={pic10} alt="sackboy" />
                        <h2 className="text-4xl mt-12">
                            Sackboy: A Big Adventure
                        </h2>
                        <p className="text-lg my-6">
                            สนุกไปกับ “แซ็คบอย” ในมหากาพย์การผจญภัยแบบแพลตฟอร์ม
                            3 มิติร่วมไปกับเพื่อนๆ ของคุณ
                        </p>
                        <BtnBlue txt="เรียนรู้เพิ่มเติม(EN ver.)" />
                    </div>
                    <div className="text-left pr-4 pb-20">
                        <img src={pic11} alt="returnal" />
                        <h2 className="text-4xl mt-12">Demon's Souls</h2>
                        <p className="text-lg my-6">
                            เกมรีเมคที่ถูกสร้างขึ้นมาใหม่ทั้งหมด
                            เชื้อเชิญคุณมาสัมผัสกับประสบการณ์การต่อสู้ที่โหดเหี้ยม
                            และเรื่องราวที่เต็มไปด้วยปริศนาในเกม Demon’s Souls
                        </p>
                        <BtnBlue txt="เรียนรู้เพิ่มเติม(EN ver.)" />
                    </div>
                    <div className="text-left pl-4 pb-20">
                        <img src={pic12} alt="returnal" />
                        <h2 className="text-4xl mt-12">Destruction AllStars</h2>
                        <p className="text-lg my-6">
                            ขับรถฝ่าฟันผ่านซากปรักหักพังหรือเดินเท้าลุยเข้าไปในปรากฏการณ์ระดับโลกของ
                            Destruction AllStars
                        </p>
                        <BtnBlue txt="เรียนรู้เพิ่มเติม(EN ver.)" />
                    </div>
                </div>
            </div>

            <div className="w-full relative">
                <img
                    src={pic13}
                    style={{ height: "44rem" }}
                    className="object-cover object-top w-full"
                    alt="hogwarts:bg"
                />
                <div
                    className="absolute items-center top-0 w-full h-full px-44 py-16"
                    style={{
                        background:
                            "linear-gradient(to right,  rgba(255,255,255,0.5), rgba(255,255,255,1))",
                    }}>
                    <h2
                        className="text-5xl"
                        style={{ color: "rgb(0, 114, 206)" }}>
                        เกมอันน่าทึ่ง
                    </h2>
                    <div className="grid grid-cols-2 mt-16 p-4">
                        <img src={pic14} className="p-2" alt="fifa21" />
                        <div className="text-left self-start p-8 pt-0">
                            <h2 className="text-4xl mt-4 text-left">
                                EA SPORTS FIFA 21
                            </h2>
                            <p className="text-lg mt-8">
                                สัมผัสได้อีกระดับใน FIFA 21 บน PlayStation 5
                                ด้วยเทคโนโลยีใหม่อย่างการโหลดที่รวดเร็ว
                                การเคลื่อนไหวที่สมจริงเหมือนมีชีวิต
                                และระบบสัมผัสตอบสนองบนคอนโทรลเลอร์ที่จะยกระดับจากการเป็นผู้ชมไปเป็นเสมือนผู้เล่นในสนามเกมลูกหนังจริงๆ
                            </p>
                            <p className="text-lg mb-8 mt-4">
                                <b>วันเปิดตัว</b>: วางจำหน่ายแล้ว
                            </p>
                            <BtnBlue txt="เรียนรู้เพิ่มเติม" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full py-12 px-36">
                <div className="grid grid-cols-2">
                    <div className="p-8 pt-4 text-left">
                        <h2 className="text-4xl">NBA 2K21</h2>
                        <p className="text-lg my-8">
                            NBA 2K21 บน PlayStation 5
                            สร้างขึ้นใหม่ทั้งหมดเพื่อให้สมกับยุคสมัยใหม่แห่งการเล่นเกม
                            เกมรุ่นล่าสุดของชุดเกม NBA 2K
                            ที่โด่งดังระดับโลกและขายดีที่สุดนี้จะมอบประสบการณ์วิดีโอเกมกีฬาระดับผู้นำวงการ
                        </p>
                        <p className="text-lg my-8">
                            <b>วันเปิดตัว</b>: วางจำหน่ายแล้ว
                        </p>
                        <BtnBlue txt="เรียนรู้เพิ่มเติม" />
                    </div>
                    <img src={pic15} className="p-2" alt="nba2k21" />
                </div>
            </div>

            <div className="w-full relative">
                <img
                    src={pic16}
                    style={{ height: "36rem" }}
                    className="object-cover w-full"
                    alt="cod:bg"
                />
                <div
                    className="absolute items-center top-0 w-full h-full grid grid-cols-2 px-44"
                    style={{
                        background:
                            "linear-gradient(to left,  rgba(30,30,30,0.4), rgba(30,30,30,1))",
                    }}>
                    <img src={pic17} className="p-2" alt="cod:cold wars" />
                    <div className="text-left self-start p-8 py-12">
                        <h2 className="text-4xl text-white mt-8 text-left">
                            Call of Duty®: Black Ops Cold War
                        </h2>
                        <p className="text-lg text-white my-8">
                            ภาคต่อโดยตรงของ Black Ops ต้นฉบับ
                            เข้าร่วมแผนการระดับโลกในการตามรอยบุรุษลึกลับที่ชื่อว่า
                            Perseus
                            ที่กำลังปฏิบัติภารกิจเพื่อทำลายดุลอำนาจของโลก
                            ยินดีต้อนรับเข้าสู่สมรภูมิ ยินดีต้อนรับเข้าสู่
                            Duty®: Black Ops Cold War
                        </p>
                        <p className="text-lg text-white my-8">
                            <b>วันเปิดตัว</b>: วางจำหน่ายแล้ว
                        </p>
                        <BtnWhite txt="เรียนรู้เพิ่มเติม(EN ver.)" />
                    </div>
                </div>
            </div>

            <div className="w-full py-12 px-36">
                <div className="grid grid-cols-2">
                    <div className="p-8 pt-4 text-left">
                        <h2 className="text-4xl">
                            Grand Theft Auto V & Grand Theft Auto Online
                        </h2>
                        <p className="text-lg my-8">
                            Grand Theft Auto V เกมแอคชั่นแนว Open World
                            ที่มีชื่อเสียงของ Rockstar Games และ GTA Online
                            เซิร์ฟเวอร์ออนไลน์สำหรับผู้เล่นหลายคนที่พัฒนาอยู่ตลอดเวลากำลังขยายและปรับปรุงประสิทธิภาพสำหรับ
                            PlayStation 5
                        </p>
                        <p className="text-lg my-8">
                            <b>วันเปิดตัว</b>: 2021
                        </p>
                        <BtnBlue txt="เรียนรู้เพิ่มเติม" />
                    </div>
                    <img src={pic18} className="p-2" alt="gta v" />
                </div>
            </div>

            <div className="w-full relative">
                <img
                    src={pic19}
                    style={{ height: "36rem" }}
                    className="object-cover object-bottom w-full"
                    alt="rs village:bg"
                />
                <div
                    className="absolute items-center top-0 w-full h-full grid grid-cols-2 px-44"
                    style={{
                        background:
                            "linear-gradient(to left, rgba(20,20,20,0.3), rgba(25,39,52,1))",
                    }}>
                    <img src={pic20} className="p-2" alt="rs village" />
                    <div className="text-left self-start p-8 py-12">
                        <h2 className="text-4xl text-white mt-8 text-left">
                            Resident Evil Village
                        </h2>
                        <p className="text-lg text-white my-8">
                            สัมผัสประสบการณ์เกมแนวเอาตัวรอดท่ามกลางความน่าหวาดกลัวที่ไม่เคยพบมาก่อนใน
                            Resident Evil Village ซึ่งใช้ขุมพลังของ PlayStation
                            5
                            มายกระดับการต่อสู้อันสิ้นหวังเพื่อเอาชีวิตรอดด้วยการแสดงภาพกราฟิกที่สมจริงและน่าสะพรึงกลัวที่สุดที่เคยมีมา
                        </p>
                        <p className="text-lg text-white my-8">
                            <b>วันเปิดตัว</b>: วางจำหน่ายแล้ว<sup>1</sup>
                        </p>
                        <BtnWhite txt="เรียนรู้เพิ่มเติม(EN ver.)" />
                    </div>
                </div>
            </div>

            <div className="w-full py-12 px-36">
                <div className="grid grid-cols-2">
                    <div className="p-8 pt-4 text-left">
                        <h2 className="text-4xl">Marvel's Avengers</h2>
                        <p className="text-lg my-8">
                            Marvel’s Avengers
                            เป็นมหากาพย์เกมผจญภัยแนวแอคชั่นในมุมมองบุคคลที่สามที่ผสานเรื่องราวของภาพยนตร์ต้นฉบับเข้ากับการเล่นเกมแบบที่มีผู้เล่นคนเดียวและแบบที่ต้องร่วมมือกัน
                        </p>
                        <p className="text-lg my-8">
                            <b>วันเปิดตัว</b>: วางจำหน่ายแล้ว
                        </p>
                        <BtnBlue txt="เรียนรู้เพิ่มเติม" />
                    </div>
                    <img src={pic21} className="p-2" alt="marvel's avenger" />
                </div>
            </div>

            <div className="w-full relative">
                <img
                    src={pic22}
                    style={{ height: "36rem" }}
                    className="object-cover w-full"
                    alt="hogwarts:bg"
                />
                <div
                    className="absolute items-center top-0 w-full h-full grid grid-cols-2 px-44"
                    style={{
                        background:
                            "linear-gradient(to left,  rgba(30,30,30,0.4), rgba(30,30,30,1))",
                    }}>
                    <img src={pic23} className="p-2" alt="hogwarts" />
                    <div className="text-left self-start p-8 py-12">
                        <h2 className="text-4xl text-white mt-8 text-left">
                            Hogwarts Legacy
                        </h2>
                        <p className="text-lg text-white my-8">
                            สนุกไปกับ Hogwarts Legacy เกมแอคชั่น RPG
                            แบบโอเพนเวิลด์ที่เปิดตัวครั้งแรกในโลกหนังสือ Harry
                            Potter
                            พร้อมรวมเป็นหนึ่งไปกับการผจญภัยที่คุณควบคุมเองได้ในโลกแห่งเวทมนตร์นี้
                        </p>
                        <p className="text-lg text-white my-8">
                            <b>วันเปิดตัว</b>: 2022
                        </p>
                    </div>
                </div>
            </div>

            <div
                className="py-16 px-24 overflow-x-hidden"
                style={{ backgroundColor: "#eeeeee" }}>
                <h2 className="text-5xl" style={{ color: "rgb(0,114,206)" }}>
                    เกมสุดพิเศษของคอนโซล PlayStation จากพันธมิตรของเรา *
                </h2>
                <p className="text-2xl text-gray-500 mt-8">
                    ใช้แท็บในการสำรวจเกมสุดพิเศษมากมายของคอนโซล PlayStation 5
                    และคอนโซล PlayStation
                </p>
                <p className="text-xs text-right text-gray-500 mt-4">
                    *ไม่รองรับคอนโซลอื่นๆ ในช่วงเวลานี้ รองรับการเล่นบน PC
                    อีกด้วย
                </p>
                <div
                    id="tab-head"
                    className="mt-28 mx-auto"
                    style={{ width: "35%" }}>
                    <div
                        className="grid grid-cols-2 justify-items-stretch"
                        style={{ borderBottom: "solid 0.25rem #dedede" }}>
                        <div
                            id="head1"
                            onClick={() => {
                                switchTab(1);
                            }}
                            className="text-lg cursor-pointer p-2 inline"
                            style={{ transition: "all 0.4s" }}>
                            เกมพิเศษสำหรับคอนโซล PS5
                        </div>
                        <div
                            id="head2"
                            onClick={() => {
                                switchTab(2);
                            }}
                            className="text-lg cursor-pointer p-2 inline text-gray-500 hover:text-gray-400 transition ease-in-out"
                            style={{ transition: "all 0.4s" }}>
                            เกมพิเศษสำหรับคอนโซล PlayStation
                        </div>
                    </div>
                    <div className="flex transform -translate-y-1">
                        <div
                            id="tab-bar"
                            className="w-0 ease-in-out"
                            style={{ transition: "all 0.4s" }}></div>
                        <div
                            className="h-1 w-1/2"
                            style={{ backgroundColor: "#0072ce" }}></div>
                    </div>
                </div>
                <div id="tba-body" className="px-44 pt-12">
                    <div id="tab1" className="">
                        <div className="grid grid-cols-2">
                            <CardGameV2
                                title="Godfall"
                                pic={pic24}
                                alt="godfall"
                                open="วางจำหน่ายแล้ว"
                                btn="เรียนรู้เพิ่มเติม"
                                color="gray-500">
                                ช่วยเหลือ Aperion คุณคืออัศวิน Valorian
                                คนสุดท้ายและเป็นนักรบผู้เก่งกาจที่มีเกราะในตำนานที่เรียกกันว่า
                                Valorplates ครองอำนาจใน Godfall
                                เกมต่อสู้ฟาดฟันระยะประชิดแนวแอคชั่น RPG เกมแรก
                            </CardGameV2>
                            <CardGameV2
                                title="Deathloop"
                                pic={pic25}
                                alt="deathloop"
                                open="14 กันยายน 2021"
                                btn="เรียนรู้เพิ่มเติม"
                                color="gray-500">
                                Deathloop
                                คือเกมยิงปืนมุมมองบุคคลที่หนึ่งที่จะมาสร้างมาตรฐานใหม่
                                ซึ่ง Arkane Lyon พัฒนามาสำหรับ PlayStation 5
                                โดยเฉพาะ
                            </CardGameV2>
                        </div>
                        <div className="grid grid-cols-3">
                            <CardGameV2
                                title="Ghostwire: Tokyo"
                                pic={pic26}
                                alt="ghostwire"
                                open="2021"
                                btn="เรียนรู้เพิ่มเติม"
                                color="gray-500">
                                Ghostwire: Tokyo
                                เป็นเกมผจญภัยแนวแอคชั่นอันน่าทึ่งจาก Shinji
                                Mikami และ Tango Gameworks ที่ออกแบบมาสำหรับระบบ
                                PlayStation 5 (PS5) โดยเฉพาะ{" "}
                            </CardGameV2>
                            <CardGameV2
                                title="Project Athia"
                                pic={pic27}
                                alt="atia"
                                open="TBC"
                                color="gray-500">
                                Project Athia (ชื่อชั่วคราว) คือสุดยอดผลงานของ
                                Luminous Productions
                                ในการสร้างประสบการณ์เกมที่ใหม่หมดจดโดยหลอมรวมเทคโนโลยีล่าสุดและศิลปะเข้าด้วยกัน
                            </CardGameV2>
                            <CardGameV2
                                title="Final Fantasy XVI"
                                pic={pic28}
                                alt="ff16"
                                open="TBC"
                                color="gray-500">
                                <p className="text-lg">
                                    ชื่อเนื้อเรื่องใหม่ทั้งหมดในซีรีส์ FINAL
                                    FANTASY ในตำนาน FINAL FANTASY XVI
                                    กำลังมาในรูปแบบแอคชั่น RPG
                                    สำหรับผู้เล่นคนเดียว
                                </p>
                                <p className="text-lg mt-4">
                                    “มรดกแห่งคริสตัลได้หล่อหลอมประวัติศาสตร์ของเรามานานพอแล้ว”
                                </p>
                            </CardGameV2>
                        </div>
                    </div>
                    <div id="tab2" className="hidden">
                        <div className="grid grid-cols-4">
                            <CardGameV2
                                title="The Pathless"
                                pic={pic29}
                                alt="pathless"
                                open="วางจำหน่ายแล้ว"
                                btn="เรียนรู้เพิ่มเติม"
                                mb="0">
                                จากผู้สร้าง ABZÛ เกม The Pathless
                                คือเรื่องราวการผจญภัยของนักธนูและนกอินทรีในป่าที่กว้างใหญ่
                            </CardGameV2>
                            <CardGameV2
                                title="Heavenly Bodies"
                                pic={pic30}
                                alt="heavenly bodies"
                                open="TBC"
                                mb="0">
                                สวมบทบาทมนุษย์อวกาศผู้กล้าหาญและเป็นหน้าที่ของคุณเพียงผู้เดียวที่จะรักษาความเป็นเจ้าแห่งวิศวกรรมอวกาศล่าสุดและน่าภาคภูมิใจที่สุดของโลก
                            </CardGameV2>
                            <CardGameV2
                                title="Nour: Play With Your Food"
                                pic={pic31}
                                alt="nour"
                                open="TBC"
                                btn="เรียนรู้เพิ่มเติม"
                                mb="0">
                                Nour: Play With Your Food
                                เป็นเกมแบบอินเทอร์แอคทีฟที่จะพาไปสำรวจความงดงามของอาหารและเครื่องดื่ม
                                คุณจะเล่นกับอาหารอย่างไรก็ได้ตามใจ
                            </CardGameV2>
                            <CardGameV2
                                title="Temtem"
                                pic={pic32}
                                alt="temtem"
                                open="วางจำหน่ายแล้ว"
                                btn="เรียนรู้เพิ่มเติม"
                                mb="0">
                                ดื่มด่ำไปกับเกมออนไลน์แบบหลายผู้เล่นที่ให้คุณสวมบทบาทและสะสมสัตว์ประหลาด
                                สำรวจเกาะทั้งหกของหมู่เกาะ Airborne Archipelago
                                เสาะหาและสะสม Temtem สายพันธุ์ใหม่
                            </CardGameV2>
                            <CardGameV2
                                title="Five Nights at Freddy's: Security Breach"
                                pic={pic33}
                                alt="fnf:sb"
                                open="TBC"
                                mb="0">
                                Five Nights at Freddy’s: Security Breach
                                นำจิตวิญญาณของความอินดี้และผสมผสานกับเทคโนโลยีเกมมิ่งล้ำสมัย
                                นำแฟรนไชส์นี้ไปสู่อีกระดับหนึ่งด้วย PlayStation
                                5.
                            </CardGameV2>
                            <CardGameV2
                                title="Guilty Gear -Strive-"
                                pic={pic34}
                                alt="gg: strive"
                                open="วางจำหน่ายแล้ว"
                                btn="เรียนรู้เพิ่มเติม"
                                mb="0">
                                ภาคล่าสุดของซีรีส์ Guilty Gear สุดตระการตา
                                Guilty Gear -Strive-!
                            </CardGameV2>
                            <CardGameV2
                                title="Oddworld Soulstorm"
                                pic={pic35}
                                alt="oddworld"
                                open="วางจำหน่ายแล้ว"
                                btn="เรียนรู้เพิ่มเติม"
                                mb="0">
                                จากทาสผู้ไม่รู้เรื่องราวที่กำลังจะถูกเครื่องจักรขนาดใหญ่ขบเคี้ยว
                                Abe
                                ได้กลายเป็นฮีโร่ผู้ลุกขึ้นมาเป็นสัญญาณแห่งความหวังอย่างไม่น่าเชื่อ
                            </CardGameV2>
                            <CardGameV2
                                title="Jett: The Far Shore"
                                pic={pic36}
                                alt="jett"
                                open="TBC"
                                btn="เรียนรู้เพิ่มเติม"
                                mb="0">
                                Jett: The Far Shore
                                เชื้อเชิญคุณมาร่วมออกเดินทางระหว่างดวงดาวเพื่อสร้างอนาคตให้กับผู้คนที่หลอนจากการถูกหลงลืมในเกมผจญภัยแนวแอคชั่นคุณภาพระดับภาพยนตร์นี้
                            </CardGameV2>
                            <CardGameV2
                                title="Bugsnax"
                                pic={pic37}
                                alt="bugsnax"
                                open="วางจำหน่ายแล้ว"
                                btn="เรียนรู้เพิ่มเติม"
                                mb="0">
                                Bugsnax ขอพาคุณไปผจญภัยสุดแปลกตาสู่เกาะ
                                Snaktooth ซึ่งเป็นที่อยู่ของเหล่า Bugsnax
                                สิ่งมีชีวิตครึ่งแมลงครึ่งอาหารว่างในตำนาน
                            </CardGameV2>
                            <CardGameV2
                                title="Stray"
                                pic={pic38}
                                alt="stray"
                                open="TBC"
                                btn="เรียนรู้เพิ่มเติม"
                                mb="0">
                                หลงทาง โดดเดี่ยว และพลัดพรากจากครอบครัว
                                เจ้าแมวต้องคลายปมปริศนาโบราณเพื่อหลบหนีจากเมืองที่ถูกหลงลืมไปนาน
                            </CardGameV2>
                            <CardGameV2
                                title="Kena: Bridge of Spirits"
                                pic={pic39}
                                alt="kena"
                                open="21 กันยายน 2021"
                                btn="เรียนรู้เพิ่มเติม"
                                mb="0">
                                เกมผจญภัยแนวแอคชั่นพร้อมระบบเหล่าผองเพื่อนที่ไม่เหมือนใคร
                                ค้นหาและเก็บ Rot มาเป็นพวกเพื่อรับพลังพิเศษ
                                ค้นพบสิ่งใหม่ๆ และดัดแปลงสภาพแวดล้อม
                            </CardGameV2>
                            <CardGameV2
                                title="Goodbye Volcano High"
                                pic={pic40}
                                alt="volcanp high"
                                open="TBC"
                                btn="เรียนรู้เพิ่มเติม"
                                mb="0">
                                <i>Goodbye Volcano High</i>{" "}
                                เป็นเรื่องราวการผจญภัยเกี่ยวกับการสิ้นสุดของยุคสมัย...
                                และจุดเริ่มต้นของเรื่องราวความรัก
                            </CardGameV2>
                            <CardGameV2
                                title="Tribes of Midgard"
                                pic={pic41}
                                alt="midgard"
                                open="27 กรกฎาคม 2021"
                                btn="เรียนรู้เพิ่มเติม"
                                mb="0">
                                สำรวจ ต่อสู้ สร้างเครื่องมืออุปกรณ์
                                และขึ้นเป็นเจ้าแห่ง Viking
                                พร้อมต้านทานการบุกรุกของเหล่า Giant ใน Ragnarök
                                ที่กำลังจะมาถึง
                            </CardGameV2>
                            <CardGameV2
                                title="Little Devil Inside"
                                pic={pic42}
                                alt="ldi"
                                open="2021"
                                mb="0">
                                Little Devil Inside คือเกม RPG
                                แนวผจญภัยแอคชั่นที่มีองค์ประกอบการเอาตัวรอดอยู่ในโลกกึ่งเปิดบรรยากาศ
                            </CardGameV2>
                            <CardGameV2
                                title="Solar Ash"
                                pic={pic43}
                                alt="solar ash"
                                open="TBC"
                                btn="เรียนรู้เพิ่มเติม"
                                mb="0"></CardGameV2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 px-40">
                <h2
                    className="text-5xl mb-20"
                    style={{ color: "rgb(0,114,206)" }}>
                    เกม PS5 เจ๋งๆ อีกเพียบ
                </h2>
                <div className="grid grid-cols-4">
                    <CardGame
                        title="Assassin's Creed Valhalla"
                        pic={pic44}
                        alt="ac:valhalla"
                        open="วางจำหน่ายแล้ว"
                        btn="เรียนรู้เพิ่มเติม">
                        ขึ้นมาเป็นนักรบ Viking ระดับตำนาน บุกโจมตีศัตรู
                        ขยายถิ่นฐาน สร้างอำนาจทางการเมืองเพื่อเพื่อแสวงหาชัยชนะ
                    </CardGame>
                    <CardGame
                        title="Watch Dogs Legion"
                        pic={pic45}
                        alt="watch dog:region"
                        open="วางจำหน่ายแล้ว"
                        btn="เรียนรู้เพิ่มเติม">
                        สร้างกองกำลังต่อต้านจากใครก็ตามที่คุณเห็นในขณะที่คุณแฮก
                        แทรกซึม
                        และต่อสู้เพื่อชิงกรุงลอนดอนในอนาคตอันใกล้ที่กำลังจะล่มสลายให้กลับคืนมาดังเดิม
                    </CardGame>
                    <CardGame
                        title="Far Cry 6"
                        pic={pic46}
                        alt="farcry6"
                        open="7 ตุลาคม 2021"
                        btn="เรียนรู้เพิ่มเติม">
                        ยินดีต้อนรับสู่ Yara เกาะที่เวลาถูกแช่แข็งหยุดนิ่ง
                        คุณจะต้องต่อสู้กับผู้นำเผด็จการ Antón Castillo และ Diego
                        ลูกชายของเขาในฐานะกองโจรจากยุคสมัยใหม่
                    </CardGame>
                    <CardGame
                        title="Hitman 3"
                        pic={pic47}
                        alt="hitman 3"
                        open="วางจำหน่ายแล้ว"
                        btn="เรียนรู้เพิ่มเติม">
                        Agent 47
                        กลับมาในฐานะมืออาชีพผู้เหี้ยมโหดเพื่อสัญญาที่สำคัญที่สุดในอาชีพการงานของเขา
                    </CardGame>
                    <CardGame
                        title="Pragmata"
                        pic={pic48}
                        alt="pragmata"
                        open="2022"
                        btn="เรียนรู้เพิ่มเติม">
                        Pragmata
                        จะพาคุณไปสัมผัสการผจญภัยที่คุณจะไม่มีวันลืมในโลกดิสโทเปียในอนาคตอันใกล้บนดวงจันทร์
                    </CardGame>
                    <CardGame
                        title="Fortnite"
                        pic={pic49}
                        alt="fornite"
                        open="วางจำหน่ายแล้ว"
                        btn="เรียนรู้เพิ่มเติม">
                        Fortnite เตรียมเปิดตัวบน PS5 นี่คือเกม Fortnite
                        ที่คุณชื่นชอบและรู้จักดี พร้อมใช้ประโยชน์จากขุมพลัง PS5
                        เต็มพิกัด
                    </CardGame>
                    <CardGame
                        title="Madden NFL 21"
                        pic={pic50}
                        alt="madden"
                        open="วางจำหน่ายแล้ว"
                        btn="เรียนรู้เพิ่มเติม">
                        ผู้เล่นรุ่นใหม่กำลังฝากผลงานไว้ใน NFL
                        คุณจะทำได้ดีหรือเปล่า พลิกเกม
                        และกำหนดเส้นทางสู่ชัยชนะของคุณเอง
                    </CardGame>
                    <CardGame
                        title="DIRT 5"
                        pic={pic51}
                        alt="dirt 5"
                        open="TBC">
                        DIRT 5
                        เป็นเกมสุดหินของเกมภาคต่อของเกมแข่งรถออฟโรดระดับตำนานของ
                        Codemasters
                    </CardGame>
                    <CardGame
                        title="Outriders"
                        pic={pic52}
                        alt="outriders"
                        open="วางจำหน่ายแล้ว"
                        btn="เรียนรู้เพิ่มเติม">
                        Outriders เป็นเกมยิงปืนกึ่ง RPG สำหรับผู้เล่น 1-3 คน
                        ร่วมกันฝ่าฟันท่ามกลางจักรวาลไซไฟที่แสนสิ้นหวังและมืดมิดตามแบบฉบับเดิม
                    </CardGame>
                    <CardGame
                        title="Scarlet Nexus"
                        pic={pic53}
                        alt="scarlet nexus"
                        open="วางจำหน่ายแล้ว"
                        btn="เรียนรู้เพิ่มเติม">
                        ในอนาคตอันไกลโพ้น ฮอร์โมน Psionic
                        ได้ถูกค้นพบในสมองมนุษย์
                        ทำให้ผู้คนมีพลังพิเศษทางประสาทสัมผัสและเปลี่ยนแปลงโลกที่เราเคยรู้จักไป
                    </CardGame>
                    <CardGame
                        title="Balan Wonderworld"
                        pic={pic54}
                        alt="balan"
                        open="วางจำหน่ายแล้ว"
                        btn="เรียนรู้เพิ่มเติม">
                        Balan Wonderworld
                        เป็นเกมแอคชั่นแพลตฟอร์มอันน่าอัศจรรย์ที่มีธีมเรื่องเกี่ยวกับ
                        Balan Theatre
                    </CardGame>
                    <CardGame
                        title="Immortals Fenyx Rising"
                        pic={pic55}
                        alt="fenyx rising"
                        open="วางจำหน่ายแล้ว"
                        btn="เรียนรู้เพิ่มเติม">
                        Immortals Fenyx Rising™
                        ปลุกการผจญภัยในตำนานที่ยิ่งใหญ่ให้กลับมามีชีวิตอีกครั้ง
                        เล่นเป็น Fenyx
                        ครึ่งคนครึ่งเทพหน้าใหม่ผู้ต้องสยายปีกออกไปช่วยชีวิตเทพกรีกทั้งหลาย
                    </CardGame>
                    <CardGame
                        title="Tom Clancy's Rainbow Six Siege"
                        pic={pic56}
                        alt="rs6"
                        open="วางจำหน่ายแล้ว"
                        btn="เรียนรู้เพิ่มเติม">
                        Rainbow Six Siege
                        เป็นประสบการณ์เกมยิงปืนแบบมุมมองบุคคลที่หนึ่งสุดเข้มข้นและอัดแน่นไปด้วยกลยุทธ์ที่ดียิ่งขึ้นบน
                        PS5
                    </CardGame>
                    <CardGame
                        title="Devil May Cry 5: Special Edition"
                        pic={pic57}
                        alt="dmc5"
                        open="วางจำหน่ายแล้ว"
                        btn="เรียนรู้เพิ่มเติม">
                        DMC
                        กลับมาอีกครั้งในแบบที่ดีกว่าที่เคยในตัวเกมสุดมีสไตล์และแอคชั่นเต็มพิกัดของซีรีส์:
                        Devil May Cry 5 Special Edition!
                    </CardGame>
                </div>
            </div>

            <div className="grid grid-cols-2 p-16 px-40">
                <img src={pic58} alt="ps5 and ps4" />
                <div className="text-left p-4">
                    <h2 className="text-5xl">
                        ความเข้ากันได้ของไดรฟ์ USB ภายนอก
                    </h2>
                    <p className="text-lg my-6">
                        คอนโซล PS5 สามารถจัดเก็บเกม PS4 และเกม PS5
                        ที่เข้ากันได้บนไดรฟ์ USB ที่รองรับ SuperSpeed USB*
                        ซึ่งหมายความว่าคุณสามารถประหยัดพื้นที่บน SSD
                        ภายในความเร็วสูงพิเศษไปได้
                        อีกทั้งยังประหยัดเวลาด้วยการติดตั้งเกม PS5 ใหม่จากไดรฟ์
                        USB ภายนอก แทนที่จะต้องดาวน์โหลดใหม่หรือติดตั้งจากแผ่น
                    </p>
                    <p className="text-lg mb-6">
                        เมื่อคุณพร้อมจะเล่นเกม PS5 ที่อยู่บนไดรฟ์ USB ภายนอก
                        ก็เพียงย้ายเกมกลับมายัง SSD
                        ภายในผ่านเมนูตัวเลือกในห้องสมุด คุณสามารถเล่นเกม PS4
                        ได้โดยตรงจากไดรฟ์ USB ภายนอกหรือจาก SSD ภายใน
                    </p>
                    <p className="text-sm">*ความจุสูงสุด 250 GB และ 8 TB</p>
                </div>
                <p className="text-sm text-left mt-8">
                    Seagate 2TB External Game Drive
                    พัฒนาขึ้นภายใต้โปรแกรมที่ได้รับอนุญาตอย่างเป็นทางการสำหรับ
                    PlayStation® และจะทำงานร่วมกับ PlayStation®5
                    ภายใต้การอนุมัติผลิตภัณฑ์ขั้นสุดท้ายของ Sony Interactive
                    Entertainment
                </p>
                <div></div>
            </div>

            <div className="grid grid-cols-2 p-16 px-40">
                <img src={pic59} alt="ps5 and ps4" />
                <div className="text-left p-4">
                    <h3 className="text-4xl mt-12">เล่นด้วยกันบน PS5™</h3>
                    <p className="text-lg my-6">
                        หาผู้เล่นคนที่สองและพบกับโลกของเกมผู้เล่นหลายคนในเครื่องเดียวกันสำหรับคอนโซล
                        PlayStation®5 ประกอบด้วยเกมกีฬา เกมแพลตฟอร์ม
                        และเกมยิงที่ดุเดือดที่ใช้ประโยชน์จากฟีเจอร์ด้านการสัมผัสของคอนโทรลเลอร์ไร้สาย
                        DualSense อย่างเต็มที่
                    </p>
                    <BtnBlue txt="พบกับเกม" />
                </div>
            </div>

            <div
                className="w-full text-left py-16 px-44"
                style={{ backgroundColor: "#eeeeee" }}>
                <div className="w-2/12">
                    <img src={pic60} width="75%" alt="marvel logo" />
                </div>
                <div className="my-8">
                    <p className="text-base leading-7">© 2020 Marvel</p>
                    <p className="text-base leading-7">
                        © 2020 Sony Interactive Entertainment LLC
                    </p>
                    <p className="text-base">
                        Developed by Insomniac Games, Inc
                    </p>
                </div>
                <div>
                    <p className="text-base leading-7">
                        © SQUARE ENIX CO., LTD. All Rights Reserved.
                    </p>
                </div>
                <div className="my-5">
                    <p className="text-base leading-7">
                        LOGO ILLUSTRATION: © 2020 YOSHITAKA AMANO
                    </p>
                    <p className="text-base leading-7">
                        FINAL FANTASY, SQUARE ENIX and their respective logos
                        are trademarks or registered trademarks of Square Enix
                        Holdings Co., Ltd.
                    </p>
                </div>
                <div>
                    <p className="text-base leading-8">
                        “PlayStation”, “PlayStation Family Mark", “PS5 logo”,
                        and "Play Has No Limits" are registered trademarks or
                        trademarks of Sony Interactive Entertainment Inc. “SONY”
                        is a registered trademark of Sony Corporation.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Games;
