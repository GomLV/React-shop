import { useEffect, useState } from "react";
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


  let [alert, setAlert] = useState(true)
  let [validate, setValidate] = useState(true);
  let { id } = useParams();
  var data = props.shoes.find( x => x.id == id );

  /**
   *   mount, update 될때 실행(렌더링 다 되고 나서 실행)
   * -어려운 연산
   * -서버에서 데이터 가져오는 작업
   * -타이머 장착 등 에 사용
   */
  useEffect(()=>{
    //2초 뒤 실행
    let timer = setTimeout(()=>{ setAlert(false) },2000);
    return ()=>{
      //clean up function
      //useEffect 동작 전에 실행
      clearTimeout(timer);
    }
  },[]);

  function checkVal(val){
    const check = new RegExp(/^[0-9]+$/);
    check.test(val) ? setValidate(true) : setValidate(false);
  }
  
  if(!data){
    return(
    <div>
      잘못된 상품 번호입니다.
    </div>
    )
  }else{
    return(
      <div className="container">
        {
          alert ?
          <div className="alert alert-warning">
            2초 이내 구매시 할인
          </div> : null

        }
        <div className="row">
            <div className="col-md-6">
              <img src={ data.img } width="100%" />
            </div>
            <div className="col-md-6">
              <h4 className="pt-5">{ data.title }</h4>
              <p>{ data.content }</p>
              <p>{ data.price } 원</p>
              <input type='text' onChange={ (e)=>{ checkVal(e.target.value) } }></input> 개
              {
                validate ? <><br/><br/></>: <p style={ {color:"red"} }>숫자만 입력 가능합니다.</p>
              }
              <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
      </div> 
    )
  }
}

export default DetailPage;