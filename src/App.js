import './App.css';
import { useEffect,useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer/footer';
import TeamPage from './pages/teamPage';
import ContactPage from './pages/contactPage/contactPage';
import VideoPage from './pages/videoPage/videoPage';
import GalleryPage from './pages/galleryPage2/galleryPage2';
import styled from 'styled-components';
import { collection,getDocs } from '@firebase/firestore';
import db from '../src/firebase/firebase.config';
import Video from '../src/components/Video/Video';
import AboutPage from './pages/about/aboutPage';
import ParallaxPage from './pages/parallaxPage/parallaxPage';



const Wrapper = styled.div`
`
function App() {

  const fetchData = async () =>{
    const teamCol = collection(db, 'team');
    const teamSnapshot = await getDocs(teamCol);
    const teamList = teamSnapshot.docs.map(doc => doc.data());
    setTeam(teamList);
  }
 
  
  useEffect(() => {
    fetchData();
    
  }, [])

  const [team, setTeam] = useState([]);

  return (
    <div >
   

      <Navbar />
      <Video />

      <Wrapper>
      <AboutPage />

        <GalleryPage />

      <TeamPage data={team} />


      <ContactPage />
      <Footer />
      </Wrapper>
      
    </div>
  );
}

export default App;
