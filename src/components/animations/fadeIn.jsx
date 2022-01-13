import styled, { keyframes } from 'styled-components';
import { fadeIn as bounce} from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;
const FadeInDiv = styled.div`
  animation: 3s ${bounceAnimation};
`;

const FadeIn = props =>{
    return(
        <FadeInDiv>
            {props.children}
        </FadeInDiv>
    )
}

export default FadeIn;