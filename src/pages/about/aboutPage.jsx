import { Container } from '@mui/material';
import styled from 'styled-components';
import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Wrapper from '../../components/Wrapper/wrapper';
import FadeIn from '../../components/animations/fadeIn';

/*
const Wrapper = styled(Container)`
padding-top: 6%;
text-align : center;
font-family: 'Source Code Pro', monospace;

color : white;
`
*/

const AboutPage = () =>{
    return(
        <FadeIn >
        <section id="about">

        <Wrapper>
        <Container>
        <Typography variant="body4" style={{color:'whitesmoke'}} gutterBottom>
        is tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditi   is tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditi   is tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditi   is tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditi   is tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditi
      </Typography>
        </Container>
        </Wrapper>
        </section>
        </FadeIn>

    )
}

export default AboutPage;