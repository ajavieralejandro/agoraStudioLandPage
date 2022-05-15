import FadeIn from "../../components/animations/fadeIn";
import styled from "styled-components";
import React,{useState,useEffect} from "react";
import { Slider } from '@lifarl/react-scroll-snap-slider';
import Wrapper from "../../components/Wrapper/wrapper";
import { collection,getDocs } from '@firebase/firestore';
import db from '../../firebase/firebase.config';
import Image from "../../components/Image/Image";
import { LazyLoadImage,trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Paper } from '@mui/material';





import Grid from '@mui/material/Grid';




const StyledImg = styled(LazyLoadImage)`
  margin : auto;

`

const ImgWrap = styled(Paper)`
  background : black;
  margin : 2em;
`

const WrapperImg = styled.div`
  margin : 2em;
  min-width : 200px;
  min-height : 100px;
`

const StyledH1 = styled.h1`
color : white;

`


const SoftwarePage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchDataWork();
        
      }, []);
      const fetchDataWork = async ()=>{
          const softwareCol = collection(db, 'software');
          const softwareSnapshot = await getDocs(softwareCol);
          const softwareList = softwareSnapshot.docs.map(doc => doc.data());
          setData(softwareList);
      
        }
  
  return (
      <Wrapper>
      <StyledH1> We work with </StyledH1>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
> 
        {data.map((item,index)=>{
            return(
              <WrapperImg>
                <StyledImg
    alt={item.alt}
    effect="blur"
    src={item.img}
    height="auto"
    width="200px" />
                </WrapperImg>

            )

        })
}
          </Grid>
          </Wrapper>
  

  );
};

export default trackWindowScroll(SoftwarePage);
