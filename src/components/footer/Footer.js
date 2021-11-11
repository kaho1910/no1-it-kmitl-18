import React from "react";
import FootLink from "./FootLink";
import "./Footer.css";
import ps from "../../img/footer/ps-logo.svg";
import sony from "../../img/footer/sony-ie.svg";
import language from "../../img/footer/language.svg";

function Footer() {
    return (
        <div className="footer p-16 leading-6 grid grid-cols-2">
            <div className="pl-24 pt-3">
                <div className="h-1/2 grid grid-cols-1 -space-y-6">
                    <img src={ps} width="108px" alt="ps logo" />
                    <div className="justify-self-start">
                        <img
                            className="inline pr-2 cursor-pointer"
                            src={language}
                            alt="lang"
                        />
                        <p className="inline text-base cursor-pointer">
                            ประเทศ / เขตภูมิภาค: Thailand
                        </p>
                    </div>
                </div>
                <div className="h-1/2 grid grid-cols-1">
                    <img
                        className="mt-24 mb-3"
                        src={sony}
                        width="18.5%"
                        alt="sony logo"
                    />
                    <p className="justify-self-start text-sm">
                        ©2021 Sony Interactive Entertainment Inc. All Rights
                        Reserved.
                    </p>
                </div>
            </div>
            <div className="pr-24 pl-3 grid grid-cols-3 justify-items-start">
                <div>
                    <FootLink>ความช่วยเหลือ</FootLink>
                    <FootLink>นโยบายความเป็นส่วนตัว</FootLink>
                    <FootLink>ข้อกำหนดและเงื่อนไข</FootLink>
                    <FootLink>PlayStation Studios</FootLink>
                    <FootLink>ข้อมูลด้านกฎหมาย</FootLink>
                    <FootLink>เกี่ยวกับ SIE</FootLink>
                    <FootLink>PlayStation และสิ่งแวดล้อม</FootLink>
                </div>
                <div className="ml-1">
                    <FootLink>ข้อกำหนด และข้อตกลงในการใช้งาน</FootLink>
                    <FootLink>
                        นโยบายการขอยกเลิกการสั่งซื้อใน PlayStation Store
                    </FootLink>
                    <FootLink>คำเตือนด้านสุขภาพ</FootLink>
                    <FootLink>เกี่ยวกับการให้คะแนน</FootLink>
                    <FootLink>งานที่ PlayStation</FootLink>
                    <FootLink>การใช้งานเครื่องหมายการค้า</FootLink>
                    <FootLink>
                        ความสัมพันธ์ระหว่างผู้จัด
                        <br />
                        จำหน่าย&นักพัฒนา
                    </FootLink>
                    <FootLink>แผนผังเว็บไซต์</FootLink>
                </div>
                <div className="ml-3">
                    <FootLink>Facebook</FootLink>
                    <FootLink>YouTube</FootLink>
                    <FootLink>Instagram</FootLink>
                    <FootLink>Twitter</FootLink>
                </div>
            </div>
        </div>
    );
}

export default Footer;
