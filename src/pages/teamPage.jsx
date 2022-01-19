import { Container } from '@mui/material';
import styled from 'styled-components';
import TeamCard from '../components/teamCard/teamCard';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Wrapper = styled.div`
padding-top: 7%;
@media (max-width: 600px){
  padding-top:25%;
}
text-align : center;
`

const TeamPage = ({data}) =>{
  //console.log("data es : ",data);
    return(

      <section id="team">
              <Wrapper>

        <Container>
             <Box sx={{ flexGrow: 1 }}>
             <Grid container spacing={4}>


               {data.map((partner,index)=>{
                  return(
              
                  <Grid key={index.toString()} item xs={6} sm={3}>
                      <TeamCard data={partner} />
                  </Grid>
);

               })}

       
      </Grid>
    </Box>

        </Container>
        </Wrapper>

        </section>

    )
}

export default TeamPage;