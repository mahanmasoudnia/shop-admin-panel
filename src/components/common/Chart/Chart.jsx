import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0", "#00D9E9"];

const ShareChart = ({ label, data }) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

  const series = [
    {
      data: data,
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: label, // Assuming label is an array of categories
      labels: {
        style: {
          colors: colors,
          fontSize: "12px",
        },
      },
    },
  };
  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default ShareChart;
