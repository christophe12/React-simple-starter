import React from 'react';
import Header from '../common/header';

const Global = (props) => {
    return (
        <div>
            <div className="row main-app-wrapper">
                <div className="col-reset col-lg-3">
                    <Header />
                </div>
                <div className="col-reset col-lg-9">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Global;