import React, { useEffect, useState, Fragment } from 'react';
import RightMenu from '../components/layout/RightMenu';
import News from '../components/News';

export const HomePage = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = "XAEExkFnfb4kzobbdGl4Atm4nbQ5xgts";
        const response = await fetch(`https://api.nytimes.com/svc/news/v3/content/nyt/all.json?api-key=${apiKey}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const filtered = data.results.filter(item => 
          item.slug_name &&
          item.section &&
          item.title &&
          item.abstract &&
          item.url &&
          item.byline &&
          item.created_date &&
          item.geo_facet &&
          item.multimedia &&
          item.multimedia.length > 0
        );

        setNews(filtered);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Fragment>
      <div className="container-fluid populer-news py-1">
        <div className="container py-5">
          <div className="tab-className mb-4">
            <div className="row g-4">
              <div className="col-lg-8 col-xl-9">
                <div className="d-flex flex-column flex-md-row justify-content-md-between border-bottom mb-4">
                  <h1 className="mb-4">What’s New</h1>
                  <ul className="nav nav-pills d-inline-flex text-center">
                    <li className="nav-item mb-3">
                      <a className="d-flex py-2 bg-light rounded-pill active me-2" data-bs-toggle="pill" href="#tab-1">
                        <span className="text-dark" style={{ width: '100px' }}>Sports</span>
                      </a>
                    </li>
                    <li className="nav-item mb-3">
                      <a className="d-flex py-2 bg-light rounded-pill me-2" data-bs-toggle="pill" href="#tab-2">
                        <span className="text-dark" style={{ width: '100px' }}>Magazine</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <News news={news} />
                </div>
              </div>
              <div className="col-lg-3">
                <RightMenu news={news} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
