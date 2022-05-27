import React from 'react';
import SectionTop from '../sectiontop/sectiontop.component';

const AboutMe = () => {
    return (
        <div className='col-lg-7'>
            <SectionTop Title="สวัสดีจ้า ทุกคน" subTitle="เกี่ยวกับฉัน"/>

            <div className="description">
                <p>สวัสดีคะ ดิชั้นชื่อ นางสาวณัฐธิชา ศรีเกิด ชื่อเล่น มายด์ อายุ 21 ปี มาจากมหาวิทยาลัยพระจอมเกล้าพระนครเหนือ วิทยาเขตปราจีนบุรี คณะเทคโนโลยีและการจักการอุตสาหกรรม สาขาเทคโนโลยีสารสนเทศ ปีที่ 4 </p>
                <SectionTop subTitle = "ข้อมูลส่วนตัว"></SectionTop>
                <p>ชื่อ นางสาวณัฐธิชา ศรีเกิด ชื่อเล่น มายด์ อายุ 21 ปี วันเกิด 22 มีนาคม 2544  ที่อยู่ปัจจุบัน 208 หมู่ 4 ตำบน คานหาม อำเภอ อุทัย จังหวัด พระนครศรึอยุธยา 13210</p>
                <p>ภาษาที่ถนัด JAVA PYTHON JAVASCRIPT PHP C++ </p>
                <p>ความถนัด </p>
            </div>

            <div className="email position-relative">
                nutticha30234@gmail.com
            </div>

        </div>
    )
}
export default AboutMe;