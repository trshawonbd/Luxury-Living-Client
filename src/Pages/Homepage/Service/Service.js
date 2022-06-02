import React from 'react';
import image1 from '../../../Image_Icon/Icon/affordable 1.png';
import image2 from '../../../Image_Icon/Icon/apartment 1.png';
import image3 from '../../../Image_Icon/Icon/lessee 1.png';
import './Service.css'

const Service = () => {
    return (
        <div>
            <div className='text-center py-8'>
                <h3 className='text-xl'>Services</h3>
                <h3 className='text-5xl font-bold mb-12'>We're an agency tailored to all
                    <br />
                    clients needs that always delivers</h3>
            </div>

            <div className="grid lg:grid-cols-3 justify-items-center  gap-1 ">
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-24 w-24' src={image1} alt="Shoes" /></figure>
                    <div class="card-body justify-center items-center">
                        <h2 class="card-title text-2xl">Office Interior Design</h2>
                        <p className='text-xl font-bold'>$299</p>
                        <p className='text-lg text-justify'>Small office interior designs are majorly taken for granted when considered through design aspects. But, even smaller office spaces could be creatively crafted into an inspiring work environment. The Small Office Interior Designs focuses on the office spaces with comparatively smaller carpet areas.</p>
                    </div>
                </div>
                <div class="card w-96 service-background shadow-xl">
                    <figure><img className='h-24 w-24' src={image2} alt="Shoes" /></figure>
                    <div class="card-body justify-center items-center">
                        <h2 class="card-title text-2xl">Showroom Design</h2>
                        <p className='text-xl font-bold'>$399</p>
                        <p className='text-lg text-justify'> Offering casual housing consultation over a cup of coffee, the lounge regularly hosts a variety of seminars, workshops, art exhibitions, and other contents that lead to a fulfilling lifestyle. The lounge is also equipped with an open design studio function to help visitors feel more comfortable with the architects.</p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-24 w-24' src={image3} alt="Shoes" /></figure>
                    <div class="card-body justify-center items-center">
                        <h2 class="card-title text-2xl">Residential/ Home</h2>
                        <p className='text-xl font-bold'>$499</p>
                        <p className='text-lg text-justify'>Residential care involves someone leaving their home, memories and belongings to relocate into a facility dedicated to round the clock care. Some care homes allow residents to come and go. Home care is flexible and can be anything from a couple of visits a week right through to 24/7 live in care.</p>
                    </div>
                </div>

            </div>

            <div class="card-actions justify-center my-8">
                <button class="btn btn-primary text-white">Explore More</button>
            </div>
        </div>
    );
};

export default Service;