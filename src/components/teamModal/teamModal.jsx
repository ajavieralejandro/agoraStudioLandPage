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
import Grid from '@mui/material/Grid'
import Fade from '@material-ui/core/Fade';





const StyledIconButton = styled(IconButton)`
position : relative;
display : inline-table;
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

const StyledDiv = styled.div`
overflow-y : scroll;
    height: 200px;
`

const Container = styled.div`
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;`

const StyledCard = styled(Card)`

  border-radius : 2%;
    max-width : 500px;
    max-height : 750px;


    @media (max-width: 600px){
        width : 300px;
      }
    margin : auto;
`

const StyledCardMedia = styled(CardMedia)`
width : 100%;
height : 400px;
object-fit :contain;
@media (max-width: 600px){
    width : 100%;
    height : 300px;

  }
margin : auto;
padding-top : 5%;


`

const StyledCardContent = styled(CardContent)`
  
  margin : auto;
  padding-top : 5%;
`

const StyledTypography = styled(Typography)`

  text-align : center;
  font-size : 32px;
`

const StyledModal = styled(Modal)`
  background : black;
  opacity : 0.99;
`

const WrapperModal = styled.div``


const TeamModal = ({visibility,data,handleClose}) =>{

  return (

    <WrapperModal>


   
    <StyledModal styles={{background: "#FFFF00"}}
    open={visibility}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >


    
    <Box sx={style}>

 
<StyledCard>
  <Container>
<Grid
  container
  direction="row"
  justifyContent="flex-end"
  alignItems="center"
>

<StyledIconButton  onClick={()=>handleClose()}>

<CloseIcon />

</StyledIconButton>
      <StyledCardMedia
        component="img"
        image={data.img}
        alt="team member"
      />
      </Grid>
      <StyledCardContent>
        <StyledDiv>


      <StyledTypography gutterBottom variant="h5" component="div">
          {data.nombre}
        </StyledTypography>
        <Typography variant="body4" color="text.secondary">

          {data.bioen}

        </Typography>
        </StyledDiv>
      </StyledCardContent>
           

      </Container>
    </StyledCard>


    </Box>


  </StyledModal>

  </WrapperModal>

  )
};

export default TeamModal;