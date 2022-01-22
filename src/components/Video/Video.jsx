
import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'
import Video from '../../video/lento .mp4';
import VideoCel from '../../video/cel.mp4'


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
    overflow : hidden;
`

const VideoContainer = styled.div`


`



const VideoPage = () =>{
    //console.log(Video);
    const isMobile = useMediaQuery({ query: '(min-width: 800px)' });
    /*const onVideoLoad = ()=>{
        console.log("El video se esta cargando");
    }*/

    return(
            <VideoContainer>{
                isMobile?<StyledVideo  src={Video} autoPlay muted loop  />
                :<MobileVideo   src={VideoCel} autoPlay muted loop  />
                 

            }
            </VideoContainer>
    )
}

export default VideoPage;