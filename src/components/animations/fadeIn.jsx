import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';



const FadeIn = props =>{
    useEffect(() => {
        Aos.init({duration:2500});
    }, []);
    return(
        <div data-aos="zoom-in">
            {props.children}
        </div>
    )
}

export default FadeIn;