import React from 'react';
import companyLogo from '../../../assets/images/2.png';

const Header = () => {
    return(
        <div className="main-header row">
            <div className="logo-container row">
                <img src={companyLogo} />
            </div>
            <div className="nav-container row">
                <ul className="side-menu">
                    <li><a href="#" className="side-menu__item-a active">home</a></li>
                    <li><a href="#" className="side-menu__item-a">About</a></li>
                    <li><a href="#" className="side-menu__item-a">Our Products</a></li>
                    <li><a href="#" className="side-menu__item-a">Stories</a></li>
                    <li><a href="#" className="side-menu__item-a">Team</a></li>
                </ul>
            </div>

            <div className="copyright row">
                <p className="copyright__p">&copy;2018 DMM.Hehe. All rights reserved</p>
            </div>
        </div>
    );
};

export default Header;
