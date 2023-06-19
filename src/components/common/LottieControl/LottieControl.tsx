import React, { FC, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../lotties/video-preloader.json';

const LottieControlComponent: FC = () => {
    //   const { 
    //     mainSlogan
    //   } = useStaticQuery(graphql`
    //     query  {
    //       mainSlogan: file(relativePath: { eq: "Main-slogan.svg" }) {
    //           publicURL
    //           name
    //       }
    //     }`);
    const [isStopped, setStopped] = useState(false);
    const [isPaused, setPaused] = useState(false);

    const buttonStyle = {
        display: 'block',
        margin: '10px auto'
      };
 
      const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
 
      
    return (

        <div>
            <Lottie options={defaultOptions}
                    height={400}
                    width={400}
                    isStopped={isStopped}
                    isPaused={isPaused}/>
            <button style={buttonStyle} onClick={() => setStopped(true)}>stop</button>
            <button style={buttonStyle} onClick={() => setStopped(false)}>play</button>
            <button style={buttonStyle} onClick={() => setPaused(!isPaused)}>pause</button>
        </div>

    );
}


export { LottieControlComponent };

