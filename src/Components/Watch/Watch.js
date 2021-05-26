import React, { useState, useEffect } from 'react';
import './Watch.css'
import Card from '../Card/Card';
import Button from '@material-ui/core/Button';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import QueueIcon from '@material-ui/icons/Queue';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Typography } from '@material-ui/core';
import Loader from '../../Assets/loader.svg'
import { baseUrl } from '../../CommonResource/Common';
import axios from 'axios';

// description: "Hey guys, in this video we will learn how to use shouldComponentUpdate() lifecycle method to avoid unnecessary re-renders to improve the performance of our react app."
// duration: "2:12:23"
// educator: "karthik@edyoda.com"
// likes: 0
// thumbnail_url: "https://edyoda.s3.amazonaws.com/media/video-thumbnail/qaifi-react-episode-3-create-react-app.png"
// title: "ReactJS - shouldComponentUpdate() Lifecycle Method"
// video_url: "https://www.youtube.com/embed/RGKi6LSPDLU"
// views: 0
// _id: "v1622043120713"


const Watch = () => {
    const url = "https://www.youtube.com/embed/RGKi6LSPDLU";
    const author = "qaifi";
    const title = "Somethingdsaassssssssssssssssssssssssssssssssssssssssssssssssssss";
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [videoData, setVideoData] = useState({});
    const [allVideo, setAllVideo] = useState([]);
    const [authorData, setAuthorData] = useState('');
    useEffect(() => {
        const id = window.location.search;
        const res = id.split("?");
        axios.get(`${baseUrl}/findAllVideos/${res[1]}`)
            .then(({ data }) => {
                setVideoData(data);
                axios.get(`${baseUrl}/findAllEducators/${data.educator}`)
                    .then(
                        ({ data }) => {
                            setAuthorData(`${data.firstName} ${data.lastName}`)
                            setIsLoaded(true);
                        }
                    )
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        axios.get(`${baseUrl}/findAllVideos`)
        .then(
            ({data}) => setAllVideo(data)
        )
    }, []);
    if (!isLoaded) {
        return <div>
            <img className="loader" src={Loader} alt="img"/>
        </div>;
    } else {
        const { description, educator, likes, title, video_url, views, _id } = videoData;

        return (
            <>
                <div className="Heading"><h1>Learning Videos</h1></div>
                <div className="mainContainer">
                    <div className="videoSection">
                        <div className="videoWrapper">
                            <iframe src={video_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <Typography variant="h5" className="title"><span>{title}...</span>
                            <Button
                                variant="outlined"
                                color="primary"
                                size="small"
                                startIcon={<ThumbUpIcon />}
                            > Like</Button>
                        </Typography>
                        <Typography>{likes} likes | {views} views</Typography>
                        <div className="videoActions">
                            <Button
                                // color="primary"
                                size="large"
                                startIcon={<AccountCircleIcon />}
                            > {authorData}</Button>

                            <Button
                                variant="outlined"
                                color="primary"
                                startIcon={<QueueIcon />}
                            > Subscribe</Button>
                        </div>
                        <Typography variant="subtitle1">{description}</Typography>
                    </div>
                    <div className="allVideos">
                        <Typography variant="h5" className="headingTitle">Recomended Videos</Typography>
                        {allVideo.map(item => {
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