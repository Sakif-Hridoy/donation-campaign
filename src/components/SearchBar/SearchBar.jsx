import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";

const SearchBar = ({data,setResults}) => {
  // console.log(data)
  const [category] = data;
  // console.log(category)
 const [input,setInput] = useState("");

 const fetchData = (value)=>{
  const results = data.filter((category)=>{
    return(
      value && category.category && category.category.toLowerCase().includes(value)
    )
    
  })
  // console.log(results)
  setResults(results)

 }

const handleChange = (value)=>{
  setInput(value);
  fetchData(value);

}

const handleClick = (value)=>{

}
  return (
    <div className="mb-[300px]">
      <div className="pt-[85px]">
      <h2 className="text-5xl text-center font-bold">
        I Grow By Helping People In Need
      </h2>
      </div>
      <div className="flex mt-[90px] mx-auto text-center justify-center">
        <input
        placeholder="Type a Category Name"
          type="text"
          value={input}
          onChange={(e)=>handleChange(e.target.value)}
          className="border w-[420px] h-[48px] search-input rounded"
        />
        <button onClick={handleClick} className="btn btn-error w-[120px] ml-4 search-button cursor-pointer">Search</button>
      </div>
    </div>
  );
};

// SearchBar.propTypes = {};

export default SearchBar;
