import Gallery from "../../components/galerry2/gallery2";
import React from "react";
import styled from 'styled-components';
import Wrapper from "../../components/Wrapper/wrapper";
import img1 from '../../img/parallax.webp';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";
import Img1 from '../../img/img1.webp';
import Img2 from '../../img/img2.webp';
import Img3 from '../../img/img3.webp';
import Img4 from '../../img/img4.webp';
import Img5 from '../../img/img5.webp';
import Img6 from '../../img/img6.webp';


import GalleryCard from '../../components/galleryCard/galleryCard';
import GalleryCard2 from '../../components/galleryCard/galleryCars2';





const StyledTitle = styled.h1`
    color : white;
    text-align : center;
`

const StyledImg = styled.div`
width: 400px;
height : auto;
background: url('https://firebasestorage.googleapis.com/v0/b/agorastudio-95ded.appspot.com/o/workd%2F2BORCEGO%20.png?alt=media&token=37b6d790-0dae-49d2-b5e8-571193ba9ea2');

`




const GalleryPage2 = () => {
 
    
  return (
    <section id="gallery">
        <Wrapper>
          
          <Container>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
          </Grid>

          <Grid item xs={6} sm={4}>
          <GalleryCard title="Fashion Design" img={img1} />          
          </Grid>
          <Grid item xs={6} sm={4}>
          <GalleryCard title="Art" img={Img5} />          
          </Grid>
          <Grid item xs={6} sm={4}>
          <GalleryCard title="Industrial Design" img={Img3} />          
          </Grid>


            </Grid>
          </Container>
        </Wrapper>

    </section>
  );
};

export default GalleryPage2;
