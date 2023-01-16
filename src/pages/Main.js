import Card from "../Component/Card"
import { Row, Container } from "react-bootstrap";

function MainPage(props){
    return(
      <Container>
        <Row>
          {
            props.shoes.map((x,i)=>{
              return (
                <Card i = { i } key = { i } shoes={ x }/>
              )
            })
          }
        </Row>
      </Container>
    )
}

export default MainPage;