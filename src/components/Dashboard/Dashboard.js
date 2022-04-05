import React from 'react';


import MyLineChart from '../MyLineChart/MyLineChart';
import SpecialChart from '../SpecialChart/SpecialChart';

const Dashboard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <h2>MONTH WISE SELL</h2>
                <MyLineChart></MyLineChart>
            </div>
            
            <div>
                <h3>INVESTMENT VS REVENUE</h3>
                <SpecialChart></SpecialChart>
            </div>
        </div>
    );
};

export default Dashboard;