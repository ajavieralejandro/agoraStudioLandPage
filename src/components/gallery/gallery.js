import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';



function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList({data,handleClick}) {
  //console.log("handlecLICK es :",handleClick);
  const setImage = (img) =>{
    //console.log("img es :",img);
    handleClick(img);
  };
  return (
    <section id="gallery">
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >    <ImageList
  sx={{ width: 500, height: 450 }}
  variant="quilted"
  cols={4}
  rowHeight={121}
>
  {itemData.map((item) => (
    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
      <img
        {...srcset(item.img, 121, item.rows, item.cols)}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
    </Grid>
    </section>
  );
}

