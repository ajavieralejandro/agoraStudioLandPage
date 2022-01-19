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

const StyledPaper = styled.div`
  border-radius:15px;
  font-size : 22px;
  background : transparent;
  text-align: justify;
    text-justify: inter-word;
  color : white;
  &:hover{
    transition : 0.5s;
    transform : scale(1.02);
  }
 
  @media (max-width:600px){
    font-size : 16px;

  }

`

const StyledH1 = styled.h1`
color : white;
text-align : center;

`

const StyledTypography = styled.h1`


`


const AboutPage = () =>{
    return(
        <FadeIn >
        <section id="about">


        <Wrapper>
        <StyledH1>Agora Studio</StyledH1>

      

        <Container>
          <StyledPaper>
        
        <Typography variant="body3"  gutterBottom>
      We are a petit-studio in love with 3D and new technologies. Our team works passionately on projects ranging from 3D printing, product design, 3D animation, to augmented reality, virtual reality and video games. We really enjoy spending our hours between textures, polygons, voxels and enhancing projects, committing ourselves 100% to each development, in each work, with each design and object. We believe that leaving the screens is extremely necessary to grow as a society and as a species, that is why we are fascinated by interactivity and digital manufacturing. We have several years of experience serving innovative companies, cutting-edge studios, educational institutions, passionate artists from around the world and our own projects awarded by different organizations and institutions. We would love to hear from you, surely we can create something together beyond any expectation by accompanying you throughout the development path, your wishes are orders.
      </Typography>
      </StyledPaper>
        </Container>
        </Wrapper>
        </section>
        </FadeIn>

    )
}

export default AboutPage;