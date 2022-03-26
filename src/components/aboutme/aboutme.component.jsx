import React from 'react';
import SectionTop from '../sectiontop/sectiontop.component';

const AboutMe = () => {
    return (
        <div className='col-lg-7'>
            <SectionTop Title="สวัสดีจ้าทุกคน" subTitle="เกี่ยวกับฉัน"/>

            <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur harum provident quod adipisci eligendi blanditiis nam, debitis praesentium culpa cupiditate voluptas porro iusto maxime facere dicta ea perferendis modi deserunt.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reprehenderit possimus laborum, modi quasi consectetur voluptate ad iusto, magni minima, autem explicabo obcaecati alias! Eligendi quam praesentium omnis quo eaque?</p>
            </div>

            <div className="email position-relative">
                yourmail@email.com
            </div>

        </div>
    )
}
export default AboutMe;