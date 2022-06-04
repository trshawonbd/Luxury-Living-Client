import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';

const AddService = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey ="5013833aebae0eedbc72b8f4f357d327";

    const onSubmit = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const storageURL = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        reset();

        fetch(storageURL, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url;
                const service = {
                    
                }
            }
        })

    }
    return (
        <div className='addService-background h-screen'>
            Here is the place where you can add a service

            <div className='m-6'>
                <div class="card w-full bg-slate-100 text-primary-content">
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex gap-4'>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Service Name</span>
                                    </label>
                                    <input type="text"
                                        placeholder="Service Name"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("serviceName", {
                                            required: {
                                                value: true,
                                                message: 'Service Name is required'
                                            },
                                        })}
                                    />
                                    <label className="label">
                                        {errors.serviceName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.serviceName.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="file"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("image", {
                                            required: {
                                                value: true,
                                                message: 'Image is required'
                                            },
                                        })}
                                    />
                                    <label className="label">
                                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Service Description</span>
                                    </label>
                                    <textarea type="text"
                                        placeholder="Service description"
                                        className="input input-bordered w-full h-40 max-w-xs"
                                        {...register("description", {
                                            required: {
                                                value: true,
                                                message: 'First Name is required'
                                            },
                                        })}
                                    />
                                    <label className="label">
                                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                                    </label>
                                </div>
                                <div className='flex justify-start items-center'>
                                    <input className='btn w-full max-w-xs text-white' type="submit" value='Submit' />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;