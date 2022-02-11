import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import styled from 'styled-components';
import FlipUp from '../animations/flipUp';
import TeamModal from '../teamModal/teamModal';
import { Fade } from '@mui/material';


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
  opacity : 0.7;
}

`

const StyledCardMedia = styled(CardMedia)`
border-radius: 50%;
width:22vh; height:22vh;
padding:1%;           


`

const ModalWrapper = styled.div``;

export default function ActionAreaCard({data}) {
  const [visibility, setvVsibility] = useState(false);
  const handleClose = () => setvVsibility(false);
  return (
    <FlipUp>
    <StyledCard sx={{ maxWidth: 345, minHeight:320 }} onClick={()=>setvVsibility(true)}>
      <CardActionArea>
      <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
        <StyledCardMedia
          component="img"
          image={data.img}
          alt="green iguana"
        />
        </Grid>
        <CardContent>
          <StyledTypography gutterBottom variant="h5" component="div">
            {data.nombre}
          </StyledTypography>
          <StyledTypography gutterBottom variant="body2" component="div">
          {data.rol}

          </StyledTypography>
        </CardContent>
        
      </CardActionArea>
    </StyledCard>
    <ModalWrapper >
    <TeamModal   visibility={visibility} handleClose={handleClose} data={data} />
    </ModalWrapper>
    </FlipUp>
  );
}