import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const ServiceDetaills = () => {
    const navigate = useNavigate();

    const param = useParams();

    const {id} = param;

    const [user, loading, error] = useAuthState(auth);

    const url = `http://localhost:5000/service/${id}`;

    const {data: serviceDetails, isLoading, refetch} = useQuery(['details', id], () =>
    fetch(url, {
        method: 'GET',
        headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`

        }
    })
    .then(res => res.json())
    )

    if (isLoading){
        return <Loading></Loading>
    }

    
    return (
        <div>
            this is service details
        </div>
    );
};

export default ServiceDetaills;