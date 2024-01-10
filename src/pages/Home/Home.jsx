import React, { useEffect, useState } from "react";
import axios from "axios";
import OverView from "../../components/layout/home/overview/OverView";
import Chart from "../../components/layout/home/Chart/Chart";
import BestSeller from "../../components/layout/home/BestSeller/BestSeller";
import Comments from "../../components/layout/home/comments/Comments";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/product.json").then((response) => {
      console.log(response.data);
      setData(response?.data);
    });
  }, []);

  return (
    <div className="flex gap-[4rem] max-lg:gap-3 max-md:flex-col">
      <div className="md:w-3/4">
        <OverView />
        <Chart data={data} />
      </div>
      <div className="w-1/4 max-lg:w-auto ">
        <BestSeller data={data} />
        <Comments data={data} />
      </div>
    </div>
  );
};

export default Home;
