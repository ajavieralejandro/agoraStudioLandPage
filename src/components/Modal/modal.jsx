import  React from 'react'
import Modal from 'react-modal';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';

Modal.setAppElement("#root");


const StyledImg = styled.img`
  width : 50%;
  height : 50%;
`

const ImageModal = ({visibility,image}) =>{
  return (
    <Modal isOpen={visibility}>
      <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
    <StyledImg src={image}   />
    </Grid>
    </Modal>
  )
}

export default ImageModal;