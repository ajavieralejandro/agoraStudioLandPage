
import React,{useState} from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'
import Video from '../../video/lento .mp4';
import VideoCel from '../../video/cel.mp4'
import { useReadyElement } from "@egjs/react-imready";
import CircularProgress from '@mui/material/CircularProgress';




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



const VideoC = () =>{
    //console.log(Video);
    const isMobile = useMediaQuery({ query: '(min-width: 800px)' });
    const { register, readyCount, totalCount, isReady } = useReadyElement({
        selector: "video",
    });
    /*const onVideoLoad = ()=>{
        console.log("El video se esta cargando");
    }*/

    return(
        <>          {isReady ?   <VideoContainer>{
            <StyledVideo src="https://firebasestorage.googleapis.com/v0/b/agorastudio-95ded.appspot.com/o/lento%20.mp4?alt=media&token=de816538-9415-4fc4-9cb2-a6c47f12aac0" autoPlay muted loop  />
              

         }
         </VideoContainer>: <Container><CircularProgress /></Container>}


         
            </>
    )
}

export default VideoC;
