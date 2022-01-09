import './App.css';
import { useEffect,useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer/footer';
import TeamPage from './pages/teamPage';
import ContactPage from './pages/contactPage/contactPage';
import VideoPage from './pages/videoPage/videoPage';
import Gallery from './components/gallery/gallery';
import styled from 'styled-components';
import ResponsiveImage from './components/responsiveImage/responsiveImage';
import { collection,getDocs } from '@firebase/firestore';
import db from '../src/firebase/firebase.config';



const Wrapper = styled.div`
`
function App() {
  const fetchData = async () =>{
    const teamCol = collection(db, 'team');
    const teamSnapshot = await getDocs(teamCol);
    const teamList = teamSnapshot.docs.map(doc => doc.data());
    setTeam(teamList);
  }

  const fetchDataWork = async ()=>{
    const worksCol = collection(db, 'works');
    const worksSnapshot = await getDocs(worksCol);
    const worksList = worksSnapshot.docs.map(doc => doc.data());
    setWorks(worksList);

  }
  
  
  useEffect(() => {
    fetchData();
    fetchDataWork();
    
  }, [])

  const [team, setTeam] = useState([]);
  const [works, setWorks] = useState([]);

  return (
    <div>
   

      <header className="App-header">
      <Navbar />
      <VideoPage />

      </header>
      <Wrapper>
      <Gallery data={works} />

      <TeamPage data={team} />


      <ContactPage />
      <Footer />
      </Wrapper>
      
    </div>
  );
}

export default App;
