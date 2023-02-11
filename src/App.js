import { createContext, useState } from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import './App.css';
import data from './data.js'
import { Routes, Route, useNavigate } from 'react-router-dom'
import DetailPage from './pages/Detail';
import MainPage from './pages/Main';
import { AboutPage, MemberPage, LocationPage } from './pages/About';
import Cart from './pages/Cart';
import axios from 'axios';

function App() {

  let [shoes,setShoes] = useState(data);
  let [count,setCount] = useState(2);
  let [loading,setLoading] = useState(false);

  let navigate = useNavigate();
  return (
    <div className="App">



      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">GLV몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>     

      <Routes>
        <Route path='/' element={ 
          <>
            <div className='main-bg'></div>
            <MainPage shoes={ shoes }/>
            {
              loading ? <h1>로딩중...</h1> : null
            }
            {
              
            
              count>3 ? null :             
              <button onClick={ ()=>{ 
                setLoading(true);
                axios.get('https://codingapple1.github.io/shop/data'+count+'.json')
                .then((result)=>{ 
                  var newArr = [...shoes];
                  newArr.push(...result.data);
                  setShoes(newArr);
                  setCount(count+1);
                  setLoading(false);
                })
                .catch(()=>{ 
                  console.log("요청 실패")
                  setLoading(false);
                })

              
              } }>더보기</button>
            }

          </>
        }/>
        <Route path='/detail' element={ <MainPage shoes={ shoes }/> }/>
        <Route path='/detail/:id' element={ <DetailPage shoes={ shoes }/> }/>
        <Route path='/about' element={ <AboutPage/> }>
          <Route path='member' element={ <MemberPage/> }/>
          <Route path='location' element={ <LocationPage/> }/>
        </Route>
        <Route path='*' element={ <div>잘못된 경로입니다.</div> }/>
        <Route path='/cart' element={ <Cart/> }/>
      </Routes>


    </div>
  );
}






export default App;
