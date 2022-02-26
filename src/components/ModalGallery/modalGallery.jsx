import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem, {
  imageListItemClasses
} from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from 'styled-components';
import Img1 from '../../img/img1.webp';
import Img2 from '../../img/img2.webp';
import Img3 from '../../img/img3.webp';
import Img4 from '../../img/img4.webp';
import Img5 from '../../img/img5.webp';
import Img6 from '../../img/img6.webp';
const Wrapper = styled(ImageListItemBar)`
border-radius: 3em;

`

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      bigMobile: 350,
      tablet: 650,
      desktop: 900
    }
  }
});

export default function TitlebarImageList({handleImage}) {
  return (
    <ThemeProvider theme={theme}>

      <Box
        sx={{
          height: 650,
          marginTop:"5%",
          width:'100%',
          backgroundColor: "pink",
          display: "grid",
          gridTemplateColumns: {
            mobile: "repeat(1, 1fr)",
            bigMobile: "repeat(2, 1fr)",
            tablet: "repeat(3, 1fr)",
            desktop: "repeat(4, 1fr)"
          },
          [`& .${imageListItemClasses.root}`]: {
            display: "flex",
            flexDirection: "column"
          }
        }}
      >

        {itemData.map((item) => (
          <ImageListItem key={item.id}>
            <img

              onClick={()=>handleImage(item.img)}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
        
          </ImageListItem>
        ))}
        
      </Box>   

    </ThemeProvider>
  );
}

const itemData = [
  {
    img: Img1,
    id:'1',
 
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: Img2,
    id:'2',
 
  },
  {
    img: Img3,
    id:'3',

  },
  {
    img: Img4,
    id:'4',
  
    cols: 2
  },
  {
    img: Img5,
    id:'5',

    cols: 2
  },
  {
    img: Img6,
    id:'6',
 
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: Img1,
    id:'7',

    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: Img2,
    id:'8',

  },
  
];
