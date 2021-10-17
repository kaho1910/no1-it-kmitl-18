import React from "react";
import DocTitle from "../components/etc/DocTitle";
import VidPlayer from "../components/etc/VidPlayer";
import BtnBlue from "../components/etc/BtnBlue";
import BtnWhite from "../components/etc/BtnWhite";
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
import pic55 from "../img/Games/55.jpg";
import pic56 from "../img/Games/56.png";
import pic57 from "../img/Games/57.png";
import t1 from "../img/Games/t01.jpg";

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

            <div className="w-full py-12 px-44">
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

            <div className="bg-red-500 h-96">FIFA21 Banner</div>

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
                    <img src={pic15} alt="nba2k21" />
                </div>
            </div>

            <div className="w-full relative bg-red-500 h-96">
                cod: cold war
                {/* <img src={pic16} alt="forbidden west" />
                <div className="absolute items-center top-0 w-full h-full grid grid-cols-2 px-44">
                    <img src={pic17} alt="cod:cold wars" />
                    <div className="text-left self-start p-8">
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
                </div> */}
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
                    <img src={pic18} alt="gta v" />
                </div>
            </div>

            <div className="w-full relative bg-red-500 h-96">
                rs village
                {/* <img src={pic19} alt="forbidden west" />
                <div className="absolute items-center top-0 w-full h-full grid grid-cols-2 px-44">
                    <img src={pic20} alt="cod:cold wars" />
                    <div className="text-left self-start p-8">
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
                </div> */}
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
                    <img src={pic21} alt="marvel's avenger" />
                </div>
            </div>

            <div className="w-full relative bg-red-500 h-96">
                hogwarts legacy
                {/* <img src={pic22} alt="forbidden west" />
                <div className="absolute items-center top-0 w-full h-full grid grid-cols-2 px-44">
                    <img src={pic23} alt="hogwarts" />
                    <div className="text-left self-start p-8">
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
                </div> */}
            </div>

            <div
                className="bg-green-500 h-96"
                // style={{ backgroundColor: "#eeeeee" }}
            >
                เกมสุดพิเศษของคอนโซล PlayStation
            </div>

            <div className="grid grid-cols-2 p-16 px-40">
                <img src={pic55} alt="ps5 and ps4" />
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
                <img src={pic56} alt="ps5 and ps4" />
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
                    <img src={pic57} width="75%" alt="marvel logo" />
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
