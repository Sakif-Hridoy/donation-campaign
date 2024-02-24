import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import "./Home.css";
import { useEffect, useState } from "react";
import Donations from "../Donations/Donations";

const Home = () => {
  const [results, setResults] = useState([]);
  console.log(results);
  const [featuredData, setFeaturedData] = useState([]);
  // const [input,setInput] = useState("");
  // console.log(typeof featuredData);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setFeaturedData(data)),
      setResults(results);
  }, []);
  return (
    <div>
      <div className="home-bg h-[450px]"></div>
      <div className="positions mt-[-300px]">
        <SearchBar data={featuredData} setResults={setResults}></SearchBar>
      </div>
      <div>
        <div className="grid md:grid-cols-4 gap-4 overflow-hidden m-5 mt-10">
          {results.map((result) => (
            <div
              key={result.id}
              style={{ background: result.cardBg }}
              className="card w-86 bg-base-100 shadow-xl"
            >
              <div className="card-body">
                <figure>
                  <img src={result.picture} alt="Shoes" />
                </figure>
                <p
                  className="w-[75px] text-center"
                  style={{ background: result.categoryBg }}
                >
                  {result.category}
                </p>
                <h2 style={{ color: result.textColor }} className="card-title">
                  {result.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-4 gap-4 overflow-hidden m-5 mt-10">
          {featuredData.map((data) => (
            <Donations key={data.id} data={data}></Donations>
          ))}
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

Home.propTypes = {};

export default Home;
