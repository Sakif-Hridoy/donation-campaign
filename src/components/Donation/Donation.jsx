import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationService } from "../Utility/localStorage";

const Donation = (props) => {
  const donations = useLoaderData();
  console.log(donations);

  const [donatedServices, setDonatedServices] = useState([]);

  const [dataLength,setDatalength] = useState(4);


  useEffect(() => {
    const storedDonatedIds = getStoredDonationService();

    if (donations.length > 0) {
      const storedDonation = [];
      console.log(storedDonation);

      for (const id of storedDonatedIds) {
        const donation = donations.find((donation) => donation.id === id);
        if (donation) {
          storedDonation.push(donation);
        }
      }
      setDonatedServices(storedDonation);
      console.log(donations, storedDonatedIds);
      console.log(typeof storedDonatedIds);
      console.log(donatedServices.length);
    }
  }, []);

  return (
    <div>
    <div className="grid grid-cols-2 gap-4">
      {/* <h2 className="text-3xl">Donations {donatedServices.length}</h2> */}
    
        {donatedServices.slice(0,dataLength).map(donation=> <div style={{background:donation.cardBg}} key={donation.id} className="card card-side bg-base-100 shadow-xl m-10">
        <figure>
          <img
          className="p-4"
            src={donation.picture}
            alt=""
          />
        </figure>
        <div className="card-body">
          <p className="card-title justify-center w-[95px]" style={{background:donation.categoryBg}}>{donation.category}</p>
         <h2 style={{color:donation.textColor}} className="text-2xl font-semibold">{donation.title}</h2>
         <p style={{color:donation.textColor}} className="">{donation.price}</p>
          <div className="card-actions justify-start">
            <button style={{background:donation.textColor}} className="btn text-white">View Details</button>
          </div>
        </div>
      </div>)}
      
    </div>
    <div className={`dataLength === donations.length ? 'hidden' : ''  text-center `}>
                <button onClick={()=>setDatalength(donations.length)}className='btn bg-green-600 text-white'>Show All</button>
            </div>
    </div>
  );
};

Donation.propTypes = {};

export default Donation;
