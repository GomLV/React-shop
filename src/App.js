import { useState } from 'react';
import { Row,Navbar,Container,Nav,Col } from 'react-bootstrap';
import './App.css';
import data from './data.js'

function App() {

  let [shoes,setShoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">GLV몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <Container>
        <Row>
          {
            shoes.map((x,i)=>{
              return (
                <Card key = { i } shoes={ x }/>
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}


function Card(props){
  return(
    <Col>
      <img src={ props.shoes.img } width="80%"/>
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content }</p>
    </Col>
  )
}
export default App;
