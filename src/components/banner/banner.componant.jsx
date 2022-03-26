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
                            <div className="tag text-white">WEB DESIGN</div>
                            <h1 className='feature-head-line title'>
                                <span>สวัสดี</span>
                                <Typewriter options={{strings:['ฮาโหลล' , 'คำถัดไป'] ,
                                autoStart:true ,
                                loop : true}} />
                            </h1>
                            <p className='py-5 text-white banner-text'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, dolorum repellat ipsa cumque quibusdam sit eveniet incidunt obcaecati suscipit odio id repellendus delectus hic, asperiores fugiat? Numquam voluptatum eaque quo?
                            </p>
                            <div className="site-list">
                                <a href="">
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