import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Home.css'
const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://60070aeb3698a80017de27d6.mockapi.io/findAllVideos")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="videosWrapper">
                <h2>Learning Videos</h2>
                <hr/>
                <div className="cardWrapper">
                    {items.map(item => <Card prop={item} />)}
                </div>
            </div>
        );
    }
}

export default Home;