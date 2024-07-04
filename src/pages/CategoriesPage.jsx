import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoriesPage = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const apiKey = "XAEExkFnfb4kzobbdGl4Atm4nbQ5xgts";
                const response = await fetch(`https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${apiKey}`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                
                setCategories(data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <Fragment>
            <div className="container mt-5">
                <div className="row">
                    {categories.map((category, index) => (
                        <div key={index} className="col-lg-3">
                            <div className="category-div">
                                <Link to={{ pathname: `/NewsPage/${category.section}`, state: { section: category.section } }}>
                                    {category.display_name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default CategoriesPage;
