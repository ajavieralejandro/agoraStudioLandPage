import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Img1 from '../../img/img1.webp';
import Img2 from '../../img/img2.webp';
import Img3 from '../../img/img3.webp';
import Img4 from '../../img/img4.webp';
import Img5 from '../../img/img5.webp';
import Img6 from '../../img/img6.webp';
import Wrapper from '../../components/Wrapper/wrapper';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Modal from '../../components/Modal/modal';


const images = [
  {
    url: Img1,
    title: 'Industrial Design',
    width: '40%',
  },
  {
    url: Img2,
    title: 'Art',
    width: '30%',
  },
  {
    url: Img3,
    title: 'Fashion',
    width: '30%',
  },
  {
    url: Img4,
    title: 'Biomodels',
    width: '40%',
  }
];


const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 250,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));


export default function ButtonBases() {
  const [visibility, setvisibility] = React.useState(false);
  return (
    <section id="gallery">
    <Wrapper>
      <Modal  visibility={visibility} handleClose={()=>setvisibility(false)} />
      <h1 style={{color:'white'}}>Explore our works!</h1>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          onClick={()=>setvisibility(true)}
          focusRipple
          key={image.title}
          style={{
            width: "100%",
          }}
        >
          <LazyLoadComponent id={image.url} effect="blur">
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          </LazyLoadComponent>
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="h1"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 6,
                pt: 4,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
    </Wrapper>
    </section>
  );
}