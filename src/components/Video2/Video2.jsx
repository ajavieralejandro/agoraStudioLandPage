import React,{useEffect,useState} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';



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



const Video = () =>{
    const [loading, setLoading] = useState(true);
    return (
        <VideoContainer>
            {loading && <CircularProgress />}

            <video
                loop
                muted
                autoPlay
                src="https://firebasestorage.googleapis.com/v0/b/agorastudio-95ded.appspot.com/o/lento%20.mp4?alt=media&token=de816538-9415-4fc4-9cb2-a6c47f12aac0"                preload={'auto'}
                type={'video/mp4'}
                onLoadEnd={() => {
                    console.log("Me termine de cargar");
                    setLoading(false);
                    console.log(loading);
                }}>
            </video>
        </VideoContainer>
    );
}
  
export default Video;