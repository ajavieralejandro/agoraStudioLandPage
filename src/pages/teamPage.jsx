import { Container } from '@mui/material';
import styled from 'styled-components';
import TeamCard from '../components/teamCard/teamCard';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import contactForm from '../components/contactForm/contactForm';
import Paper from '@mui/material/Paper';
import Slide from '../components/slide/slide';
const Wrapper = styled(Container)`
padding-top: 7%;
text-align : center;
`

const TeamPage = ({data}) =>{
  console.log("data es : ",data);
    return(
      <section id="team">
        <Container>
        <Wrapper>
             <Box sx={{ flexGrow: 1 }}>
             <Grid container spacing={4}>

               {data.map((partner)=>{
                 console.log(partner);
                  return(
                  <Grid  item xs={6} sm={4}>
                  <TeamCard data={partner} />
                  </Grid>);

               })}
       
      </Grid>
    </Box>

        </Wrapper>
        </Container>
        </section>
    )
}

export default TeamPage;