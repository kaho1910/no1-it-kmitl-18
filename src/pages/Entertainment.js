import React from "react";
import DocTitle from "../components/etc/DocTitle";

function Entertainment() {
    DocTitle(
        "ความบันเทิงบน PS5 | สตรีมรายการทีวี ภาพยนตร์ และเพลงจากคอนโซล PS5 | PlayStation  ประเทศไทย"
    );
    return (
        <div>
        <figure className="position-relative">
        <img className="img-fluid" src={f_etm} alt="Ps5etm" width="100%"/>
        <figcaption className="text-left caption">
            <h1>ความบันเทิงบน PS5</h1>
            <p>สตรีมรายการทีวี ภาพยนตร์ และดนตรีที่ยอดเยี่ยมจากบริการด้านความบันเทิงที่คุณโปรดปราน</p>
            <br></br>
            <p>บริการสตรีมมิ่งอาจต้องมีการสมัครสมาชิกแบบมีค่าใช้จ่าย เนื้อหาที่แสดงในหน้านี้อาจไม่พร้อมใช้งานในทุกประเทศ ต้องมีอินเทอร์เน็ตและบัญชีสำหรับ PlayStation™Network ด้วย</p>
        </figcaption>
        </figure>
    </div>
    );
}

export default Entertainment;
