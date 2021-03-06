import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>

            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    {/*  <!-- Page content here --> */}
                    <h2 className='text-3xl flex justify-center text-black-600'>Welcome to Your Dashboard</h2>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                        <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/*  <!-- Sidebar content here --> */}
                        
                        <li><Link to='/dashboard/addService'>Add a Service</Link></li>
                        
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;