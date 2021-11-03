import React, {useEffect, useState} from 'react';
import axios from "axios";

function Search({searchValue, onChangeSearchInput}) {
  const [temperature, setTemperature] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=c39746580aefa7518aa5aef5e6a680cb&units=metric')
          .then((res) => {
            setTemperature(res.data.main);
          });
      } catch (error) {
        alert('Error while requesting data');
      }
    }
    fetchData();
  }, []);

  return (
    <div className="search">
      <div className="search-text">
        <p className="search-header">Stay always tuned with planting trends</p>
        <p className="search-temperature">Current temperature is: {Math.round(temperature.temp)}°C</p>
        <div className="search-input">
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            type="text"
            placeholder="Search"
          />
          <img src="/img/search.png" alt="search icon" />
        </div>
      </div>

      <div className="search-img">
        <img src="/img/search-block_img.png" alt="block image" />
      </div>
    </div>
  );
}

export default Search;