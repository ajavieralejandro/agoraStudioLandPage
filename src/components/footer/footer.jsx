import { Container } from '@mui/material';
import styled from 'styled-components';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ContactForm from '../contactForm/contactForm';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



const Wrapper = styled(Container)`
paddingTop : 15%;
background: white;
`

const StyledAppBar = styled(AppBar)`
    background :#558BAD; 
`

const Footer = () =>{
    return(
        <StyledAppBar position="static" >
        <Grid
  container
  direction="row"
  justifyContent="flex-end"
  alignItems="center"
>
          <Toolbar>
            <Typography variant="body1" color="inherit">
              © 2021 AgoraStudio
            </Typography>
          </Toolbar>
          </Grid>
      </StyledAppBar>);
}

export default Footer;