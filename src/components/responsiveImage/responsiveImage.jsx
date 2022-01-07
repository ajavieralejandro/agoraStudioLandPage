
import React from 'react';
import styled from 'styled-components';


const StyledVideo = styled.video`
right: 0; 
bottom: 0;
width: 100%; 
height: auto;
z-index: -100; 
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
overflow: hidden
`

const Image = styled.img`
width:100%;
height :100%;
top:0;
object-fit: cover;
position : absolute;

`



const VideoPage = () =>{
    return(
        <Image src="https://images.unsplash.com/photo-1635751589442-9e643734b2b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
    )
}

export default VideoPage;