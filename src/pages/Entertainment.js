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
import remote from "../img/img_etm/remote.png";
import "../pages/Entertainment.css";
import "animate.css/animate.min.css";
import "animate.css";
import BtnBlue from "../components/etc/BtnBlue";



function Entertainment() {
    DocTitle(
        "ความบันเทิงบน PS5 | สตรีมรายการทีวี ภาพยนตร์ และเพลงจากคอนโซล PS5 | PlayStation  ประเทศไทย"
    );
    return (
        <div className="body-block">
            <div className="banner relative">
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
                <h2 className="pt-6 pb-4">ทีวีและภาพยนตร์บน PlayStation®5</h2>
                <p className="pb-6 inline" style={{ opacity: 0.7 }}>พบกับรายการทีวีโปรดรายการถัดไปของคุณ สตรีมเนื้อหาวิดีโอล่าสุด หรือเตรียมตัวรับชมภาพยนตร์</p>
                <div className="ui_layout" style={{ width: "57.23%" }}>
                    <img className="pb-6" src={ui_etm} alt="Ps5ui" width="100%" />
                    <div>
                        <h3 className="pb-4">เข้าถึงความบันเทิงที่ยอดเยี่ยม</h3>
                        <p>ส่วนมีเดียของอินเตอร์เฟซผู้ใช้คอนโซล PS5 รวมบริการสตรีมมิ่งฟรีและแบบมีค่าใช้จ่ายที่ได้รับการคัดสรรไว้ด้วยกันในทีเดียว คุณจึงพบและเปิดซีรีส์ตอนล่าสุด ภาพยนตร์ และรายการทีวีที่แนะนำเพียงกดปุ่ม</p>
                    </div>
                </div>
                <div className="yt_layout relative">
                    <div>
                        <img className="img-fluid yttm relative" src={yt_etm} alt="yt_etm" width="100%" />
                        <div className="absolute top-2/4 yt">
                            <div className="grid justify-items-start">
                            <h3>YouTube</h3>
                            <p>เอนกาย ผ่อนคลาย และเพลิดเพลินไปกับ เนื้อหาล่าสุดจาก YouTube</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------- */}
            <div className="thrlayer">
                <div className="relative">
                    <div style={{color:"white"}}>
                        <img className="img-fluid nftm relative" src={nf_etm} alt="nf_etm" width="100%" />
                        <div className="absolute top-1/3 nf">
                            <div className="grid justify-items-start text-left">
                            <h3 className="hh3 pb-6">Netflix</h3>
                            <p className="pb-6 nftext">ดูภาพยนตร์ รายการทีวี และอื่นๆ จาก Netflix บน PS5 และสตรีมรายการออริจินอลล่าสุด</p>
                            <br></br>
                            <p className="llt">ต้องเป็นสมาชิกบริการสตรีม Netflix จำหน่ายแยกต่างหาก<sup>4</sup> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gm_layout relative">
                    <div  style={{color:"black"}}>
                        <img className="img-fluid gmtm relative" src={gm_etm} alt="gm_etm" width="100%" />
                        <div className="absolute top-1/3 gm">
                            <div className="grid justify-items-start text-left">
                            <h3 className="hh3 pb-6">Twitch</h3>
                            <p className="pb-6 gmtext">สตรีมตอนนี้ เข้าร่วมชุมชนที่มีสตรีมเมอร์ชื่อดังและผู้คนอีกนับล้านที่สตรีมในทุกวันเพื่อเชื่อมโยงสิ่งต่างๆ ที่คุณรัก  ตั้งแต่เกมจนไปเพลง และอื่นๆ อีกมากมาย ตอนนี้คุณสามารถถ่ายทอดการเล่นเกมของคุณเองได้จากคอนโซล PS5</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div  style={{color:"white"}}>
                        <img className="img-fluid acttm relative" src={act_etm} alt="ac_etm" width="100%" />
                        <div className="absolute top-1/3 act">
                            <div className="grid justify-items-start text-left">
                            <h3 className="hh3 pb-6">Amazon Prime Video</h3>
                            <p className="pb-6 acttext">รับชมภาพยนตร์และรายการทีวี รวมถึงรายการจาก Amazon Originals เช่น The Boys, Tom Clancy's Jack Ryan และอื่นๆ</p>
                            <br></br>
                            <p className="llt">ต้องสมัครสมาชิก Amazon Prime จำหน่ายแยกต่างหาก<sup>3</sup> </p>
                            </div>
                        </div>
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
                <div
                    className="grid grid-cols-2 justify-items-center mt-16">
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
            </div>
            {/* --------------------------------------------------------------------------------------------------------------- */}
            <br></br>
            <div className="w-100 text-left py-15 px-44 lbox">
                <p className="text-sm mb-6 leading-8">
                    <sup>3</sup>ต้องเป็นสมาชิก Amazon Prime หรือสมัครสมาชิก Amazon Prime Video มีข้อจำกัด ดู primevideo.com เพื่อทราบรายละเอียด Amazon และเครื่องหมายทั้งหมดเป็นเครื่องหมายการค้าของ Amazon.com, Inc. หรือบริษัทในเครือ
                </p>
                <p className="text-sm mb-6 leading-8">
                    <sup>4</sup>
                    <span className="cursor-pointer underline"
                        style={{ color: "#0072ce" }}>
                        www.netflix.com/TermsOfUse&nbsp
                    </span>
                    Netflix เป็นเครื่องหมายการค้าที่จดทะเบียนของ Netflix, Inc.
                </p>
                <p className="text-sm leading-8">
                    <sup>5</sup>
                    ต้องมีอินเทอร์เน็ตและบัญชีสำหรับ PlayStation™Network บริการสตรีมมิ่งอาจจำเป็นต้องมีการสมัครสมาชิกแบบมีค่าใช้จ่ายและใช้บริการไม่ได้ในบางประเทศ Disney+ เป็นเครื่องหมายการค้าของ Disney Enterprises, Inc. และใช้โดยได้รับอนุญาต Netflix เป็นเครื่องหมายการค้าของ Netflix, Inc. Spotify เป็นเครื่องหมายบริการของ Spotify YouTube เป็นเครื่องหมายบริการของ YouTube
                    &nbsp;<span className="cursor-pointer underline"
                        style={{ color: "#0072ce" }}>
                        https://www.disneyplus.com/legal/subscriber-agreement
                    </span><br></br>&nbsp;
                    © 2020 Disney และหน่วยงานธุรกิจที่เกี่ยวข้อง © 2020 & TM Lucasfilm Ltd. สำหรับ The Mandalorian
                    <br></br>
                    Spotify and the Spotify logo are registered trademarks of Spotify AB. All other trademarks related to the Spotify brand are the sole property of Spotify AB.
                    <br></br>
                    YouTube and the YouTube Logo are trademarks of Google LLC.
                    &nbsp;<span className="cursor-pointer underline"
                        style={{ color: "#0072ce" }}>
                        https://www.youtube.com/t/terms
                    </span><br></br>
                    TWITCH, โลโก้ TWITCH และโลโก้ Glitch เป็นเครื่องหมายการค้าของ Twitch Interactive, Inc. หรือบริษัทในเครือ
                    <br></br>
                    Apple, โลโก้ Apple และ Apple TV เป็นเครื่องหมายการค้าของ Apple Inc. ที่ลงทะเบียนไว้ในสหรัฐอเมริกาและประเทศอื่นๆ Apple TV+ เป็นเครื่องหมายการค้าของ Apple Inc.
                </p>
            </div>
        </div>
    );
}

export default Entertainment;
