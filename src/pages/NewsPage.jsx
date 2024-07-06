import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import RightMenu from '../components/layout/RightMenu';
import News from '../components/News';

export const NewsPage = () => {
  const {section} = useParams();

  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = "YOUR_API_KEY";
        const response = await fetch(`https://api.nytimes.com/svc/news/v3/content/nyt/${section}.json?api-key=${apiKey}`);

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

        console.log("Filtered: ",filtered)

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
    <div className="container-fluid populer-news py-1">
    <div className="container py-5">
      <div className="tab-className mb-4">
        <div className="row g-4">
          <div className="col-lg-8 col-xl-9">
            <div className="d-flex flex-column flex-md-row justify-content-md-between border-bottom mb-4">
              <h1 className="mb-4">{section} News</h1>
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
  )
}

export default NewsPage
