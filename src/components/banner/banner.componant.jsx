import React from 'react';
import Typewriter from 'typewriter-effect';

const Banner = () =>{
    return(
        <div>
            <div className="banner-section" id="home">
                <div className="custom-container d-flex">
                    <div className="featured-post-left">

                    </div>
                    <div className="featured-post-right">
                        <div className="content-text">
                            <div className="tag text-white">My Portfolio</div>
                            <h1 className='feature-head-line title'>
                                <span>สวัสดี</span>
                                <Typewriter options={{strings:['ฉันชื่อ ณัฐธิชา' , 'ยินดีที่ได้รู้จัก'] ,
                                autoStart:true ,
                                loop : true}} />
                            </h1>
                            <p className='py-5 text-white banner-text'>
                                ยินดีที่ได้รู้จัก! ฉันชื่อ ณัฐธิชา ศรีเกิด มาจากมหาวิทยาลัยพระจอมเกล้าพระนครเหนือ วิทยาเขตปราจีนบุรี คณะเทคโนโลยีและการจักการอุตสาหกรรม สาขาเทคโนโลยีสารสนเทศ ฉันสามารถปรับตัวและพร้อมพัฒนาไปพร้อมกับคุณ!
                            </p>
                            <div className="site-list">
                                <a href="https://github.com/Nutticha">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;