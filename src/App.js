import './App.css';
import { useEffect,useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer/footer';
import TeamPage from './pages/teamPage';
import ContactPage from './pages/contactPage/contactPage';
import GalleryPage from './pages/galleryPage2/galleryPage2';
import styled from 'styled-components';
import { collection,getDocs } from '@firebase/firestore';
import db from '../src/firebase/firebase.config';
import Video from '../src/components/Video/Video';
import AboutPage from './pages/about/aboutPage';
import { query, orderBy } from "firebase/firestore";
import CollaborationsPage from './pages/collaborationsPage/collaborationsPage';
import WistiaVideo from './components/wistiaVideo/wistiaVideo';




const Wrapper = styled.div`
`
function App() {

  const fetchData = async () =>{
    const teamCol = query(collection(db,"team"),orderBy("num"));
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
      <CollaborationsPage />


      <ContactPage />
      <Footer />
      </Wrapper>
      
    </div>
  );
}

export default App;
