
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
                isMobile?<StyledVideo src="https://fast.wistia.com/embed/medias/u8ff6dlvq3.jsonp" autoPlay muted loop  />
                :<MobileVideo src="https://fast.wistia.com/assets/external/E-v1.js" autoPlay muted loop  />
                 

            }
            </VideoContainer>
    )
}

export default VideoPage;