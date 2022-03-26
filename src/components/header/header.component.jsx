import React , {useState , useEffect}  from 'react';
import { HashLink } from 'react-router-hash-link';
import MobileMenu from '../mobilemenu/mobilemenu.component';



const Header = () => {
    const[scroll , setScroll] = useState(0);
    const[headerTop , setHeaderTop] = useState(0);

    useEffect(() =>{
        const header = document.getElementById('header');
        setHeaderTop(header.offsetTop);
        window.addEventListener('scroll' , handleScroll);

        return() => {
            window.removeEventListener('scroll' , handleScroll);
        }
    } , [])

    const handleScroll = () =>{
        setScroll(window.scrollY);
    }

    const triggerMobileMenu = () =>{
        const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
        offcanvasMobileMenu.classList.add('active');
    }
    return(
        <header id='header' className= {`header header-style ${scroll > headerTop ? "stick" : ""}`}>
                <div className="container">
                    <div className="flex-heaber d-flex justify-content-between align-items-center">
                        <div className="socials-list">
                            <a href="">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                            <a href="">
                                <i className="fab fa-line"></i>
                            </a>
                            <a href="">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        <div className="content-menu d-lg-flex">
                            <div className="nav-wrap">
                                <div className="nav mainnav">
                                    <ul className="menu">
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
                            <div className="mobile-off-canvas d-block d-lg-none">
                                <button className="mobile-aside-button" onClick={() =>triggerMobileMenu()}>
                                    <i className="fad fa-bars"></i>
                                </button>
                            </div>
                        </div>
                        <MobileMenu />
                    </div>
                </div>
        </header>
    )
}
export default Header;