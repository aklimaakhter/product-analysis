import React from 'react';
import { BarChart } from 'recharts';

import MyLineChart from '../MyLineChart/MyLineChart';
import SpecialChart from '../SpecialChart/SpecialChart';

const Dashboard = () => {
    return (
        <div>
            <h2>MONTH WISE SELL</h2>
            <MyLineChart></MyLineChart>
            <BarChart></BarChart>
            <h3>INVESTMENT VS REVENUE</h3>
            <SpecialChart></SpecialChart>
        </div>
    );
};

export default Dashboard;