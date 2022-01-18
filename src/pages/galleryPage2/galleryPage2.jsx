import { Container } from "@mui/material";
import Gallery from "../../components/galerry2/gallery2";
import React from "react";
import styled from 'styled-components';
import Wrapper from "../../components/Wrapper/wrapper";

import Paper from '@mui/material/Paper';

const StyledPaper = styled(Paper)`
    width : 300px;
    height: 200px;
`



const StyledTitle = styled.h1`
    color : white;
    text-align : center;
`




const GalleryPage2 = () => {
 
    
  return (
    <section id="gallery">
        <Wrapper>
            <div>
            <StyledTitle>Our Works!</StyledTitle>
            </div>            <div>
            <Gallery />

</div>



        </Wrapper>
    </section>
  );
};

export default GalleryPage2;
