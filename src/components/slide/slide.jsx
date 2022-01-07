import React from 'react';
import styled from 'styled-components';

const Slide1 = styled.div`
position: relative;
padding: 25vh 10%;
min-height: 100vh;
width: 100vw;
box-sizing: border-box;
box-shadow: 0 -1px 10px rgba(0, 0, 0, .7);
  transform-style: inherit;

`

const Title = styled.div`
min-height: 100vh;

width: 50%;
  padding: 5%;
  border-radius: 5px;
  background: rgba(240,230,220, .7);
  box-shadow: 0 0 8px rgba(0, 0, 0, .7);

`

const Slide = (props) =>{
    return(
            <Title>
          {props.childre}
            </Title>
      
    )
}

export default Slide;