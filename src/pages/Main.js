import Card from "../Component/Card"
import { Row, Container } from "react-bootstrap";

function MainPage(props){
    return(
      <>
        <div className='main-bg'></div>
        <Container>
          <Row>
            {
              props.shoes.map((x,i)=>{
                return (
                  <Card key = { i } shoes={ x }/>
                )
              })
            }
          </Row>
        </Container>
      </>
    )
}

export default MainPage;