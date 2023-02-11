import { configureStore, createSlice } from '@reduxjs/toolkit';

//redux 사용 예시
//useState와 비슷한 역할
let user = createSlice({
  name : 'user',          //state 이름
  initialState : 'kim',   //state 값
  reducers : {            //state 수정
    changeName(state){
      return 'john ' + state
    }
  }
});

//state 변경함수 export
export let { changeName } = user.actions

//장바구니 state
let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    cart_count_minus(state,action){
      let idx = state.findIndex((x)=>x.id == action.payload);
      if(state[idx].count > 0){
        state[idx].count -= 1;
      }else{
        return state;
      }
      
    },
    cart_count_plus(state,action){
      let idx = state.findIndex((x)=>x.id == action.payload);
      state[idx].count += 1;
    },
    cart_add(state,action){
      if(state.find((x)=>x.id==action.payload.id)){   //이미 장바구니에 있는 상품일 경우
        state.find((x)=>x.id==action.payload.id).count += 1;
      }else{                                          //장바구니에 없는 상품일 경우
        state.push(action.payload);
      }
      
    }
  }
});

export let { cart_count_minus, cart_count_plus, cart_add } = cart.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer
  }
});