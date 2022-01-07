import React from 'react';
import TextField from '@mui/material/TextField';
import { Typography,Card,CardContent,Grid,Button } from '@mui/material';
import styled from 'styled-components';
import { Container } from '@mui/material';
import ContactForm from '../../components/contactForm/contactForm';



const Wrapper = styled.div`
padding-top:5%;
padding-bottom:5%;
`
const Wrapper1 = styled.div`
height : 100%;
width : 100%;
max-height : 500px;
    `

const Wrapper2 = styled.div`
max-height : 467px;
height : 100%;
width : 100%;
`
const StyledImg = styled.img`

    height:100%;
    width : 100%;
    
`
const Text = styled.h3`
    text-align : center;

`
const contactPage = () => {
    return(
        <section id="contact">
        <Wrapper>
            <Container>
            <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
                <ContactForm />
                </Grid>
</Container>


        </Wrapper>
        </section>
    )
}

export default contactPage;