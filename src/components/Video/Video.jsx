
import React,{useState} from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'
import Video from '../../video/video2.mp4';
import VideoCel from '../../video/cel.mp4'
import { useReadyElement } from "@egjs/react-imready";
import CircularProgress from '@mui/material/CircularProgress';
import LazyLoad from 'react-lazyload';

import Stack from '@mui/material/Stack';
import { Player, ControlBar } from 'video-react';





const StyledVideo = styled.video`  
top:0;
width: 100%; 
height: auto;
z-index: -1; 
object-fit: cover;

`

const MobileVideo = styled.video`
top:0;
width: 100%; 
height: auto;
z-index: -1; 
object-fit: cover;

`



const Container = styled.div`
    height : 100vh;
    width : 100vh;
    text-align : center;
`

const VideoContainer = styled.div`
`

const Spinner = styled(CircularProgress)`
position: absolute;
top: 20%;  /* position the top  edge of the element at the middle of the parent */
left: 50%; /* position the left edge of the element at the middle of the parent */

    
`

const Wrap = styled.div`
    height : 600px;
    width : 100%;
`



const VideoC = () =>{
    const [isLoading, setIsLoading] = useState(true);
    //console.log(Video);
    const isMobile = useMediaQuery({ query: '(min-width: 800px)' });
    const { register, readyCount, totalCount, isReady } = useReadyElement({
        selector: "video",
    });
    /*const onVideoLoad = ()=>{
        console.log("El video se esta cargando");
    }*/

    return(
        <>          {isMobile?   <VideoContainer>
            <LazyLoad>
            {isLoading?<Spinner />:null}
            <StyledVideo onPlaying={()=>setIsLoading(false)}  src="//videodelivery.net/59920f588fb4e007ea97488fbc172565/downloads/default.mp4" autoPlay muted loop  />
            </LazyLoad>
         
         </VideoContainer>:  <VideoContainer>{
            <LazyLoad><StyledVideo src="//videodelivery.net/b2be1cfddda2c4c36e135b9f56a78ed0/downloads/default.mp4" autoPlay muted loop  /></LazyLoad>
              

         }
         </VideoContainer>}


         
            </>
    )
}

export default VideoC;
