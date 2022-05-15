import React,{useState} from 'react';
import Img1 from '../../img/img1.webp';
import Img2 from '../../img/img2.webp';
import Img3 from '../../img/img3.webp';
import Img4 from '../../img/img4.webp';
import Img5 from '../../img/img5.webp';
import Img6 from '../../img/img6.webp';
import styled from 'styled-components';
import Modal from '../Modal/modal';
import FadeIn from '../animations/fadeIn';
import Image from 'material-ui-image'
import { Container } from '@mui/material';



const GalleryDiv = styled.div`
    -webkit-column-count:3;
    -moz-column-count:3;
    column-count:3;
    -webkit-column-width : 33%;
    -moz-column-width : 33%;
    column-width : 33%;
    padding : 0 12px;
    @media (max-width: 480px) {
        -webkit-column-count:1;
        -moz-column-count:1;
        column-count:1;
        -webkit-column-width : 100%;
        -moz-column-width : 100%;
        column-width : 100  %;
      }    
`;const StyledText = styled.h1`
display : none;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color : white;

    `


const Pics = styled.div`
    -webkit-transition : all 350ms ease;
    transition : all 350ms ease;
    cursor : pointer;
    padding-bottom : 10px;
    
    &:hover{
        filter : opacity(.7);
    } 
    &:hover ${StyledText} {
        display : block;
        transition : 3s;
      }

`;




    const StyledImg = styled.img`
    transition: transform 1s;
    width : 100%;

    
    `

let data = [
    {
        id: '1',
        imgSrc : Img1
    },
    {
        id: '2',
        imgSrc : Img2
    },
    {
        id: '3',
        imgSrc : Img3
    },
    {
        id: '4',
        imgSrc : Img4
    },
    {
        id: '5',
        imgSrc : Img5
    },
    {
        id: '6',
        imgSrc : Img6
    }
];

    const Gallery = () =>{
        const [image, setImage] = useState(null);
        const [modal, setModal] = useState(false);
        const handleClick = (imgSrc)=>{
            setImage(imgSrc);
            setModal(true);
        }
        const handleClose = () =>{
            setModal(false);
        }

        return(
            <>
                <Modal visibility={modal} image={image} handleClose={handleClose} />
                <GalleryDiv>
                    <Container>
                    {data.map((item,index)=>{
                        return(
                            <FadeIn>
                            <Pics  key={index} onClick={()=>handleClick(item.imgSrc)}>
                                <StyledImg alt="work-img" data-aos="fade-in" src={item.imgSrc}  />
                                <StyledText>Hola EStoy aca</StyledText>

                            </Pics>
                            </FadeIn>

                        )
                    })}
                    </Container>

                </GalleryDiv>
            </>
        )
    }


    export default Gallery;


