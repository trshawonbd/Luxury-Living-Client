import React from 'react';
import './Projects.css';
import image1 from '../../../Image_Icon/Image/bernard-hermant-6ftZuO_-b64-unsplash 1.png';
import image2 from '../../../Image_Icon/Image/Mask Group.png';
import image3 from '../../../Image_Icon/Image/Mask Group-1.png';
import map from '../../../Image_Icon/Icon/map-pin-2-fill.png';

const Projects = () => {
    return (
        <div className='project-background '>
            <div className='text-center py-8'>
                <h3 className='text-xl'>Projects</h3>
                <h3 className='text-5xl font-bold mb-12'>Discover the latest Interior Design
                    available today</h3>
            </div>

            <div className="grid lg:grid-cols-3 justify-items-center  gap-4 ">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='h-96 w-full' src={image1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Villa on Washington Avenue</h2>
                    <div className='flex flex-row justify-center items-center'>
                        <div className='px-5'>
                            <img className='bg-primary w-5 h-5' src={map} alt="" />
                        </div>
                        <div className='text-xl'>
                            Dhaka, Bangladesh
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='h-96 w-full' src={image2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Luxury villa in Rego Park</h2>
                    <div className='flex flex-row justify-center items-center'>
                        <div className='px-5'>
                            <img className='bg-primary w-5 h-5' src={map} alt="" />
                        </div>
                        <div className='text-xl'>
                            Dhaka, Bangladesh
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='h-96 w-full'  src={image3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Gorgeous house</h2>
                    <div className='flex flex-row justify-center items-center'>
                        <div className='px-5'>
                            <img className='bg-primary w-5 h-5' src={map} alt="" />
                        </div>
                        <div className='text-xl'>
                            Dhaka, Bangladesh
                        </div>
                    </div>

                </div>
            </div>
            </div>

        </div>
    );
};

export default Projects;