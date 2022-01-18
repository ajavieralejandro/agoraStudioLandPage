import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';



const FlipUp = props =>{
    useEffect(() => {
        Aos.init({duration:500,once:true});
    }, []);
    return(
        <div data-aos="flip-up">
            {props.children}
        </div>
    )
}

export default FlipUp;