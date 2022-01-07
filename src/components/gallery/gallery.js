import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import { Container } from '@mui/material';


const Wrapper = styled.div`
  padding-top : 1vh;
`


export default function MasonryImageList() {
  return (
    <section id="gallery">
      <Wrapper>
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
    <Box sx={{ width: '100%', height: '100%', overflowY: 'scroll',  '&:hover': {
          
          opacity: [0.7, 0.8, 0.9],
        }  }}>
      <ImageList  cols={2} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </Grid>
    </Wrapper>
    </section>
  );
}

const itemData = [
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/agorastudio-95ded.appspot.com/o/GRIS%201.png?alt=media&token=dc3e762c-28cd-46f5-999e-546f28627dd7',
    title: 'Bed',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/agorastudio-95ded.appspot.com/o/ginko%202.png?alt=media&token=dca18cdd-4fef-4d8c-92e2-78c3118f14ec',
    title: 'Books',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/agorastudio-95ded.appspot.com/o/botas%20espaciales%20base%20%20lateral%20(12).png?alt=media&token=c0af87a7-4d87-4241-89c7-cecf9476e3af',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];