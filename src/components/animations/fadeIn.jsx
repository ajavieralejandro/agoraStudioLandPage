import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';



const FadeIn = props =>{
    useEffect(() => {
        Aos.init({duration:1500});
    }, []);
    return(
        <div data-aos="fade-in">
            {props.children}
        </div>
    )
}

export default FadeIn;