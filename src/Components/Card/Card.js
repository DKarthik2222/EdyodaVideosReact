import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Card.css'
import axios from 'axios';
import { baseUrl } from '../../CommonResource/Common';

const Card = (props) => {
    const [author,setAuthor] = useState('');
    const { description, educator, duration, likes, thumbnail_url, title, video_url, views,_id } = props.prop;
    const url =`/watch?${_id}`;
    axios.get( `${baseUrl}/findAllEducators/${educator}`)
        .then((res) => {
            let fullName =res.data.firstName+' '+res.data.lastName;
            setAuthor(fullName)
        });
    return (
        <>
            <Link to={url} className="cardAnchor" >
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
                            <div className="videoMetaDataSection"><span>{author}</span>
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
