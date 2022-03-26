import React from 'react';
import MobileMenuNav from '../mobilemenunav/mobilemenunav.component';


const MobileMenu = () =>{
    const closeMobileMenu = () => {
        const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
        offcanvasMobileMenu.classList.remove('active');
    }
    return(
        <div className="offcanvas-mobile-menu" id="offcanvas-mobile-menu">
            <button className="offcanvas-mobile-close"
            id = "offcanvas-mobile-close"
            onClick={() => closeMobileMenu()}>
                <i className="fad fa-times"></i>
            </button>
            <div className="offcanvas-wrapper">
                <div className="offcanvas-inner-content">
                   <MobileMenuNav />
                </div>
            </div>
        </div>
    )
}
export default MobileMenu;