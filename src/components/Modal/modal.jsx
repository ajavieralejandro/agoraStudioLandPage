import react,{useState}  from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ModalGallery from '../ModalGallery/modalGallery';
import Selector from '../selector/selector';
import { Paper } from '@mui/material';
import Img1 from '../../img/img1.webp';
import FadeIn from 'react-fade-in/lib/FadeIn';
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
border-radius: 0.5em;
width: 600px;
height : 650px;
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
  @media (max-width: 600px){
    overflow-y : scroll;
    padding-top:100%;



  }
  background : black;
  opacity : 0.95;
`

const Wrapper = styled.div`
  padding-top:2%;
`
const Wrapper2 = styled.div`
  padding-top:-10%;
`

const ImageModal = ({visibility,handleClose}) =>{

  const [image, setImage] = useState(Img1);
  return (
    <div>
      

   <FadeIn>
   
    <StyledModal styles={{background: "#558BAD"}}
    open={visibility}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    
   
    
    
    <Box sx={style}>
    <StyledIconButton onClick={()=>handleClose(false)} >
       <CloseIcon />
       </StyledIconButton>

    <Selector />
<Wrapper>


 
    <Grid container spacing={1}>
  
<Grid  item xs={12} sm={6}>
    <div>
      <StyledImage src={image} />
    </div>
  </Grid>
  <Grid item xs={12} sm={6}>
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