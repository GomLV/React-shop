import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Card(props){
    let navigate = useNavigate();
    return(
        <Col sm={4}>
            <img src={ "https://codingapple1.github.io/shop/shoes"+(props.shoes.id+1)+".jpg" } width="80%"  onClick={ ()=>{ 
                navigate( '/detail/' + props.shoes.id )
            } } />
            <h4>{ props.shoes.title }</h4>
            <p>{ props.shoes.content }</p>
        </Col>
    )
}



export default Card;