
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
                isMobile?<StyledVideo  src="https://firebasestorage.googleapis.com/v0/b/agorastudio-95ded.appspot.com/o/lento%20.mp4?alt=media&token=de816538-9415-4fc4-9cb2-a6c47f12aac0" autoPlay muted loop  />
                :<MobileVideo   src="https://firebasestorage.googleapis.com/v0/b/agorastudio-95ded.appspot.com/o/cel.mp4?alt=media&token=db815308-b89a-422d-bcec-f50d924d5081" autoPlay muted loop  />
                 

            }
            </VideoContainer>
    )
}

export default VideoPage;