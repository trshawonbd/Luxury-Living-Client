import React from 'react';

const Service = ({service}) => {
    const {serviceName, picture, price, description} = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={picture} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{serviceName}</h2>
                <h2 class="card-title">${price}</h2>
                <p>{description}</p>
                <div class="card-actions">
                    <button class="btn btn-primary text-white">Booked</button>
                </div>
            </div>
        </div>
    );
};

export default Service;