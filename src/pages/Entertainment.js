import React from "react";
import DocTitle from "../components/etc/DocTitle";
import f_etm from "../img/Entertainment/f_etm.png";
import ui_etm from "../img/Entertainment/ui_etm.png";
import yt_etm from "../img/Entertainment/yt_etm.png";
import nf_etm from "../img/Entertainment/nf_etm.png";
import gm_etm from "../img/Entertainment/gm_etm.png";
import act_etm from "../img/Entertainment/act_etm.png";
import body_playstation from "../img/Entertainment/body_playstation.png";
import icon4k from "../img/Entertainment/icon4k.png";
import icons4k from "../img/Entertainment/icons4k.png";
import spotify from "../img/Entertainment/spotify.png";
import appletv from "../img/Entertainment/appletv.png";
import remote from "../img/Entertainment/remote.png";
import starwar from "../img/Entertainment/starwar.png";
import ap_m from "../img/Entertainment/applemusic.jpg";
import fifa from "../img/Entertainment/fifa.jpg";
import BtnWhite from "../components/button/BtnWhite";
import "../pages/Entertainment.css";
import "animate.css/animate.min.css";
import "animate.css";
import BtnBlue from "../components/button/BtnBlue";
import ScrollAnimation from "react-animate-on-scroll";

function Entertainment() {
    DocTitle(
        "ความบันเทิงบน PS5 | สตรีมรายการทีวี ภาพยนตร์ และเพลงจากคอนโซล PS5 | PlayStation  ประเทศไทย"
    );
    return (
        <div className="body-block">
            <div className="banner relative">
                <div className="picbox">
                    <img
                        className="img-fluid fetm"
                        src={f_etm}
                        alt="Ps5etm"
                        width="100%"
                    />
                </div>
                <div className="banner-content">
                    <div className="caption mx-4 pr-20">
                        <h1 className="text-5xl">ความบันเทิงบน PS5</h1>
                        <p className="text-lg my-8 mb-16">
                            สตรีมรายการทีวี ภาพยนตร์
                            และดนตรีที่ยอดเยี่ยมจากบริการด้านความบันเทิงที่คุณโปรดปราน
                        </p>
                        <p className="llt text-sm">
                            บริการสตรีมมิ่งอาจต้องมีการสมัครสมาชิกแบบมีค่าใช้จ่าย
                            เนื้อหาที่แสดงในหน้านี้อาจไม่พร้อมใช้งานในทุกประเทศ
                            ต้องมีอินเทอร์เน็ตและบัญชีสำหรับ PlayStation™Network
                            ด้วย
                        </p>
                    </div>
                </div>
            </div>
            <br></br>
            {/* --------------------------------------------------------------------------------------------------------------- */}
            <div className="seclayer mb-5">
                <h2 className="py-8 px-8 text-5xl">
                    ทีวีและภาพยนตร์บน PlayStation®5
                </h2>
                <p
                    className="pb-10 px-8 inline text-2xl"
                    style={{ opacity: 0.7 }}>
                    พบกับรายการทีวีโปรดรายการถัดไปของคุณ
                    สตรีมเนื้อหาวิดีโอล่าสุด หรือเตรียมตัวรับชมภาพยนตร์
                </p>
                <div className="ui_layout" style={{ width: "57.23%" }}>
                    <img
                        className="pb-6"
                        src={ui_etm}
                        alt="Ps5ui"
                        width="100%"
                    />
                    <div>
                        <h3 className="py-6 text-4xl">
                            เข้าถึงความบันเทิงที่ยอดเยี่ยม
                        </h3>
                        <p className="text-lg">
                            ส่วนมีเดียของอินเตอร์เฟซผู้ใช้คอนโซล PS5
                            รวมบริการสตรีมมิ่งฟรีและแบบมีค่าใช้จ่ายที่ได้รับการคัดสรรไว้ด้วยกันในทีเดียว
                            คุณจึงพบและเปิดซีรีส์ตอนล่าสุด ภาพยนตร์
                            และรายการทีวีที่แนะนำเพียงกดปุ่ม
                        </p>
                    </div>
                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------- */}
            <br></br>
            <br></br>
            <div className="addlayer">
                <div>
                    <div className="relative">
                        <div style={{ color: "white" }}>
                            <img
                                className="img-fluid nftm relative"
                                src={fifa}
                                alt="fifa"
                                width="100%"
                            />
                            <div className="absolute top-1/3 nf grid grid-cols-2 fadeInUp">
                                <div className="grid justify-items-start text-left">
                                    <h3 className="hh3 pb-6 text-4xl">
                                    ปลดล็อกสมาชิก Apple TV+ นานหกเดือนบน PS5™ ของคุณได้แล้วตอนนี้
                                    </h3>
                                    <p className="pb-6 nftext text-lg">
                                    ศูนย์รวมความบันเทิงที่ดีที่สุดของการเล่นเกม และความบันเทิงแบบไม่เคยมีมาก่อน
                                    </p>
                                    <BtnWhite txt="เรียนรู้เพิ่มเติม" />
                                    <p className="text-sm mt-8">
                                    การทดลองใช้นาน 6 เดือนจากนั้น ฿99.00/เดือนจนกว่าจะยกเลิก ต้องมี Apple ID มีการใช้ข้อจำกัดและข้อกำหนดสิทธิ ข้อเสนอสามารถแลกในที่หน้าหลักสื่อของ PS5 ไม่ได้รวมเกมไว้ด้วย ไม่จำเป็นต้องมีเกมหรือการเล่นเกมใดๆ เพื่อรับข้อเสนอ
                                    </p>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="ap_m relative">
                        <img src={ap_m} height="95%" alt="ap_m" />
                        <div className="absolute items-center top-0 w-full h-full grid grid-cols-2" style={{color:"white"}}>
                            <div></div>
                            <div className="grid justify-items-center">
                                <div className="p-44 grid justify-items-start pr-56">
                                    <h2 className="text-4xl mb-6 text-left">
                                    ดนตรีทุกแบบที่คุณรักฟังตอนนี้บน PS5™ ของคุณ
                                    </h2>
                                    <p className="text-lg text-left mb-6">
                                    ด้วย Apple Music คุณสามารถสร้างเพลงประกอบเกมส่วนตัวได้จากเพลงมากกว่า 90 ล้านเพลง สตรีมตอนนี้บน PS5 ของคุณ ทั้งหมดไม่มีโฆษณา
                                    </p>
                                    <p className="text-sm text-left text-white">
                                    ต้องสมัครเป็นสมาชิก Apple Music
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                    <ScrollAnimation
                    animateIn="animate__fadeIn"
                    duration="0.4"
                    animateOnce="true"
                    offset="450"><img src={starwar} height="95%" alt="starwar" />
                     </ScrollAnimation>
                        <div className="absolute items-center top-0 w-full h-full grid grid-cols-2">
                            <div className="grid justify-items-center">
                                <div className="p-40 grid justify-items-start">
                                    <h2 className="text-5xl mb-6 text-left text-white">
                                    Disney+
                                    </h2>
                                    <p className="text-lg text-left text-white mb-12">
                                    สตรีมสื่อบันเทิงจาก Disney, Pixar, Marvel, Star Wars และ National Geographic ภาพยนตร์ ซีรีส์ และซีรีส์ออริจินอลชั้นยอดจากผู้ถ่ายทอดเรื่องราวที่เก่งที่สุดของโลกกำลังรอให้คุณรับชม
                                    </p>
                                    <p className="text-sm text-left text-white">
                                    ต้องสมัครสมาชิก Disney+ จำหน่ายแยกต่างหาก<sup>1</sup>
                                    </p>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="thrlayer mt-0">
                <div>
                <div className="yt_layout relative ">
                    <div>
                        <img
                            className="img-fluid yttm relative"
                            src={yt_etm}
                            alt="yt_etm"
                            width="100%"
                        />
                        <div className="absolute top-2/4 yt px-16">
                            <div className="grid justify-items-start">
                                <h3 className="text-4xl mb-8">YouTube</h3>
                                <p className="text-lg">
                                    เอนกาย ผ่อนคลาย และเพลิดเพลินไปกับ
                                    เนื้อหาล่าสุดจาก YouTube
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="relative">
                        <div style={{ color: "white" }}>
                            <img
                                className="img-fluid nftm relative"
                                src={nf_etm}
                                alt="nf_etm"
                                width="100%"
                            />
                            <div className="absolute top-1/3 nf grid grid-cols-2">
                                <div className="grid justify-items-start text-left">
                                    <h3 className="hh3 pb-6 text-4xl">
                                        Netflix
                                    </h3>
                                    <p className="pb-6 nftext text-lg">
                                        ดูภาพยนตร์ รายการทีวี และอื่นๆ จาก
                                        Netflix บน PS5
                                        และสตรีมรายการออริจินอลล่าสุด
                                    </p>
                                    <p className="llt text-sm mt-16">
                                        ต้องเป็นสมาชิกบริการสตรีม Netflix
                                        จำหน่ายแยกต่างหาก<sup>4</sup>
                                    </p>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="gm_layout relative">
                        <img src={gm_etm} height="95%" alt="mutiplayer" />
                        <div className="absolute items-center top-0 w-full h-full grid grid-cols-2">
                            <div></div>
                            <div className="grid justify-items-center">
                                <div className="p-44 grid justify-items-start pr-56">
                                    <h2 className="text-4xl mb-6 text-left">
                                        Twitch
                                    </h2>
                                    <p className="text-lg text-left mb-6">
                                        สตรีมตอนนี้
                                        เข้าร่วมชุมชนที่มีสตรีมเมอร์ชื่อดังและผู้คนอีกนับล้านที่สตรีมในทุกวันเพื่อเชื่อมโยงสิ่งต่างๆ
                                        ที่คุณรัก ตั้งแต่เกมจนไปเพลง และอื่นๆ
                                        อีกมากมาย
                                        ตอนนี้คุณสามารถถ่ายทอดการเล่นเกมของคุณเองได้จากคอนโซล
                                        PS5
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                    <ScrollAnimation
                    animateIn="animate__fadeIn"
                    duration="0.4"
                    animateOnce="true"
                    offset="450"><img src={act_etm} height="95%" alt="mutiplayer" />
                     </ScrollAnimation>
                        <div className="absolute items-center top-0 w-full h-full grid grid-cols-2">
                            <div className="grid justify-items-center">
                                <div className="p-40 grid justify-items-start">
                                    <h2 className="text-5xl mb-6 text-left text-white">
                                        Amazon Prime Video
                                    </h2>
                                    <p className="text-lg text-left text-white mb-12">
                                        รับชมภาพยนตร์และรายการทีวี
                                        รวมถึงรายการจาก Amazon Originals เช่น
                                        The Boys, Tom Clancy's Jack Ryan
                                        และอื่นๆ
                                    </p>
                                    <p className="text-sm text-left text-white">
                                        ต้องสมัครสมาชิก Amazon Prime
                                        จำหน่ายแยกต่างหาก<sup>3</sup>
                                    </p>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            {/* --------------------------------------------------------------------------------------------------------------- */}
            <br></br>
            <div className="frhlayer">
                <div className="m-0 px-96">
                    <div className="titlebox mb-12">
                        <h1 className="text-5xl">
                            ความบันเทิงระดับ 4K บนทีวี 4K
                        </h1>
                    </div>
                    <div className="imagebox">
                        <img
                            className="img-fluid bdps5"
                            src={body_playstation}
                            alt="body=playstation"
                            width="100%"
                        />
                    </div>
                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------- */}
            <div className="grid grid-cols-2 justify-items-center p-32 pb-16">
                <div className="grid justify-items-center">
                    <img
                        className="img-fluid icon4k"
                        src={icon4k}
                        alt="icon4k"
                        width="100px"
                    />
                    <h4 className="text-3xl">4K Ultra HD Blu-ray™</h4>
                    <p className="text-lg my-4">
                        ดูแผ่นดิสก์ 4K Blu-ray บนทีวี 4K ที่สวยงามด้วยคอนโซล PS5
                        ของคุณ (ไม่รวม PS5 Digital Edition)
                    </p>
                </div>
                <div className="grid justify-items-center">
                    <img
                        className="img-fluid icons4k"
                        src={icons4k}
                        alt="icons4k"
                        width="100px"
                    />
                    <h4 className="text-3xl">การสตรีมความบันเทิง 4K</h4>
                    <p className="text-lg my-4">
                        สตรีมความบันเทิง 4K จากแอปที่รองรับที่คุณโปรดปรานบน PS5
                        ด้วยทีวี 4K
                    </p>
                </div>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------- */}
            <div
                className="grid justify-items-center py-16 px-96"
                style={{ backgroundColor: "#eeeeee" }}>
                <h2 className="text-4xl">แอปความบันเทิงอื่นๆ บน PS5</h2>
                <div className="grid grid-cols-2 py-24">
                    <div className="grid justify-items-center content-start ">
                        <img
                            src={spotify}
                            className="w-2/5 pb-6"
                            alt="spotify"
                        />
                        <h4 className="text-2xl pb-2">Spotify</h4>
                        <p className="text-lg">
                            ลองฟังเพลงของ Spotify
                            ที่คัดสรรมาเพื่อเกมเมอร์โดยเฉพาะ
                        </p>
                    </div>
                    <div className="grid justify-items-center">
                        <img
                            src={appletv}
                            className="w-2/5 pb-6"
                            alt="appletv"
                        />
                        <h4 className="text-2xl pb-2">Apple TV</h4>
                        <p className="text-lg">
                            รับชมรายการออริจินอลจาก Apple TV+
                            สมัครสมาชิกช่องพรีเมียม
                            ซื้อหรือเช่าภาพยนตร์ใหม่ล่าสุด ทั้งหมดในทีวีของคุณ
                            ทั้งหมดในแอปเดียว
                        </p>
                    </div>
                </div>
                <p className="text-lg pb-2">
                    ตรวจสอบส่วนมีเดียของ PS5
                    เพื่อดูแอปความบันเทิงทั้งหมดที่พร้อมให้บริการในภูมิภาคของคุณ
                </p>
            </div>
            {/* --------------------------------------------------------------------------------------------------------------- */}
            <div className="grid grid-cols-2 justify-items-center mt-12">
                <div>
                    <img src={remote} width="80%" className="mx-40" alt="pic" />
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
            {/* --------------------------------------------------------------------------------------------------------------- */}
            <div
                className="w-full text-left py-12 px-44"
                style={{ backgroundColor: "#eeeeee" }}>
                <p className="my-5 text-sm leading-7">
                    <sup>3</sup> ต้องเป็นสมาชิก Amazon Prime หรือสมัครสมาชิก
                    Amazon Prime Video มีข้อจำกัด ดู primevideo.com
                    เพื่อทราบรายละเอียด Amazon
                    และเครื่องหมายทั้งหมดเป็นเครื่องหมายการค้าของ Amazon.com,
                    Inc. หรือบริษัทในเครือ
                </p>
                <p className="my-5 text-sm leading-7">
                    <sup>4</sup>{" "}
                    <span
                        className="cursor-pointer underline"
                        style={{ color: "#0072ce" }}>
                        www.netflix.com/TermsOfUse
                    </span>{" "}
                    Netflix เป็นเครื่องหมายการค้าที่จดทะเบียนของ Netflix, Inc.
                </p>
                <p className="my-5 text-sm leading-7">
                    <sup>5</sup> ต้องมีอินเทอร์เน็ตและบัญชีสำหรับ
                    PlayStation™Network
                    บริการสตรีมมิ่งอาจจำเป็นต้องมีการสมัครสมาชิกแบบมีค่าใช้จ่ายและใช้บริการไม่ได้ในบางประเทศ
                    Disney+ เป็นเครื่องหมายการค้าของ Disney Enterprises, Inc.
                    และใช้โดยได้รับอนุญาต Netflix เป็นเครื่องหมายการค้าของ
                    Netflix, Inc. Spotify เป็นเครื่องหมายบริการของ Spotify
                    YouTube เป็นเครื่องหมายบริการของ YouTube
                </p>
                <p className="my-5 text-sm leading-7">
                    <span
                        className="cursor-pointer underline"
                        style={{ color: "#0072ce" }}>
                        https://www.disneyplus.com/legal/subscriber-agreement
                    </span>{" "}
                    © 2020 Disney และหน่วยงานธุรกิจที่เกี่ยวข้อง © 2020 & TM
                    Lucasfilm Ltd. สำหรับ The Mandalorian
                </p>
                <p className="my-5 text-sm leading-7">
                    Spotify and the Spotify logo are registered trademarks of
                    Spotify AB. All other trademarks related to the Spotify
                    brand are the sole property of Spotify AB.
                </p>
                <p className="my-5 text-sm leading-7">
                    YouTube and the YouTube Logo are trademarks of Google LLC.{" "}
                    <span
                        className="cursor-pointer underline"
                        style={{ color: "#0072ce" }}>
                        https://www.youtube.com/t/terms
                    </span>
                </p>
                <p className="my-5 text-sm leading-7">
                    TWITCH, โลโก้ TWITCH และโลโก้ Glitch
                    เป็นเครื่องหมายการค้าของ Twitch Interactive, Inc.
                    หรือบริษัทในเครือ
                </p>
                <p className="my-5 text-sm leading-7">
                    Apple, โลโก้ Apple และ Apple TV เป็นเครื่องหมายการค้าของ
                    Apple Inc. ที่ลงทะเบียนไว้ในสหรัฐอเมริกาและประเทศอื่นๆ Apple
                    TV+ เป็นเครื่องหมายการค้าของ Apple Inc.
                </p>
            </div>
        </div>
    );
}

export default Entertainment;
