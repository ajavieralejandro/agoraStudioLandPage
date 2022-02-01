import FadeIn from "../../components/animations/fadeIn";
import styled from "styled-components";
import React,{useState,useEffect} from "react";
import { Slider } from '@lifarl/react-scroll-snap-slider';
import Wrapper from "../../components/Wrapper/wrapper";
import { collection,getDocs } from '@firebase/firestore';
import db from '../../firebase/firebase.config';
import Image from "../../components/Image/Image";



import Grid from '@mui/material/Grid';




const StyledImg = styled(Image)`
    width : 220px;
    height : auto;
    padding : 2%;
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
                <StyledImg src={item.img} alt={item.alt} key={index} />
            )
        })}
          </Grid>
          </Wrapper>
  

  );
};

export default SoftwarePage;
