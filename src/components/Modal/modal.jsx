import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ModalGallery from '../ModalGallery/modalGallery';

const StyledIconButton = styled(IconButton)`

position:absolute;
top: -0em;
right: 0em;
margin: 0;
padding: 0;
backgroundColor: lightgray;
color: red;
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

const StyledModal = styled(Modal)`
  background : black;
  opacity : 0.95;
`

const ImageModal = ({visibility,image,handleClose}) =>{

  return (
    <>
      

   
    <StyledModal styles={{background: "#FFFF00"}}
    open={visibility}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    
    
    
    <Box sx={style}>
    <Grid
  
>
<Grid item xs={12} sm={6}>
  </Grid>
  <Grid item xs={12} sm={6}>
    <ModalGallery />

  </Grid>

  </Grid>
    <StyledIconButton size="large" onClick={()=>handleClose()}>

<CloseIcon />
</StyledIconButton>
    </Box>
  </StyledModal>
  </>
  )
}

export default ImageModal;