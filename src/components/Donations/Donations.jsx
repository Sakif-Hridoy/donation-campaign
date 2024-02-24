import React from "react";
import { Link } from 'react-router-dom';

const Donations = (data) => {
    // console.log(data.data.cardBg)
  return (
    <div>
      <Link to={`/donation/${data.data.id}`}><div  style={{background:data.data.cardBg}} className="card w-86 bg-base-100 shadow-xl">
        <div className="card-body">
        <figure>
          <img
            src={data.data.picture}
            alt="Shoes"
            />
        </figure>
        <p className="w-[75px] text-center" style={{background:data.data.categoryBg}}>{data.data.category}</p>
          <h2 style={{color:data.data.textColor}} className="card-title">{data.data.title}</h2>
          
        </div>
   
      </div>
      </Link>
    </div>
  );
};

Donations.propTypes = {};

export default Donations;
