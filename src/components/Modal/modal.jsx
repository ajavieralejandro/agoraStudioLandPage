import react,{useState}  from 'react';
import Box from '@mui/material/Box';
import { useRef } from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container, Grid } from '@mui/material';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ModalGallery from '../ModalGallery/modalGallery';
import Selector from '../selector/selector';
import { Paper } from '@mui/material';
import Img1 from '../../img/img1.webp';
import FadeIn from 'react-fade-in/lib/FadeIn';
import useClickOutside from '../../hooks/useClickOutside';

import { Close } from '@material-ui/icons';



const StyledIconButton = styled(IconButton)`
position:absolute;
top: 0em;
right: 0em;
margin: 0;
padding: 0;
backgroundColor: lightgray;
color: #558BAD;
`

const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  marginTop: "7%",
  width: '80%',
  height : '100%',
  bgcolor: 'transparent',
  boxShadow: 24,
  outline: 'none',
  borderRadius : '12px',
  p: 4,
 
};

const StyledImage = styled.img`
display: flex;
margin : auto;
border-radius: 0.5em;
padding-top : 5%;
max-width: 500px;
height : auto;
object-fit: cover;
overflow: hidden;
@media (max-width: 600px){
  width : 100%;
  height: auto;
}
`

const StyledModal = styled(Modal)`
  padding : auto;
  margin: auto;
  overflow-y : auto;
  @media (max-width: 600px){
  }
  background : black;
  opacity : 0.95;
`

const Wrapper = styled.div`
  width:100%;
`
const Wrapper2 = styled.div`
  padding-top:-10%;
`

const ImageModal = ({visibility,handleClose}) =>{
  const ref = useRef(null);
  useClickOutside(ref, ()=>handleClose(false));

  const [image, setImage] = useState(Img1);
  return (
    <div>
      

   <FadeIn>
   
    <StyledModal styles={{background: "#558BAD"}}
    open={visibility}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    
   
    
    
    <Box ref={ref} sx={style}>
    <StyledIconButton onClick={()=>handleClose(false)} >
       <CloseIcon />
       </StyledIconButton>

<Wrapper>


 
    <Grid container justify="space-around"  spacing={4}>
  
<Grid  item  sm={12} md={6}>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>      <StyledImage src={image} />
    </Grid>
  </Grid>
  <Grid item sm={12} md={6}>
  <div>
<ModalGallery handleImage={setImage} />
</div>

  </Grid>

  </Grid>

</Wrapper>

    </Box>
  </StyledModal>
  </FadeIn>
  </div>
  )
}

export default ImageModal;