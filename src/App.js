import { useState } from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import './App.css';
import data from './data.js'
import { Routes, Route, useNavigate } from 'react-router-dom'
import DetailPage from './pages/Detail';
import MainPage from './pages/Main';
import { AboutPage, MemberPage, LocationPage } from './pages/About';

function App() {

  let [shoes,setShoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">



      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">GLV몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>     

      <Routes>
        <Route path='/' element={ <MainPage shoes={ shoes }/> }/>
        <Route path='/detail/:id' element={ <DetailPage shoes={ shoes }/> }/>
        <Route path='/about' element={ <AboutPage/> }>
          <Route path='member' element={ <MemberPage/> }/>
          <Route path='location' element={ <LocationPage/> }/>
        </Route>
        <Route path='*' element={ <div>잘못된 경로입니다.</div> }/>
      </Routes>


    </div>
  );
}






export default App;
