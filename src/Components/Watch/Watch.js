import React, { useState, useEffect } from 'react';
import './Watch.css'
import Card from '../Card/Card';
import Button from '@material-ui/core/Button';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import QueueIcon from '@material-ui/icons/Queue';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Typography } from '@material-ui/core';
import Loader from '../../Assets/loader.svg'


const Watch = () => {
    const url = "https://www.youtube.com/embed/RGKi6LSPDLU";
    const author = "qaifi";
    const title = "Somethingdsaassssssssssssssssssssssssssssssssssssssssssssssssssss";
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
    }, []);
    if (!isLoaded) {
        return <div>
            <img className="loader" src={Loader} />
        </div>;
    } else {
        return (
            <>
                <div className="Heading"><h1>Learning Videos</h1></div>
                <div className="mainContainer">
                    <div className="videoSection">
                        <div className="videoWrapper">
                            <iframe src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                        </div>
                        <Typography variant="h4" className="title"><span>{title}...</span>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                startIcon={<ThumbUpIcon />}
                            > Like</Button>
                        </Typography>
                        <div className="videoActions">
                            <Button
                                // color="primary"
                                size="large"
                                startIcon={<AccountCircleIcon />}
                            > {author}</Button>

                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<QueueIcon />}
                            > Subscribe</Button>
                        </div>
                    </div>
                    <div className="allVideos">
                        {items.map(item => {
                            return (<div>
                                <Card prop={item} />
                                <hr className="sep" />
                            </div>)
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default Watch;