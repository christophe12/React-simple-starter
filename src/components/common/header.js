import React from 'react';
import companyLogo from '../../../assets/images/2.png';

const Header = () => {
	return (
		<div className="row main-header">
			<div className="logo-container row">
				<img src={companyLogo}/>
			</div>
			<div className="nav-container row">
				&nbsp;
			</div>
		</div>
	);
};

export default Header;