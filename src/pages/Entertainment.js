import React from "react";
import DocTitle from "../components/etc/DocTitle";
import f_etm from "../img/img_etm/f_etm.png";
import ui_etm from "../img/img_etm/ui_etm.png";
import "../pages/Entertainment.css";



function Entertainment() {
    DocTitle(
        "ความบันเทิงบน PS5 | สตรีมรายการทีวี ภาพยนตร์ และเพลงจากคอนโซล PS5 | PlayStation  ประเทศไทย"
    );
    return (
        <div>
        <div className="banner position-relative">
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
        <div className="seclayer">
            <h2>ทีวีและภาพยนตร์บน PlayStation®5</h2>
            <p style={{opacity:0.7}}>พบกับรายการทีวีโปรดรายการถัดไปของคุณ สตรีมเนื้อหาวิดีโอล่าสุด หรือเตรียมตัวรับชมภาพยนตร์</p>
            <div className="ui_layout" style={{width:"57.23%"}}>
                <img src={ui_etm} alt="Ps5ui" width="100%" />
                <div>
                <h3>เข้าถึงความบันเทิงที่ยอดเยี่ยม</h3>
                <p>ส่วนมีเดียของอินเตอร์เฟซผู้ใช้คอนโซล PS5 รวมบริการสตรีมมิ่งฟรีและแบบมีค่าใช้จ่ายที่ได้รับการคัดสรรไว้ด้วยกันในทีเดียว คุณจึงพบและเปิดซีรีส์ตอนล่าสุด ภาพยนตร์ และรายการทีวีที่แนะนำเพียงกดปุ่ม</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Entertainment;
