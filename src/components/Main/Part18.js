import React from "react";
import { Link } from "react-router-dom";
import MainBtnWhite from "../button/MainBtnWhite";
import pic01 from "../../img/Main/Part18.jpg";

function Part18() {
    return (
        <div className="w-full relative">
            <img
                src={pic01}
                style={{ height: "60rem" }}
                className="object-cover w-full"
                alt="footerMain"
            />
            <div className="h-48" style={{ backgroundColor: "#2c51dd" }}></div>
            <div className="absolute top-0 w-full pt-64 pb-32 px-64">
                <h2 className="text-8xl font-bold text-white px-72">
                    การเล่นเกมจะพาคุณไปที่ใด
                </h2>
                <div className="grid grid-cols-4 text-white text-left pt-60">
                    <div className="mx-8">
                        <h2 className="text-5xl">เกม</h2>
                        <p className="text-xl py-12 pr-24 h-52">
                            สำรวจเกมที่รอคุณอยู่
                        </p>
                        <Link to="/games">
                            <MainBtnWhite txt="เรียนรู้เพิ่มเติม" />
                        </Link>
                    </div>
                    <div className="mx-8">
                        <h2 className="text-5xl">อุปกรณ์เสริม</h2>
                        <p className="text-xl py-12 pr-24 h-52">
                            ลองจินตนาการถึงมิติใหม่ของการเล่นเกมกับอุปกรณ์เสริม
                            PS5 อย่างเป็นทางการ
                        </p>
                        <Link to="/accessories">
                            <MainBtnWhite txt="เรียนรู้เพิ่มเติม" />
                        </Link>
                    </div>
                    <div className="mx-8">
                        <h2 className="text-5xl">ฟีเจอร์เพิ่มเติม</h2>
                        <p className="text-xl py-12 pr-24 h-52">
                            ดูรายละเอียดเพิ่มเติมเกี่ยวกับคุณสมบัติที่ยอดเยี่ยมของ
                            PS5
                        </p>
                        <Link to="/ps5-features">
                            <MainBtnWhite txt="เรียนรู้เพิ่มเติม" />
                        </Link>
                    </div>
                    <div className="mx-8">
                        <h2 className="text-5xl">ความบันเทิง</h2>
                        <p className="text-xl py-12 pr-24 h-52">
                            ดูว่า PS5
                            สามารถรวมสื่อและเนื้อหาเข้าด้วยกันในที่เดียวได้อย่างไร
                        </p>
                        <Link to="/ps5-entertainment">
                            <MainBtnWhite txt="เรียนรู้เพิ่มเติม" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Part18;
