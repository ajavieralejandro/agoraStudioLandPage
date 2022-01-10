import React from 'react';
import { Paper } from '@mui/material';
import styled from 'styled-components';
import { Container } from '@mui/material';

const StyledImg = styled.img`
    width:400px;
    height:auto;
`
const GalleryImage = ({data}) =>{
    return(
        <Container>
<StyledImg src={data} />
</Container>

)
}

export default GalleryImage;