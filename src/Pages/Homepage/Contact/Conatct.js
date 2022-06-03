import React from 'react';
import { useForm } from 'react-hook-form';

const Conatct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = data => {
        console.log(data);

    }
    return (
        <div className='my-8 bg-'>
            <div className='text-center py-8'>
                <h3 className='text-xl'>Contact</h3>
                <h3 className='text-5xl font-bold mb-12'>Let us handle your
                    <br />
                    project, professionally.</h3>
            </div>

            <div className='flex justify-center items-center'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <div className='flex justify-center items-center gap-2'>
                                    <div className="form-control w-full max-w-xs">
                                        <input type="text"
                                            placeholder="Your First Name"
                                            className="input input-bordered w-full max-w-xs"
                                            {...register("fName", {
                                                required: {
                                                    value: true,
                                                    message: 'First Name is required'
                                                },
                                            })}
                                        />
                                        <label className="label">
                                            {errors.fName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.fName.message}</span>}
                                        </label>
                                    </div>

                                    <div className="form-control w-full max-w-xs">

                                        <input type="text"
                                            placeholder="Your Last Name"
                                            className="input input-bordered w-50 max-w-xs"
                                            {...register("lName", {
                                                required: {
                                                    value: true,
                                                    message: 'Last Name is required'
                                                },
                                            })}
                                        />
                                        <label className="label">
                                            {errors.lName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.lName.message}</span>}

                                        </label>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <div className="form-control w-full max-w-xs">

                                        <input type="number"
                                            placeholder="Your Phone No"
                                            className="input input-bordered w-50 max-w-xs"
                                            {...register("phone", {
                                                required: {
                                                    value: true,
                                                    message: 'Phone is required'
                                                },
                                            })}
                                        />
                                        <label className="label">
                                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        </label>
                                    </div>

                                    <div className="form-control w-full max-w-xs">

                                        <input type="email"
                                            placeholder="Your Email"
                                            className="input input-bordered w-50 max-w-xs"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: 'Email is required'
                                                },
                                                pattern: {
                                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                    message: 'Provide a valid email'
                                                }

                                            })}
                                        />
                                        <label className="label">
                                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        </label>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <div className="form-control w-full max-w-2xl">

                                        <textarea type="text"
                                            placeholder="Your Message"
                                            className="input input-bordered w-full h-40 "
                                            {...register("msg", {
                                                required: {
                                                    value: true,
                                                    message: 'Message is required'
                                                },
                                            })}
                                        />
                                        <label className="label">
                                            {errors.msg?.type === 'required' && <span className="label-text-alt text-red-500">{errors.msg.message}</span>}

                                        </label>


                                    </div>
                                </div>

                                {/* {SignInErrorMessage} */}
                                <div className='flex justify-center items-center'>
                                    <input className='btn w-full max-w-xs text-white' type="submit" value='Send Message' />
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>

    );
};

export default Conatct;