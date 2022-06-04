import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import Service from './Service';

const Services = () => {
    const { isLoading, refetch, data: services } = useQuery(['service'], () =>
     fetch(`http://localhost:5000/service`,
     {
        method:'GET',
         headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        } 
     })
    .then(res =>
       res.json()
     )

   )

   if (isLoading){
       return <Loading></Loading>
   }
    return (
        <div>
            <div className='text-center py-8'>
                <h3 className='text-2xl'>All Services: {services.length}</h3>
            </div>
            <div className='grid lg:grid-cols-3 gap-4 m-8'>
                {
                    services.map((service) =>
                        <Service
                        key={service._id}
                        service = {service}
                        ></Service>
                    )
                }

            </div>
        </div>
    );
};

export default Services;