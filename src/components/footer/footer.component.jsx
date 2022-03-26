import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return(
        <footer className='footer'>
            <div className="bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="copyright">
                                &copy; 2022 Portfolio , Create by ....
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <ul className='footer-widget-nav'>
                                <li>
                                    <HashLink smooth to={'#home'}>Home</HashLink>
                                </li>
                                <li>
                                    <HashLink smooth to={'#about'}>About</HashLink>
                                </li>
                                <li>
                                    <HashLink smooth to={'#service'}>Service</HashLink>
                                </li>
                                <li>
                                    <HashLink smooth to={'#resume'}>Resume</HashLink>
                                </li>
                                <li>
                                    <HashLink smooth to={'#portfolio'}>Portfolio</HashLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;