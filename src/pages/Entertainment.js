import React from "react";
import DocTitle from "../components/etc/DocTitle";
import f_etm from "../img/img_etm/f_etm.png";
<<<<<<< HEAD
import ui_etm from "../img/img_etm/ui_etm.png";
import "../pages/Entertainment.css";
=======
>>>>>>> 2aaf986fbd3dadb9e7a18622687d6d7ad3802ecb

function Entertainment() {
    DocTitle(
        "ความบันเทิงบน PS5 | สตรีมรายการทีวี ภาพยนตร์ และเพลงจากคอนโซล PS5 | PlayStation  ประเทศไทย"
    );
    return (
        <div>
<<<<<<< HEAD
        <div className="layer banner position-relative">
        <img className="img-fluid fetm" src={f_etm} alt="Ps5etm" width="100%"/>
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
        <div className="layer seclayer">
            <h2>ทีวีและภาพยนตร์บน PlayStation®5</h2>
            <p style={{opacity:0.7}}>พบกับรายการทีวีโปรดรายการถัดไปของคุณ สตรีมเนื้อหาวิดีโอล่าสุด หรือเตรียมตัวรับชมภาพยนตร์</p>
            <div className="ui_layout">
                <img src={ui_etm} alt="Ps5ui" width="56%" />
            </div>
        </div>
    </div>
=======
            <figure className="position-relative">
                <img
                    className="img-fluid"
                    src={f_etm}
                    alt="Ps5etm"
                    width="100%"
                />
                <figcaption className="text-left caption">
                    <h1>ความบันเทิงบน PS5</h1>
                    <p>
                        สตรีมรายการทีวี ภาพยนตร์
                        และดนตรีที่ยอดเยี่ยมจากบริการด้านความบันเทิงที่คุณโปรดปราน
                    </p>
                    <br></br>
                    <p>
                        บริการสตรีมมิ่งอาจต้องมีการสมัครสมาชิกแบบมีค่าใช้จ่าย
                        เนื้อหาที่แสดงในหน้านี้อาจไม่พร้อมใช้งานในทุกประเทศ
                        ต้องมีอินเทอร์เน็ตและบัญชีสำหรับ PlayStation™Network
                        ด้วย
                    </p>
                </figcaption>
            </figure>
        </div>
>>>>>>> 2aaf986fbd3dadb9e7a18622687d6d7ad3802ecb
    );
}

export default Entertainment;
