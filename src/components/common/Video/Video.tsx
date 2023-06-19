import React, { FC } from 'react';

// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import './Video.sass';
type VideoComponentProps = {
    videoSrcURL: any
    videoTitle: any

}
const VideoComponent: FC<VideoComponentProps> = ({ videoSrcURL, videoTitle, ...props }) => {
 
    return (

        <div className="video">
             <video controls style={{ width: `100%` }}>
                    <source src={videoSrcURL} type="video/mp4" />
                </video>
      </div>

    );
}


export { VideoComponent };

