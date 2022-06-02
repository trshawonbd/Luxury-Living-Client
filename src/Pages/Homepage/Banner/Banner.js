import React from 'react';
import banner from '../../../Image_Icon/Image/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-7xl font-bold">We Build
                        Your Dream</h1>
                    <p className="py-6">Online Easte Agency, the mordern way to sell your own home,
                        You can use Griffin Residential to market your property. We have professionalism and expert expertise to make your dreams true.</p>
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;