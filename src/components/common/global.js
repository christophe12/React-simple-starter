import React from 'react';
import Header from '../common/header';

const Global = (props) => {
    // const { page, children } = props;
    return (
        <div>
            <div className="row main-app-wrapper">
                <div className="col-reset col-lg-3">
                    <Header view={props.page} />
                </div>
                <div className="col-reset col-lg-9">
                    {props.children}
                </div>
            </div>
        </div>
    );
}


export default Global;

