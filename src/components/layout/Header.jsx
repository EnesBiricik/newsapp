import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';
import Weather from '../Weather';

export const Header = () => {
    const [locationInfo, setLocationInfo] = useState({ city: '', temperature: '31°C', date: '' });
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        // Tarihi ayarlamak
        const now = new Date();
        const formattedDate = now.toLocaleDateString('en-US', {
            weekday: 'short',
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });

        // Geolocation API'sini kullanarak kullanıcının konumunu almak
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`); // Konum bilgilerini konsola yazdırma

                    // Konum bilgilerini coğrafi kodlama servisi ile şehre dönüştürmek (örneğin, OpenCage, Google Maps)
                    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_API_KEY`) // API anahtarınızı buraya koyun
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.json();
                        })
                        .then(data => {
                            console.log(data); // Verileri konsola yazdırma
                            const city = data.results[0].components.province || data.results[0].components.town || data.results[0].components.village;
                            setLocationInfo({ city, temperature: '31°C', date: formattedDate });
                        })
                        .catch(error => {
                            console.error('Error fetching geocode data:', error);
                            setErrorMsg('Konum bilgisi alınamadı.');
                        });
                },
                (error) => {
                    console.error('Geolocation error:', error);
                    setErrorMsg('Konum bilgisi alınamadı.');
                }
            );
        } else {
            setErrorMsg('Tarayıcı konum servisini desteklemiyor.');
        }
    }, []);

    const [weather, setWeather] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const apiKey = "YOUR_API_KEY";
                const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationInfo.city}`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                console.log(data.current)
                setWeather(data.current);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <Fragment>
            <div className="container-fluid sticky-top px-0">
                <Spinner date={locationInfo.date}/>
                <div className="container-fluid bg-light">
                    <div className="container px-0">
                        <nav className="navbar navbar-light navbar-expand-xl">
                            <a href="/" className="navbar-brand mt-3">
                                <p className="text-primary display-6 mb-2" style={{ lineHeight: '0' }}>Newsers</p>
                                <small className="text-body fw-normal" style={{ letterSpacing: '12px' }}>Nespaper</small>
                            </a>
                            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="fa fa-bars text-primary"></span>
                            </button>
                            <div className="collapse navbar-collapse bg-light py-3" id="navbarCollapse">
                                <div className="navbar-nav mx-auto border-top">
                                    <Link to="/" className='nav-item nav-link active'>Home</Link>
                                    <Link to="ErrorPage" className='nav-item nav-link'>Error Page</Link>
                                    <Link to="ContactPage" className='nav-item nav-link'>Contact Us</Link>
                                </div>
                                <div className="d-flex flex-nowrap border-top pt-3 pt-xl-0">
                                    <Weather weather={weather} locationInfo={locationInfo} errorMsg={errorMsg}/>
                                    <button className="btn-search btn border border-primary btn-md-square rounded-circle bg-white my-auto" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary"></i></button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </Fragment>

    );
};

export default Header;
