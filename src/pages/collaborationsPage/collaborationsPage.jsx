import FadeIn from "../../components/animations/fadeIn";
import styled from "styled-components";
import React from "react";
import { Slider } from '@lifarl/react-scroll-snap-slider';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import img1 from '../../img/logos/img1.jpg';
import img2 from '../../img/logos/img2.png';
import img3 from '../../img/logos/img3.png';
import img4 from '../../img/logos/img4.jpeg';
import img5 from '../../img/logos/img5.png';
import img6 from '../../img/logos/img6.png';


const StyledImg = styled.img`
    width : 180px;
    height : auto;
    padding : 2%;
`

const Wrapper = styled.div`
    display: inline-block;
  
`

const StyledH1 = styled.h1`
color : white;
text-align : center;

`


const CollaborationsPage = () => {
  
  return (
      <>
      <StyledH1>Some of our clients  </StyledH1>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
> 
          <StyledImg src={img1} />
          <StyledImg src={img2} />
          <StyledImg src={img3} />
          <StyledImg src={img4} />
          <StyledImg src={img5} />
          <StyledImg src={img6} />

          </Grid>
          </>
  

  );
};

export default CollaborationsPage;
