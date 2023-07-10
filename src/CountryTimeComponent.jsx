import React, { useState, useEffect } from 'react';
import './App.css'

function CountryTimeComponent() {
  const [countryTimes, setCountryTimes] = useState([]);

  useEffect(() => {
    async function fetchCountryTimes() {
      try {
        const response = await fetch('http://worldtimeapi.org/api/timezone/Asia');
        const timezones = await response.json();
        // not using this countris cause only want to know the list
        const countries = timezones.map((timezone) => timezone.split('/')[1]);
        // just set up the countries from the list
        const uniqueCountries = ['Jakarta','Tokyo','Singapore'];
      

        const countryTimes = await Promise.all(
          uniqueCountries.map(async (country) => {
            const countryResponse = await fetch(`http://worldtimeapi.org/api/timezone/Asia/${country}`);
            const countryData = await countryResponse.json();
           
            return {
              country,
              time:  countryData.datetime.slice(11,19)
            };
          })
        );

        setCountryTimes(countryTimes);
      } catch (error) {
        console.error('Error fetching country times:', error);
      }
    }

    fetchCountryTimes();
      const interval = setInterval(fetchCountryTimes, 1000); // Update time every second

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {countryTimes.map((countryTime) => (
        <div key={countryTime.country}>
          
            <div className="time-display">
             <div>
              {countryTime.country}
              </div>
              <div>
             :
              </div>
              <div>
            {countryTime.time}
              </div>
           </div>
         
        </div>
      ))}
    </div>
  );
}

export default CountryTimeComponent;


