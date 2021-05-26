import React, { useState, useEffect } from 'react';
import './Watch.css'
import Card from '../Card/Card';
import Button from '@material-ui/core/Button';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import QueueIcon from '@material-ui/icons/Queue';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Typography } from '@material-ui/core';
import Loader from '../../Assets/loader.svg'
import { baseUrl, getUser } from '../../CommonResource/Common';
import axios from 'axios';

const Watch = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [videoData, setVideoData] = useState({});
    const [allVideo, setAllVideo] = useState([]);
    const [authorData, setAuthorData] = useState('');
    const [like, setLike] = useState('');
    const [likeBtn, setLikeBtn] = useState('');
    const [subscribedStatus, setSubscribedStatus] = useState('');
    const[subscribe,setSubscribe]=useState('');
    useEffect(() => {
        let {videos_watched, subscribed}=getUser();
        const id = window.location.search;
        const res = id.split("?");
        axios.get(`${baseUrl}/findAllVideos/${res[1]}`)
            .then(({ data }) => {
                subscribed.includes(data._id)?setSubscribedStatus(true):setSubscribedStatus(false);
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
                }
            )
        axios.get(`${baseUrl}/findAllVideos`)
            .then(
                ({ data }) => setAllVideo(data)
            )
    }, []);
    useEffect(() => {
        // for subscribe button
        setSubscribedStatus(subscribedStatus)
        subscribedStatus?setSubscribe("contained"):setSubscribe("outlined");//if true push videoID to subscribed
        ////for like button
        setLike(like)
        like?setLikeBtn("contained"):setLikeBtn("outlined");//if true push videoID to liked
    }, [subscribedStatus,subscribe,like,likeBtn])
    if (!isLoaded) {
        return <div>
            <img className="loader" src={Loader} alt="img" />
        </div>;
    } else {
        const { description, likes, title, video_url, views, _id } = videoData;
        let time= _id.split("v")[1]
        time=parseInt(time);
        let day = new Date(time).getDate();
        let month = new Date(time).getMonth()+1;
        let year = new Date(time).getFullYear();
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
                                variant={likeBtn}
                                color="primary"
                                size="small"
                                startIcon={<ThumbUpIcon />}
                                onClick={ () =>setLike(!like)}
                            > Like</Button>
                        </Typography>
                        <Typography variant="subtitle1">{likes} likes | {views} views
                        <Typography>Published on: {day}/{month}/{year}</Typography>
                        </Typography>
                        <div className="videoActions">
                            <Button
                                size="large"
                                startIcon={<AccountCircleIcon />}
                            > {authorData}</Button>

                            <Button
                                variant={subscribe}
                                color="primary"
                                startIcon={<QueueIcon />}
                                onClick={ () =>setSubscribedStatus(!subscribedStatus)}
                            > Subscribe</Button>
                        </div>
                        <Typography variant="subtitle1">{description}</Typography>
                    </div>
                    <div className="videoList">
                        <Typography variant="h5" className="headingTitle">Recomended Videos</Typography>
                        <div className="allVideos">
                            {allVideo.map(item => {
                                return (<div>
                                    <Card prop={item} key={item._id} />
                                    <hr className="sep" />
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Watch;