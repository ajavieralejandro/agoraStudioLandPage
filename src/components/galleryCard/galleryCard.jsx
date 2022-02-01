import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Button from '@mui/material/Button';


const StyledCardContent = styled(CardContent)`
   
`

const StyledCard = styled(Card)`
&:hover ${StyledCardContent} {
    visibility : visible;
  }

`
export default function ImgMediaCard(props) {

  return (
    <StyledCard sx={{ maxWidth: 345, background :"#558BAD",borderRadius : "2rem"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="auto"
        image={props.img}
      />
      <StyledCardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Button variant="outlined" > {props.title}     </Button>

        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
}