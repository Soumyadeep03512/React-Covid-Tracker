import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "./graph.css";
const Graph = () => {
  const [graphvalue, setGraphValue] = useState([]);
  const chart = () => {
    let date = [];
    let confirmedCases = [];
    let recoveredCases = [];
    axios.get("https://api.covid19india.org/data.json").then((res) => {
      for (const dataObj of res.data.cases_time_series) {
        date.push(dataObj.date);
        confirmedCases.push(dataObj.dailyconfirmed);
        recoveredCases.push(dataObj.dailyrecovered);

      }
      setGraphValue({
        labels: date,
        datasets: [
          {
            label: "daily confirmed",
            data: confirmedCases,
            borderColor: "red",
            borderWidth: 0.5,
            fill: false
          },
          {
            label: "daily recovered",
            data: recoveredCases,
            borderColor: "green",
            borderWidth: 1,
            fill: false
          }
        ]
      });
    });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="graph">
      <Line
        data={graphvalue}
        options={{
          responsive: true,
          title: { text: "THICCNESS SCALE", display: true },
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 10,
                  beginAtZero: true
                },
                gridLines: {
                  display: false
                }
              }
            ],
            xAxes: [
              {
                gridLines: {
                  display: false
                }
              }
            ]
          }
        }}
      />{" "}
    </div>
  );
};
export default Graph;
