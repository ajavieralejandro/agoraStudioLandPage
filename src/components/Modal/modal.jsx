import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const StyledIconButton = styled(IconButton)`
position: absolute;
left: 95%;
top: 2%;
backgroundColor: lightgray;
color: gray;
@media (max-width:600px){
  left: 90%;
top: 1%;
}

`

const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height : 'auto',
  bgcolor: 'background.paper',
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

const ImageModal = ({visibility,image,handleClose}) =>{

  return (
    <Modal
    open={visibility}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
     
  
<StyledIconButton onClick={()=>handleClose()}>

      <CloseIcon />
      </StyledIconButton>
      <StyledImage src={image} />
    </Box>
  </Modal>
  )
}

export default ImageModal;