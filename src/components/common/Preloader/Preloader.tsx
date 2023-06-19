import React, { FC } from 'react';
import { Lines, CustomPreloader } from 'react-preloaders';
import './Preloader.sass';
import Lottie from 'react-lottie';
import animationData from '../../../lotties/video-preloader.json';
import cn from 'classnames'

type PreloaderComponentProps = {
    loading: boolean
}

const PreloaderComponent: FC<PreloaderComponentProps> = ({loading}) => {
   
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (

        <div className={cn("loader-container",  !loading && 'loaderHide')} >
            <Lottie 
            options={defaultOptions}
            isStopped={!loading}
            />
        </div>

    );
}


export { PreloaderComponent };

//   {/* <Lines  
//         background={'#FF522C'}  
//         customLoading={loading} 
//         time={0}/> */}
//        {/* <CustomPreloader background={'#FF522C'}  
//         customLoading={loading} 
//         time={0} >
//                 YOUR CUSTOM PRELOADER COMPONENT
//         </CustomPreloader> */}