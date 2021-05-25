import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'
const Card = (props) => {
    //     description: "this is a react video"
    // duration: "5:00"
    // likes: "143"
    // thumbnail_url: "https://kk.com"
    // title: "react"
    // video_url: "https://k.com"
    // views: "114433"
    // _id: "v01"
    const { description, author, duration, likes, thumbnail_url, title, video_url, views } = props.prop;
    return (
        <>
            <Link to="/home?{1}" className="cardAnchor" >
                <div className="cardItem">
                    <div className="thumbnailContainer">
                        <img className="videoThumbnail" src={thumbnail_url} alt="video thumbnail" />
                        <div className="Overlay"></div>
                        <div className="videoDurationData">
                            <img className="videoPlayIcon" src="https://edyoda.com/static/media/icon-play-blue.68696826.svg" alt="play icon" />
                            <p className="videoDuration">{duration}</p>
                        </div>
                    </div>
                    <div className="videoMetaData">
                        <h3 className="videoTitle">
                            {title}<wbr />...
                        </h3>
                        <div className="videoOwnerData">
                            <div className="videoMetaDataSection">{author}
                                <span className="separator"> |</span>
                                <span>{likes} likes</span>
                                <span className="separator"> |</span> <span>{views} views</span>
                            </div>
                        </div>
                        <div className="videoMetaDataMobile">
                            <p className="videoLikesCount">{likes} likes</p>
                            <span className="separator"> |</span>
                            <p className="videoViewsCount">609 views</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Card;
