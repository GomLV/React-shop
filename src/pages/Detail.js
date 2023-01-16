import { useParams } from "react-router-dom";
//import styled from "styled-components";

//styled-components, 이렇게 스타일을 컴포넌트처럼 쓸 수 있음
/*
let ColorBtn = styled.button`
  background : ${ props => props.bg };
  color : black;
  padding : 10px;
`
*/

function DetailPage(props){
  let { id } = useParams();
  var data = props.shoes.find( x => x.id == id );

  if(!data){
    return(
    <div>
      잘못된 상품 번호입니다.
    </div>
    )
  }else{
    return(
      <div className="container">
      
        <div className="row">
            <div className="col-md-6">
              <img src={ data.img } width="100%" />
            </div>
            <div className="col-md-6">
              <h4 className="pt-5">{ data.title }</h4>
              <p>{ data.content }</p>
              <p>{ data.price } 원</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
      </div> 
    )
  }
}

export default DetailPage;