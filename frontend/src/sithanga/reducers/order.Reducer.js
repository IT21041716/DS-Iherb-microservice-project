import { orderConstant } from "../actions/constants";

const init ={
    acptOrders: [],
    loading: false,
    orders:[],

}

export default(state = init,action)=> {
    switch(action.type){
        case orderConstant.ACCEPT_ORDER_REQUEST:
            state={
                ...state,
                loading: true
            }
            break;
        case orderConstant.ACCEPT_ORDER_SUCCESS:
            state={
                ...state,
                loading: false,
                acptOrders: action.payload
            }
            break;
        case orderConstant.ACCEPT_ORDER_FAILURE:
            state={
                ...state,
                loading: false
            }
            break;
        case orderConstant.GET_ORDERS_REQUEST:
            state={
                ...state,
                loading: true
            }
            break;
        case orderConstant.GET_ORDERS_SUCCESS:
            state={
                ...state,
                loading: false,
                orders:action.payload
            }
            break;
        case orderConstant.GET_ORDERS_FAILURE:
            state={
                ...state,
                loading: false
            }
            break;

    }
    return state
}