import React from 'react';
import TextField from '@mui/material/TextField';
import { Typography,Card,CardContent,Grid,Button } from '@mui/material';
import styled from 'styled-components';
import { Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import emailjs from 'emailjs-com';

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9dgk7kn', 'template_svd3zpd', e.target, 'user_KRxr45LRpsTkhXElJp8Wx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };



const Wrapper = styled.div`

padding-top : 5%;
padding-bottom : 5%;
background : white;
border-radius : 1em;
width: 70%; height: 100%;
font-size : 20px;
`


const StyledButton = styled(Button)`
background : black;
margin-top:5%;
&:hover{
    background: #697D48;
    transition : 0.2s;
}

`
const StyledPaper = styled(Paper)`
border: 3px solid ;
border-radius: 15px;
padding-top : 5%;
padding-bottom : 5%;
opacity : 0.98;
`

const StyledTextField = styled(TextField)`
    background : transparent;
    color : red;
`

const Text = styled.h2`
    text-align : center;

`
const contactForm = () => {
    return(

<Wrapper>

                <Text>Contact Us : </Text>
                <form onSubmit={e=>sendEmail(e)}>
                <Container>
                    <Grid container spacing={1}>
                        <Container>
                        <Grid item xs={12}>
                            <TextField color="success" label="Name" name="name" variant="standard" fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type="email" color="success" name="email" label="email" variant="standard" fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField  color="success" label="Tel" name="tel" placeholder="" variant="standard" fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField multiline rows={4} color="success" name="message" label="Type your message here"  variant="standard" fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                        <StyledButton         type="submit"
 variant="contained" fullWidth>
          Send Mail!
        </StyledButton>

                        </Grid>
                        </Container>

                    </Grid>
                    </Container>
                    </form>

                </Wrapper>

            
    )
}

export default contactForm;