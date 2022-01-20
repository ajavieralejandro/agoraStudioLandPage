import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const StyledIconButton = styled(IconButton)`

left: 90%;
top: 12%;
transform: scale(1.8);
backgroundColor: lightgray;
color: gray;

`

const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height : 'auto',
  bgcolor: 'transparent',
  boxShadow: 24,
  outline: 'none',
  borderRadius : '12px',
  p: 4,
  ["@media (max-width:600px)"]: { width: '80%',height: 'auto' }
 
};

const StyledImage = styled.img`
display: block;
margin : auto;
width: 50%;
height : auto;
object-fit: cover;
overflow: hidden;
@media (max-width: 600px){
  width : 100%;
  height: auto;
}

`

const StyledCard = styled(Card)`
    max-width : 500px;
    @media (max-width: 600px){
        width : 300px;
      }
    margin : auto;
`

const StyledCardMedia = styled(CardMedia)`
width : 300px;
height : 300px;
@media (max-width: 600px){
    width : 150px;
    height : 150px;

  }
margin : auto;
padding-top : 5%;


`

const StyledModal = styled(Modal)`
  background : black;
  opacity : 0.99;
`

const teamModal = ({visibility,data,handleClose}) =>{

  return (
    <>
   
    <StyledModal styles={{background: "#FFFF00"}}
    open={visibility}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    
    <Box sx={style}>

<StyledCard>
<StyledIconButton  onClick={()=>handleClose()}>

<CloseIcon />
</StyledIconButton>
      <StyledCardMedia
        component="img"
        image={data.img}
        alt="team member"
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          {data.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.bio}
        </Typography>
      </CardContent>
           


    </StyledCard>

    </Box>
  </StyledModal>
  </>
  )
}

export default teamModal;