import { Container } from '@mui/material';
import styled from 'styled-components';
import TeamCard from '../components/teamCard/teamCard';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ContactForm from '../components/contactForm/contactForm';
import { shadows } from '@mui/system';



const Wrapper = styled.div`
    margin-top:10%; 
    margin-bottom: 5%;   `

const centerContainer = styled.div`
font-family: arial;
font-size: 24px;
margin: 25px;
width: 350px;
height: 200px;
outline: dashed 1px black;
/* Setup */
position: relative;
`

const centerChild = styled.div`
width: 50px;
height: 50px;
background-color: red;
/* Center vertically and horizontally */
position: absolute;
top: 50%;
left: 50%;
margin: -25px 0 0 -25px; /* Apply negative top and left margins to truly center the element */`

const Img = styled.img`
max-height: 100%;
max-width: 100%;
    object-fit:contain
`

const StyledDiv = styled.div`
border: 3px solid red ;

`

const TeamPage = () =>{
    return(
        <Container>
        <ContactForm />
        </Container>
    )
}

export default TeamPage;