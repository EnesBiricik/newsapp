import React, { Fragment } from 'react'

export const Weather = ({weather, locationInfo, errorMsg}) => {
    return (
        <Fragment>
            <div className="d-flex">
                <img src="img/weather-icon.png" className="img-fluid w-100 me-2" alt="" />
                <div className="d-flex align-items-center">
                    <span>
                        <img
                            src={weather && weather.condition && weather.condition.icon
                                ? weather.condition.icon
                                : '../assets/img/stockWeatherIcon.png'}
                            alt="Weather Icon" width={'40rem'} height={'40rem'}
                        />
                    </span>

                    <strong className="fs-4 text-secondary">{weather.temp_c}°C</strong>
                    <div className="d-flex flex-column ms-2" style={{ width: '150px' }}>
                        {errorMsg ? (
                            <span className="text-body">{errorMsg}</span>
                        ) : (
                            <span className="text-body">{locationInfo.city}</span>
                        )}
                        <small>{locationInfo.date}</small>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Weather
