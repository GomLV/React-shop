import Card from "./Card"
import { Row, Container } from "react-bootstrap";

//현재 새로고침시 shoes의 데이터가 원래상태로 초기화 되면서 
//로컬스토리지에 저장되어있는 3번 이후의 신발을 제대로 불러오지 못하고 페이지가 깨지는 오류가 있음. 
//데이터를 전체적으로 수정해야하는 문제라 문제원인만 파악하고 넘어감
function Viewd(props){
  console.log(props.recent)
  console.log(props.shoes)
  if(props.recent){
    return(
      <>
        <h1>최근 본 목록</h1>
        <Container>
          <Row>
            {
              props.recent.map((x,i)=>{
                return (
                  <Card i = { i } key = { i } shoes={ props.shoes.find(y=>y.id==x) }/>
                )
              })
            }
          </Row>
        </Container>
      </>

    )
  } else {
    return null
  }
  

}

export default Viewd;