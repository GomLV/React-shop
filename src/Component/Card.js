import { Col } from "react-bootstrap";

function Card(props){
    return(
        <Col>
            <img src={ props.shoes.img } width="80%"/>
            <h4>{ props.shoes.title }</h4>
            <p>{ props.shoes.content }</p>
        </Col>
    )
}

export default Card;