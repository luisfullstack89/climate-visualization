// src/App.js
import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import LineChart from './components/line-chart';
import BarChart from './components/bar-chart';
import PieChart from './components/pie-chart';
import ScatterPlot from './components/scatter-plot';
import AreaChart from './components/area-chart';

const App = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [co2Data, setCo2Data] = useState([]);
  const [energyData, setEnergyData] = useState([]);
  const [temperatureVsCo2Data, setTemperatureVsCo2Data] = useState([]);
  const [seaLevelData, setSeaLevelData] = useState([]);

  useEffect(() => {
    // Fetch temperature data
    fetch('/data/temperature.json')
      .then(response => response.json())
      .then(data => setTemperatureData(data));

    // Fetch CO2 data
    fetch('/data/co2.json')
      .then(response => response.json())
      .then(data => setCo2Data(data));

    // Fetch energy data
    fetch('/data/energy.json')
      .then(response => response.json())
      .then(data => setEnergyData(data));

    // Fetch temperature vs CO2 data
    fetch('/data/tempvsco2.json')
      .then(response => response.json())
      .then(data => setTemperatureVsCo2Data(data));

    // Fetch sea level data
    fetch('/data/sealevel.json')
      .then(response => response.json())
      .then(data => setSeaLevelData(data));

  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="">
        <h1 className="text-3xl font-bold mb-4">Global Climate Change Visualization</h1>
        <div className="grid grid-cols-2 gap-1">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Global Temperature Anomalies</h2>
            <LineChart data={temperatureData} />
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">CO2 Emissions by Country</h2>
            <BarChart data={co2Data} />
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Energy Source Distribution</h2>
            <PieChart data={energyData} />
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Temperature vs CO2 Emissions</h2>
            <ScatterPlot data={temperatureVsCo2Data} />
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Sea Level Rise Over Time</h2>
            <AreaChart data={seaLevelData} />
          </div>
      </div>
    </div>
  );
};

export default App;
