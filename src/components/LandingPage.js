import React from 'react'
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrentWeather } from './store/actions/weatherActions'

import SearchBox from './SearchBox';
import WeatherDetails from './WeatherDetails';


const LandingPage = () => {
    const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});
  const [isWeather, setIsWeather] = useState(false);

  useEffect(() => {
    setLocation(props.weather.location);
    setWeather(props.weather.weather);
    if(Object.keys(location).length > 0 || Object.keys(weather).length > 0) {
      setIsWeather(true);
    }
  })

    return (
        <div className="landing_page">
      <SearchBox getCurrentWeather={ props.getCurrentWeather } />
      { isWeather &&
        <WeatherDetails location={ location } weather={ weather } />
      }
    </div>
    )
}

const mapStateToProps = state => {
    return {
      weather: state.weather
    }
  }

export default connect(mapStateToProps, { getCurrentWeather }) (LandingPage);
