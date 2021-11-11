import React, { Component, useRef } from "react";
import Slider from "react-slick";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainBtnWhite from "../button/MainBtnWhite";
import img1 from "../../img/Main/Part13/01.jpg";
import img2 from "../../img/Main/Part13/02.jpg";
import img3 from "../../img/Main/Part13/03.jpg";
import img4 from "../../img/Main/Part13/04.jpg";
import img5 from "../../img/Main/Part13/05.jpg";
import img6 from "../../img/Main/Part13/06.jpg";
import img7 from "../../img/Main/Part13/07.jpg";
import img8 from "../../img/Main/Part13/08.jpg";
import img9 from "../../img/Main/Part13/09.jpg";
import img10 from "../../img/Main/Part13/10.jpg";
import bg from "../../img/Main/Part13/bg.png";
import ps4 from "../../img/Main/Part13/logo-ps4.svg";
import gameBoost from "../../img/Main/Part13/icon-game-boost.svg";
import vr from "../../img/Main/Part13/vr.png";

function Part13() {
    const settings = {
        className: "center",
        dots: true,
        //initialSlide: 5,
        centerMode: true,
        infinite: false,
        centerPadding: "50px",
        slidesToShow: 5,
        speed: 500,
    };
    return (
        <div className="w-full overflow-x-hidden relative">
            <img className="absolute bottom-0 right-0" src={bg} alt="bg" />
            <div
                style={{
                    height: "100vh",
                    backgroundImage: "linear-gradient(180deg,#0931b7,#082eaa)",
                }}>
                <Slider {...settings}>
                    <div className="box">
                        <img className="img-card" src={img1} alt="slick" />
                        <p className="title">Call of Duty: Vanguard</p>
                        <p className="cont">
                            นี่คือการต่อสู้ในสงครามโลกครั้งที่สองในระดับโลกที่ไม่เคยมีมาก่อน
                            ผงาดในทุกแนวรบในขณะที่คุณมีบทบาทสำคัญในการเปลี่ยนแปลงโฉมหน้าของประวัติศาสตร์
                        </p>
                        <div className="card-btn text-left mt-5 h-3">
                            <MainBtnWhite txt="เรียนรู้เพิ่มเติม" />
                        </div>
                    </div>
                    <div className="box">
                        <img className="img-card" src={img2} alt="slick" />
                        <p className="title">EA SPORTS FIFA 22</p>
                        <p className="cont">
                            เทคโนโลยี HyperMotion ใหม่ที่ปฏิวัติวงการใช้พลังของ
                            PlayStation 5 ในการยกระดับทุกช่วงเวลาในสนาม
                            เพื่อปลดล็อคการเล่นเกมที่สมจริงที่สุดในประวัติศาสตร์ของ
                            FIFA
                        </p>
                        <div className="card-btn text-left mt-5 h-3">
                            <MainBtnWhite txt="เรียนรู้เพิ่มเติม" />
                        </div>
                    </div>
                    <div className="box">
                        <img className="img-card" src={img3} alt="slick" />
                        <p className="title">Resident Evil: Village</p>
                        <p className="cont">
                            สัมผัสประสบการณ์เกมเอาตัวรอดสยองขวัญที่ไม่เหมือนครั้งไหนๆ
                            กับเกมภาคหลักลำดับที่แปดของตระกูล Resident Evil
                            ที่มาในชื่อ Resident Evil Village
                        </p>
                        <div className="card-btn text-left mt-5 h-3">
                            <MainBtnWhite txt="เรียนรู้เพิ่มเติม" />
                        </div>
                    </div>
                    <div className="box">
                        <img className="img-card" src={img4} alt="slick" />
                        <p className="title">Demon's Souls</p>
                        <p className="cont">
                            เกมรีเมคที่ถูกสร้างขึ้นมาใหม่ทั้งหมด
                            เชื้อเชิญคุณมาสัมผัสกับประสบการณ์การต่อสู้ที่โหดเหี้ยม
                            และเรื่องราวที่เต็มไปด้วยปริศนาในเกม Demon's Souls
                        </p>
                        <div className="card-btn text-left mt-5 h-3">
                            <MainBtnWhite txt="เรียนรู้เพิ่มเติม" />
                        </div>
                    </div>
                    <div className="box">
                        <img className="img-card" src={img5} alt="slick" />
                        <p className="title">Ratchet & Clank: Rift Apart</p>
                        <p className="cont">
                            บุกตะลุยในการผจญภัยข้ามมิติไปกับ Ratchet and Clank
                            ในการต่อสู้กับจักรพรรดิผู้ชั่วร้ายจากอีกโลกหนึ่ง
                        </p>
                        <div className="card-btn text-left mt-5 h-3">
                            <MainBtnWhite txt="เรียนรู้เพิ่มเติม" />
                        </div>
                    </div>
                    <div className="box">
                        <img className="img-card" src={img6} alt="slick" />
                        <p className="title">
                            Marvel's Spider-Man: Miles Morales
                        </p>
                        <p className="cont">
                            พบกับการปรากฏตัวของ Miles Morales
                            ในฐานะฮีโร่ผู้เก่งกาจคนใหม่ที่มาพร้อมพลังพิเศษอันน่าเหลือเชื่อเต็มพิกัดเพื่อเป็น
                            Spider-Man ในแบบของเขาเอง
                        </p>
                        <div className="card-btn text-left mt-5 h-3">
                            <MainBtnWhite txt="เรียนรู้เพิ่มเติม" />
                        </div>
                    </div>
                    <div className="box">
                        <img className="img-card" src={img7} alt="slick" />
                        <p className="title">
                            ฮอไรซันฟอร์บิดเดนเวสต์: ผจญภัยสุดเขตแดนต้องห้าม
                        </p>
                        <p className="cont">
                            ร่วมผจญภัยไปกับเอลอย ฝ่าฟันฟอร์บิดเนเวสต์
                            พรมแดนอันยิ่งใหญ่ที่ซ่อนเร้นไปด้วยภัยอันตรายลึกลับใหม่ๆ
                        </p>
                        <div className="card-btn text-left mt-5 h-3">
                            <MainBtnWhite txt="เรียนรู้เพิ่มเติม" />
                        </div>
                    </div>
                    <div className="box">
                        <img className="img-card" src={img8} alt="slick" />
                        <p className="title">Returnal</p>
                        <p className="cont">
                            ทำลายวงโคจรแห่งความโกลาหลบนดวงดาวเอเลี่ยนสุดประหลาดที่สภาพแวดล้อมเปลี่ยนแปลงอยู่ตลอดเวลา
                            กับเกมชูตเตอร์แบบโรกผ่านมุมมองบุคคลที่สามจากผู้พัฒนา
                            Housemarque
                        </p>
                        <div className="card-btn text-left mt-5 h-3">
                            <MainBtnWhite txt="เรียนรู้เพิ่มเติม" />
                        </div>
                    </div>
                    <div className="box">
                        <img className="img-card" src={img9} alt="slick" />
                        <p className="title">DEATHLOOP</p>
                        <p className="cont">
                            สวมบทบาทเป็น Colt
                            เพื่อค้นหาวิธีที่จะยุติวังวนที่กักขังเขาไว้บนเกาะ
                            Blackreef ขณะถูกคนบนเกาะตามไล่ฆ่า
                        </p>
                        <div className="card-btn text-left mt-5 h-3">
                            <MainBtnWhite txt="เรียนรู้เพิ่มเติม" />
                        </div>
                    </div>
                    <div className="box">
                        <img className="img-card" src={img10} alt="slick" />
                        <p className="title">NBA 2K22</p>
                        <p className="cont">
                            NBA 2K22
                            นำจักรวาลแห่งบาสเก็ตบอลทั้งหมดมาไว้ในมือคุณแล้ว PLAY
                            NOW ในสภาพแวดล้อมจริงของ NBA และ WNBA
                            กับทีมและผู้เล่นจริง สร้างทีมในฝันของคุณเองใน MyTEAM
                            ด้วยผู้เล่นดาวเด่นในปัจจุบันและผู้เล่นระดับตำนานในอดีต
                        </p>
                        <div className="card-btn text-left mt-5 h-3">
                            <MainBtnWhite txt="เรียนรู้เพิ่มเติม" />
                        </div>
                    </div>
                    <div className="box">
                        <h3 className="hide">11</h3>
                    </div>
                    <div className="box">
                        <h3 className="hide">12</h3>
                    </div>
                    <div className="box">
                        <h3 className="hide">11</h3>
                    </div>
                    <div className="box">
                        <h3 className="hide">12</h3>
                    </div>
                </Slider>
            </div>
            <div
                className="pt-24"
                style={{
                    height: "130vh",
                    backgroundImage: "linear-gradient(180deg,#082eaa,#041c69)",
                }}>
                <div className="grid grid-cols-2 px-80 text-white text-left">
                    <div className="z-10">
                        <img src={ps4} alt="ps4" />
                        <h3 className="text-5xl mt-6">เล่นเกม PS4 กว่า</h3>
                        <h3 className="text-5xl mt-2">4,000 เกมได้ใน</h3>
                        <h3 className="text-5xl mt-2">คอนโซล PS5 ของคุณ</h3>
                        <p className="text-2xl mt-8">
                            ย้อนกลับไปเล่นเกม PS4 และเกม PS VR ด้วย
                        </p>
                        <p className="text-2xl">ความเข้ากันได้ย้อนหลัง</p>
                        <div className="mt-8">
                            <MainBtnWhite txt="เรียนรู้เพิ่มเติม" />
                        </div>
                    </div>
                    <div className="flex z-10">
                        <div className="ml-2 mr-32 border-l border-left"></div>
                        <div>
                            <img src={gameBoost} alt="gameBoost" />
                            <h3 className="text-5xl mt-6">กลับไปเล่นเกม</h3>
                            <h3 className="text-5xl mt-2">ฮิตที่ได้รับการ</h3>
                            <h3 className="text-5xl mt-2">ปรับปรุง</h3>
                            <p className="text-2xl mt-8">
                                Game Boost ช่วยให้อัตราเฟรมที่
                            </p>
                            <p className="text-2xl">
                                รวดเร็วและราบรื่นยิ่งขึ้นในเกม PS4
                            </p>
                            <p className="text-2xl">และ PS VR ที่เลือก</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center px-80 my-20">
                    <hr className="h-px bg-white z-10 w-full" />
                </div>
                <div className="grid grid-cols-2 px-80 text-white text-left">
                    <div className="pr-20 z-10">
                        <h3 className="text-5xl mt-6">
                            ก้าวเข้าสู่เกมของคุณด้วย
                        </h3>
                        <h3 className="text-5xl mt-2">
                            PlayStation VR<sup>2</sup>
                        </h3>
                        <p className="text-2xl mt-8">
                            เชื่อมต่อ PlayStationVR กับคอนโซล PS5 เพื่อเล่นเกม
                        </p>
                        <p className="text-2xl">PlayStation VR ที่รองรับ</p>
                        <div className="mt-8">
                            <MainBtnWhite txt="เรียนรู้เพิ่มเติม" />
                        </div>
                    </div>
                    <div className="z-10 pl-12 mt-24 transform scale-150">
                        <img src={vr} alt="VR" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Part13;
