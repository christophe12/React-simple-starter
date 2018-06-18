import React from 'react';
import Global from '../common/global';

const Story = () => {
    return (
        <Global page='story'>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                    <img src="" />
                    <div className="product-name"></div>
                    <div className="product-price"></div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </Global>
    );
}

export default Story;