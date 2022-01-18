import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,CardActions , Button} from '@mui/material';
import styled, { keyframes } from 'styled-components';
import FlipUp from '../animations/flipUp';

import Grid from '@mui/material/Grid';

//Style components


const StyledTypography = styled(Typography)`
font-family: 'Source Code Pro', monospace;
font-weight: bold;


`


const StyledCard = styled(Card)`
-webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;background : white;
  border-radius : 15px;
text-align:center;
color: black;
&:hover{
  background : #697D48;
  color : white;
  -webkit-transform: scale(1.08);  transition : 0.5s;
  opacity : 0.9;
}

`

const StyledCardMedia = styled(CardMedia)`
border-radius: 50%;
width:12vw; height:12vw;
padding-top : 5%;

`

export default function ActionAreaCard({data}) {
  return (
    <FlipUp>
    <StyledCard sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
        <StyledCardMedia
          component="img"
          height="140"
          image={data.img}
          alt="green iguana"
        />
        </Grid>
        <CardContent>
          <StyledTypography gutterBottom variant="h5" component="div">
            {data.nombre}
          </StyledTypography>
          <StyledTypography gutterBottom variant="body2" component="div">
          Mei eu mollis albucius, ex nisl contentiones vix. 

          </StyledTypography>
        </CardContent>
        
      </CardActionArea>
    </StyledCard>
    </FlipUp>
  );
}