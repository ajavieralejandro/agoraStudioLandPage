
import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'


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
    const isMobile = useMediaQuery({ query: '(min-width: 800px)' })

    return(
            <VideoContainer>{
                isMobile?<StyledVideo src="https://firebasestorage.googleapis.com/v0/b/agorastudio-95ded.appspot.com/o/lento%20.mp4?alt=media&token=1cff7d07-2ad2-4800-b802-dd3275a8b69a" autoPlay muted loop  />
                :<MobileVideo src="https://firebasestorage.googleapis.com/v0/b/agorastudio-95ded.appspot.com/o/formato%20cel%20.mp4?alt=media&token=10400c7d-dc44-4608-aaad-cf9df1385a03" autoPlay muted loop  />
                 

            }
            </VideoContainer>
    )
}

export default VideoPage;