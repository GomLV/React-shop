import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { cart_count_minus, cart_count_plus } from './../store.js';



function Cart(){

    let state = useSelector((store)=> store );
    let dispatch = useDispatch();

    return(
        <div>
            <h2>{ state.user }의 장바구니</h2>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((x,i)=>{
                            return(
                                <tr key={ i }>
                                    <td>{ x.id }</td>
                                    <td>{ x.name }</td>
                                    <td>{ x.count }</td>
                                    <td>
                                        <button onClick={()=>{ dispatch(cart_count_minus(x.id)) }}>-</button> 
                                        { x.count }   
                                        <button onClick={()=>{ dispatch(cart_count_plus(x.id)) }}>+</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> 
        </div>
    );
}



export default Cart;