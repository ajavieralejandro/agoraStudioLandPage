import { Container } from "@mui/material";
import { useEffect,useState } from 'react';

import styled from "styled-components";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Gallery from "../../components/gallery/gallery";
import { makeStyles } from '@mui/styles';
import { collection,getDocs } from '@firebase/firestore';
import db from '../../../src/firebase/firebase.config';
import GalleryImage from "../../components/galleryImage/galleryImage";



const classes = makeStyles({
    gridItem: {
      border: "1px solid red"
    }
  });


const Wrapper = styled.div`
  margin-top: 10%;
  margin-bottom: 5%;
`;

const centerContainer = styled.div`
  font-family: arial;
  font-size: 24px;
  margin: 25px;
  width: 350px;
  height: 200px;
  outline: dashed 1px black;
  /* Setup */
  position: relative;
`;

const centerChild = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  /* Center vertically and horizontally */
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px; /* Apply negative top and left margins to truly center the element */
`;

const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;

const StyledDiv = styled.div`
  border: 3px solid red;
`;

const StyledImg = styled.img`
    width:400px;
    height:auto;
`

const GalleryPage = () => {
    const [works, setWorks] = useState([]);
    const [image, setImage] = useState(null);

    useEffect(() => {
      fetchDataWork();
      
    }, []);
    const fetchDataWork = async ()=>{
        const worksCol = collection(db, 'works');
        const worksSnapshot = await getDocs(worksCol);
        const worksList = worksSnapshot.docs.map(doc => doc.data());
        setWorks(worksList);
        setImage(worksList[0].img);
        console.log("image es : ",image);
    
      }
    
  return (
    <Container>
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
          <Grid item xs={12} sm={6}>
    <div>
    <Gallery handleClick={setImage} data={works} />
    </div>
  </Grid>
  <Grid item sm={6}>
    
    <Box
        component={Grid}
        className={classes.gridItem}
        item
        xs={3}
        display={{ xs: "none", lg: "block" }}
      >
          {image?<GalleryImage  data={image} />:null}
          </Box>
  </Grid>
    </Grid>
    </Container>
  );
};

export default GalleryPage;
