import React from "react";
import DocTitle from "../components/etc/DocTitle";
import f_etm from "../img/img_etm/f_etm.png";
import ui_etm from "../img/img_etm/ui_etm.png";
import yt_etm from "../img/img_etm/yt_etm.png";
import nf_etm from "../img/img_etm/nf_etm.png";
import gm_etm from "../img/img_etm/gm_etm.png";
import act_etm from "../img/img_etm/act_etm.png";
import body_playstation from "../img/img_etm/body_playstation.png";
import icon4k from "../img/img_etm/icon4k.png";
import icons4k from "../img/img_etm/icons4k.png";
import spotify from "../img/img_etm/spotify.png";
import appletv from "../img/img_etm/appletv.png";
import "../pages/Entertainment.css";



function Entertainment() {
    DocTitle(
        "ความบันเทิงบน PS5 | สตรีมรายการทีวี ภาพยนตร์ และเพลงจากคอนโซล PS5 | PlayStation  ประเทศไทย"
    );
    return (
        <div className="body-block">
            <div className="banner position-relative">
                <div className="picbox">
                    <img className="img-fluid fetm" src={f_etm} alt="Ps5etm" width="100%" />
                </div>
                <div className="banner-content">
                    <div className="caption">
                        <h1>ความบันเทิงบน PS5</h1>
                        <p>สตรีมรายการทีวี ภาพยนตร์ และดนตรีที่ยอดเยี่ยมจากบริการด้านความบันเทิงที่คุณโปรดปราน</p>
                        <br></br>
                        <p className="llt">บริการสตรีมมิ่งอาจต้องมีการสมัครสมาชิกแบบมีค่าใช้จ่าย เนื้อหาที่แสดงในหน้านี้อาจไม่พร้อมใช้งานในทุกประเทศ ต้องมีอินเทอร์เน็ตและบัญชีสำหรับ PlayStation™Network ด้วย</p>
                    </div>
                </div>
            </div>
            <br></br>
            {/* --------------------------------------------------------------------------------------------------------------- */}
            <div className="seclayer">
                <h2>ทีวีและภาพยนตร์บน PlayStation®5</h2>
                <p style={{ opacity: 0.7 }}>พบกับรายการทีวีโปรดรายการถัดไปของคุณ สตรีมเนื้อหาวิดีโอล่าสุด หรือเตรียมตัวรับชมภาพยนตร์</p>
                <div className="ui_layout" style={{ width: "57.23%" }}>
                    <img src={ui_etm} alt="Ps5ui" width="100%" />
                    <div>
                        <h3>เข้าถึงความบันเทิงที่ยอดเยี่ยม</h3>
                        <p>ส่วนมีเดียของอินเตอร์เฟซผู้ใช้คอนโซล PS5 รวมบริการสตรีมมิ่งฟรีและแบบมีค่าใช้จ่ายที่ได้รับการคัดสรรไว้ด้วยกันในทีเดียว คุณจึงพบและเปิดซีรีส์ตอนล่าสุด ภาพยนตร์ และรายการทีวีที่แนะนำเพียงกดปุ่ม</p>
                    </div>
                </div>
                <div className="yt_layout position-relative">
                    <div>
                        <img className="img-fluid yttm" src={yt_etm} alt="yt_etm" width="100%" />
                    </div>
                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------- */}
            <div className="thrlayer">
                <div>
                    <div className="position-relative">
                        <img className="img-fluid nftm" src={nf_etm} alt="nf_etm" width="100%" />
                    </div>
                    <div className="position-relative">
                        <img className="img-fluid gmtm" src={gm_etm} alt="gm_etm" width="100%" />
                    </div>
                    <div className="position-relative">
                        <img className="img-fluid acttm" src={act_etm} alt="gm_etm" width="100%" />
                    </div>
                </div>
            </div>
            <br></br>
            {/* --------------------------------------------------------------------------------------------------------------- */}
            <br></br>
            <div className="frhlayer">
                <div className="mainbox">
                    <div className="titlebox">
                        <h1>ความบันเทิงระดับ 4K บนทีวี 4K</h1>
                    </div>
                    <div className="imagebox">
                        <img className="img-fluid bdps5" src={body_playstation} alt="body=playstation" width="100%" />
                    </div>
                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------- */}
            <br></br>
            <div className="fthlayer">
                <div className="container">
                    <div className="mainbox2">
                        <div className="imagebox">
                            <img className="img-fluid icon4k" src={icon4k} alt="icon4k" width="100px" />
                        </div>
                        <div className="textbox">
                            <h3>4K Ultra HD Blu-ray™</h3>
                            <p>ดูแผ่นดิสก์ 4K Blu-ray บนทีวี 4K ที่สวยงามด้วยคอนโซล PS5 ของคุณ (ไม่รวม PS5 Digital Edition)</p>
                        </div>
                    </div>
                    <div className="mainbox2">
                        <div className="imagebox">
                            <img className="img-fluid icons4k" src={icons4k} alt="icons4k" width="100px" />
                        </div>
                        <div className="textbox">
                            <h3>การสตรีมความบันเทิง 4K</h3>
                            <p>สตรีมความบันเทิง 4K จากแอปที่รองรับที่คุณโปรดปรานบน PS5 ด้วยทีวี 4K</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------- */}
            <br></br>
            <div className="stxlayer">
                <div className="sxtitle">
                    <h2>แอปความบันเทิงอื่นๆ บน PS5</h2>
                </div>
                <div className="container" style={{ width: "870px" }}>
                    <div className="mainbox2" style={{ width: "420px" }}>
                        <div className="imagebox pb-8">
                            <img className="img-fluid spotify" src={spotify} alt="spotify" />
                        </div>
                        <div className="textbox">
                            <h3 className="pb-5">Spotify</h3>
                            <p>ลองฟังเพลงของ Spotify ที่คัดสรรมาเพื่อเกมเมอร์โดยเฉพาะ</p>
                        </div>
                    </div>
                    <div className="mainbox2" style={{ width: "420px" }}>
                        <div className="imagebox pb-8">
                            <img className="img-fluid appletv" src={appletv} alt="appletv" />
                        </div>
                        <div className="textbox">
                            <h3 className="pb-5">Apple TV</h3>
                            <p>รับชมรายการออริจินอลจาก Apple TV+ สมัครสมาชิกช่องพรีเมียม ซื้อหรือเช่าภาพยนตร์ใหม่ล่าสุด ทั้งหมดในทีวีของคุณ ทั้งหมดในแอปเดียว</p>
                        </div>
                    </div>
                </div>
                <div className="foottext">
                    <div>
                        <p>ตรวจสอบส่วนมีเดียของ PS5 เพื่อดูแอปความบันเทิงทั้งหมดที่พร้อมให้บริการในภูมิภาคของคุณ</p>
                    </div>
                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------- */}
            <br></br>
            <div className="svtlayer">
                <div className="container">
                    <div className="mainbox2">
                        <div className="imagebox pb-8">
                            <img className="img-fluid spotify" src={spotify} alt="spotify" />
                        </div>
                    </div>
                    <div className="mainbox2">
                        <div className="textbox">
                            <h3 className="pb-5">Apple TV</h3>
                            <p>รับชมรายการออริจินอลจาก Apple TV+ สมัครสมาชิกช่องพรีเมียม ซื้อหรือเช่าภาพยนตร์ใหม่ล่าสุด ทั้งหมดในทีวีของคุณ ทั้งหมดในแอปเดียว</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------- */}
            <br></br>
            <div className="w-100 text-left py-16 px-44">
                <p className="text-sm mb-6">
                    <sup>3</sup>ต้องสมัครสมาชิก PlayStation®Plus
                    เพื่อเล่นเกมแบบผู้เล่นหลายคน PS Plus
                    เป็นการสมัครสมาชิกต่อเนื่องแบบมีค่าใช้จ่าย
                    โดยจะมีการเรียกเก็บค่าบริการโดยอัตโนมัติตามความถี่ที่ผู้บริโภคเลือกไว้ในขณะซื้อจนกว่าจะมีการยกเลิก
                </p>
                <p className="text-sm mb-6">
                    <sup>4</sup>ต้องมีบัญชีสำหรับ PlayStation Network
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
                    <sup>5</sup>ต้องมีบัญชีสำหรับ PlayStation Network
                    เกมที่เข้ากันได้ คอนโซล PS5 ที่มีซอฟต์แวร์ระบบล่าสุด
                    การเชื่อมต่ออินเทอร์เน็ตความเร็วสูง และอุปกรณ์ iOS หรือ
                    Android ที่เข้ากันได้เพื่อเล่นระยะไกล
                    แนะนำให้ใช้การเชื่อมต่อเครือข่ายแบบใช้สายกับคอนโซล PS5
                </p>
            </div>
        </div>
    );
}

export default Entertainment;
