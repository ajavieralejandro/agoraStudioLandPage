import React from 'react';
import TextField from '@mui/material/TextField';
import { Typography,Card,CardContent,Grid,Button } from '@mui/material';
import styled from 'styled-components';
import { Container } from '@mui/material';
import Paper from '@mui/material/Paper';




const Wrapper = styled.div`

padding-top : 5%;
padding-bottom : 5%;
background : white;
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

                <Text>Contactanos : </Text>
                <Container>
                    <Grid container spacing={1}>
                        <Container>
                        <Grid item xs={12}>
                            <TextField color="success" label="Nombre" variant="standard" fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type="email" color="success" label="mail" variant="standard" fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField  color="success" label="Tel" placeholder="" variant="standard" fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField multiline rows={4} color="success" label="Mensaje"  variant="standard" fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                        <StyledButton variant="contained" fullWidth>
          Enviar
        </StyledButton>

                        </Grid>
                        </Container>

                    </Grid>
                    </Container>

                </Wrapper>

            
    )
}

export default contactForm;