import React from "react";
import { Tween, Timeline, ScrollTrigger } from "react-gsap";
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
        <div className="w-full overflow-hidden relative">
            <ScrollTrigger start="3000px 800px" end="3500px 800px" scrub={true}>
                <Timeline
                    target={
                        <img
                            className="absolute bottom-0 right-0"
                            src={bg}
                            alt="bg"
                        />
                    }
                    paused>
                    <Tween from={{ y: "+=400px" }} to={{ y: "-=400px" }} />
                </Timeline>
            </ScrollTrigger>
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
                            ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                            ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                        </p>
                        <div className="card-btn text-left mt-5 h-3">
                            <MainBtnWhite txt="???????????????????????????????????????????????????" />
                        </div>
                    </div>
                    <div className="box">
                        <img className="img-card" src={img2} alt="slick" />
                        <p className="title">EA SPORTS FIFA 22</p>
                        <p className="cont">
                            ??????????????????????????? HyperMotion ???????????????????????????????????????????????????????????????????????????????????????
                            PlayStation 5 ???????????????????????????????????????????????????????????????????????????????????????
                            ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                            FIFA
                        </p>
                        <div className="card-btn text-left mt-5 h-3">
                            <MainBtnWhite txt="???????????????????????????????????????????????????" />
                        </div>
                    </div>
                    <div className="box">
                        <img className="img-card" src={img3} alt="slick" />
                        <p className="title">Resident Evil: Village</p>
                        <p className="cont">
                            ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                            ??????????????????????????????????????????????????????????????????????????????????????????????????? Resident Evil
                            ????????????????????????????????? Resident Evil Village
                        </p>
                        <div className="card-btn text-left mt-5 h-3">
                            <MainBtnWhite txt="???????????????????????????????????????????????????" />
                        </div>
                    </div>
                    <div className="box">
                        <img className="img-card" src={img4} alt="slick" />
                        <p className="title">Demon's Souls</p>
                        <p className="cont">
                            ????????????????????????????????????????????????????????????????????????????????????????????????????????????
                            ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                            ???????????????????????????????????????????????????????????????????????????????????????????????????????????? Demon's Souls
                        </p>
                        <div className="card-btn text-left mt-5 h-3">
                            <MainBtnWhite txt="???????????????????????????????????????????????????" />
                        </div>
                    </div>
                    <div className="box">
                        <img className="img-card" src={img5} alt="slick" />
                        <p className="title">Ratchet & Clank: Rift Apart</p>
                        <p className="cont">
                            ???????????????????????????????????????????????????????????????????????????????????????????????? Ratchet and Clank
                            ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                        </p>
                        <div className="card-btn text-left mt-5 h-3">
                            <MainBtnWhite txt="???????????????????????????????????????????????????" />
                        </div>
                    </div>
                    <div className="box">
                        <img className="img-card" src={img6} alt="slick" />
                        <p className="title">
                            Marvel's Spider-Man: Miles Morales
                        </p>
                        <p className="cont">
                            ????????????????????????????????????????????????????????? Miles Morales
                            ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                            Spider-Man ??????????????????????????????????????????
                        </p>
                        <div className="card-btn text-left mt-5 h-3">
                            <MainBtnWhite txt="???????????????????????????????????????????????????" />
                        </div>
                    </div>
                    <div className="box">
                        <img className="img-card" src={img7} alt="slick" />
                        <p className="title">
                            ??????????????????????????????????????????????????????????????????: ?????????????????????????????????????????????????????????????????????
                        </p>
                        <p className="cont">
                            ???????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????????
                            ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                        </p>
                        <div className="card-btn text-left mt-5 h-3">
                            <MainBtnWhite txt="???????????????????????????????????????????????????" />
                        </div>
                    </div>
                    <div className="box">
                        <img className="img-card" src={img8} alt="slick" />
                        <p className="title">Returnal</p>
                        <p className="cont">
                            ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                            ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                            Housemarque
                        </p>
                        <div className="card-btn text-left mt-5 h-3">
                            <MainBtnWhite txt="???????????????????????????????????????????????????" />
                        </div>
                    </div>
                    <div className="box">
                        <img className="img-card" src={img9} alt="slick" />
                        <p className="title">DEATHLOOP</p>
                        <p className="cont">
                            ???????????????????????????????????? Colt
                            ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                            Blackreef ?????????????????????????????????????????????????????????????????????
                        </p>
                        <div className="card-btn text-left mt-5 h-3">
                            <MainBtnWhite txt="???????????????????????????????????????????????????" />
                        </div>
                    </div>
                    <div className="box">
                        <img className="img-card" src={img10} alt="slick" />
                        <p className="title">NBA 2K22</p>
                        <p className="cont">
                            NBA 2K22
                            ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? PLAY
                            NOW ???????????????????????????????????????????????????????????? NBA ????????? WNBA
                            ???????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????? MyTEAM
                            ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                        </p>
                        <div className="card-btn text-left mt-5 h-3">
                            <MainBtnWhite txt="???????????????????????????????????????????????????" />
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
                <ScrollTrigger
                    start="2800px 800px"
                    end="3000px 800px"
                    scrub={true}>
                    <Timeline
                        target={
                            <div className="grid grid-cols-2 px-80 text-white text-left">
                                <div className="z-10">
                                    <img src={ps4} alt="ps4" />
                                    <h3 className="text-5xl mt-6">
                                        ????????????????????? PS4 ????????????
                                    </h3>
                                    <h3 className="text-5xl mt-2">
                                        4,000 ????????????????????????
                                    </h3>
                                    <h3 className="text-5xl mt-2">
                                        ?????????????????? PS5 ??????????????????
                                    </h3>
                                    <p className="text-2xl mt-8">
                                        ??????????????????????????????????????????????????? PS4 ?????????????????? PS VR ????????????
                                    </p>
                                    <p className="text-2xl">
                                        ??????????????????????????????????????????????????????????????????
                                    </p>
                                    <div className="mt-8">
                                        <MainBtnWhite txt="???????????????????????????????????????????????????" />
                                    </div>
                                </div>
                                <div className="flex items-center z-10">
                                    <ScrollTrigger
                                        start="2700px 750px"
                                        end="3000px 750px"
                                        scrub={true}>
                                        <Timeline
                                            target={
                                                <div className="ml-2 mr-32 border-l border-left"></div>
                                            }
                                            paused>
                                            <Tween
                                                from={{ height: "0%" }}
                                                to={{ height: "100%" }}
                                            />
                                        </Timeline>
                                    </ScrollTrigger>
                                    <div>
                                        <img src={gameBoost} alt="gameBoost" />
                                        <h3 className="text-5xl mt-6">
                                            ???????????????????????????????????????
                                        </h3>
                                        <h3 className="text-5xl mt-2">
                                            ?????????????????????????????????????????????
                                        </h3>
                                        <h3 className="text-5xl mt-2">
                                            ????????????????????????
                                        </h3>
                                        <p className="text-2xl mt-8">
                                            Game Boost ?????????????????????????????????????????????????????????
                                        </p>
                                        <p className="text-2xl">
                                            ?????????????????????????????????????????????????????????????????????????????????????????? PS4
                                        </p>
                                        <p className="text-2xl">
                                            ????????? PS VR ????????????????????????
                                        </p>
                                    </div>
                                </div>
                            </div>
                        }
                        paused>
                        <Tween
                            from={{ opacity: 0, y: "+=250px" }}
                            to={{ opacity: 1, y: "-=250px" }}
                        />
                    </Timeline>
                </ScrollTrigger>
                <div className="flex justify-center items-center px-80 my-20">
                    <ScrollTrigger
                        start="3400px bottom"
                        end="3700px bottom"
                        scrub={true}>
                        <Timeline
                            target={<hr className="h-px bg-white z-10" />}
                            paused>
                            <Tween
                                from={{ width: "0%" }}
                                to={{ width: "100%" }}
                            />
                        </Timeline>
                    </ScrollTrigger>
                </div>
                <ScrollTrigger
                    start="2500px 800px"
                    end="2700px 800px"
                    scrub={true}>
                    <Timeline
                        target={
                            <div className="grid grid-cols-2 px-80 text-white text-left">
                                <div className="pr-20 z-10">
                                    <h3 className="text-5xl mt-6">
                                        ????????????????????????????????????????????????????????????????????????
                                    </h3>
                                    <h3 className="text-5xl mt-2">
                                        PlayStation VR<sup>2</sup>
                                    </h3>
                                    <p className="text-2xl mt-8">
                                        ??????????????????????????? PlayStationVR ??????????????????????????? PS5
                                        ????????????????????????????????????
                                    </p>
                                    <p className="text-2xl">
                                        PlayStation VR ???????????????????????????
                                    </p>
                                    <div className="mt-8">
                                        <MainBtnWhite txt="???????????????????????????????????????????????????" />
                                    </div>
                                </div>
                                <div className="z-10 pl-12 mt-24 transform scale-150">
                                    <img src={vr} alt="VR" />
                                </div>
                            </div>
                        }
                        paused>
                        <Tween
                            from={{ opacity: 0, y: "+=250px" }}
                            to={{ opacity: 1, y: "-=250px" }}
                        />
                    </Timeline>
                </ScrollTrigger>
            </div>
        </div>
    );
}

export default Part13;
