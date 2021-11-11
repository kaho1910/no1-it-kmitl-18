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
        <div
            className="w-full overflow-x-hidden"
            style={{
                height: "230vh",
                backgroundColor: "#002fc3",
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
                    <p className="title">Marvel's Spider-Man: Miles Morales</p>
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
                        NBA 2K22 นำจักรวาลแห่งบาสเก็ตบอลทั้งหมดมาไว้ในมือคุณแล้ว
                        PLAY NOW ในสภาพแวดล้อมจริงของ NBA และ WNBA
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
    );
}

export default Part13;
