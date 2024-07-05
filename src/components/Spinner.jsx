import React, { Fragment, useEffect, useState } from 'react'

export const Spinner = ({ date }) => {

    const [currencyData, setCurrencyData] = useState(null); // Başlangıçta null olarak ayarladık
    const [loading, setLoading] = useState(true);
    const [mainCur, setMainCurrency] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const apiKey = "35001acb0614390fe34afb4f"
                const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                setMainCurrency(data.base_code);

                // Sadece belirli döviz kurlarını alıyoruz
                const selectedCurrencies = {
                    EUR: data.conversion_rates['EUR'],
                    TRY: data.conversion_rates['TRY'],
                    GBP: data.conversion_rates['GBP'],
                    CNY: data.conversion_rates['CNY']
                };

                setCurrencyData(selectedCurrencies);
                setLoading(false);
            } catch (error) {
                setError(error.message); // Hata mesajını state'e kaydediyoruz
                setLoading(false);
            }
        };

        fetchCurrencyData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>; // Hata mesajını ekrana yazdırıyoruz
    }

    if (!currencyData) {
        return null; // currencyData henüz yüklenmediyse veya boşsa null döndürüyoruz
    }
    return (
        <Fragment>
            <div className="container-fluid topbar bg-dark d-none d-lg-block">
                <div className="container px-0">
                    <div className="topbar-top d-flex justify-content-between flex-lg-wrap">
                        <div className="top-info flex-grow-0">
                            <span className="rounded-circle btn-sm-square bg-primary me-2">
                                <i className="fas fa-bolt text-white"></i>
                            </span>
                            <div className="pe-2 me-3 border-end border-white d-flex align-items-center">
                                <p className="mb-0 text-white fs-6 fw-normal">Exchanges</p>
                            </div>
                            <div className="overflow-hidden" style={{ width: '735px' }}>
                                <div id="note" className="ps-2">
                                    <a href="#">
                                        {Object.entries(currencyData).map(([code, value]) => (
                                            <span className="text-white mb-0 link-hover" key={code}>
                                            {'\t'}
                                            <span style={{ color: 'yellow' }}>{mainCur}/{code}:</span> <span style={{ color: 'lightblue' }}>{value}</span>
                                        </span>
                                        
                                        ))}

                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="top-link flex-lg-wrap">
                            <i className="fas fa-calendar-alt text-white border-end border-secondary pe-2 me-2"> <span className="text-body">{date}</span></i>
                            <div className="d-flex icon">
                                <p className="mb-0 text-white me-2">Follow Us:</p>
                                <a target='_blank' href="https://www.instagram.com/enes_biricik/" className="me-2"><i className="fab fa-instagram text-body link-hover"></i></a>
                                <a target='_blank' href="https://www.youtube.com/channel/UCnbvx_AvjtTEiDMo305z3AA" className="me-2"><i className="fab fa-youtube text-body link-hover"></i></a>
                                <a target='_blank' href="https://www.linkedin.com/in/enesbiricik/" className="me-2"><i className="fab fa-linkedin-in text-body link-hover"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Spinner
