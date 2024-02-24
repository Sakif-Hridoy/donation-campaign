import React from 'react';
import PropTypes from 'prop-types';
import { Chart } from "react-google-charts";

import { getStoredDonationService } from '../Utility/localStorage';
import { useLoaderData } from 'react-router-dom';


const Statistics = props => {
    const donationId = getStoredDonationService();
    const dataSets = useLoaderData();

    const data = [
            ["Task","Hours per Day"],
            ["Total Donation",dataSets.length],

            ["Your Donation",donationId.length],


    ];

    const options = {
        title:"Donation Activities"
    }

    return (
        <div className='max-w-xl m-auto my-[5 rem]'>
           <Chart 
           chartType='PieChart'
           data={data}
           options = {options}
           width={"130%"}
           height={"430px"}
           >

           </Chart>
        </div>
    );
};

Statistics.propTypes = {
    
};

export default Statistics;