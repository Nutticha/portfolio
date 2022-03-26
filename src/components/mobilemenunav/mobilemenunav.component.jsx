import React from 'react';
import { HashLink } from 'react-router-hash-link';

const MobileMenuNav = () =>{
    return(
        <nav className="offcanvas-navigation">
            <ul>
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
        </nav>
    )
}
export default MobileMenuNav;