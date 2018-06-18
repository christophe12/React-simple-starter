import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../../../assets/images/2.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footerText: "2018 DMM.Hehe. All rights reserved"
        };
    }

    componentDidMount() {
        console.log('after');
    }

    componentWillMount() {
        //mbere yuko component iba rendered
        if(this.props.view === 'homepage') {
            this.setState({
                footerText: "2019"
            });
        }

        console.log('before');
    }

    render() {
        return(
            <div>
            <div className="main-header row">
                <div className="logo-container row">
                    <img src={companyLogo} />
                </div>
                <div className="nav-container row">
                    <ul className="side-menu">
                        <li><Link to="/" className={this.props.view === 'homepage' ? 'side-menu__item-a active' : 'side-menu__item-a'}>home</Link></li>
                        <li><Link to="/about" className="side-menu__item-a">About</Link></li>
                        <li><Link to="/product" className="side-menu__item-a">Our Products</Link></li>
                        <li><Link to="/story" className="side-menu__item-a">Stories</Link></li>
                        <li><a href="#" className="side-menu__item-a">Team</a></li>
                    </ul>
                </div>
    
                <div className="copyright row">
                    <p className="copyright__p">{`&copy;${this.state.footerText}`}</p>
                </div>
            </div>
            </div>
        );
    }
};

export default Header;
