import { commissionConstant } from './constants'
import axiosInstance from '../helpers/axiosCommis'
import { toast } from 'react-hot-toast'

export const getAll = () => {
    return async (dispatch) => {
        dispatch({ type: commissionConstant.GET_COMMISSION_REQUEST })
        const res = await axiosInstance.get("/Commission/get")

        if (res.status === 201) {

            toast.success("Commision data fetched sucessfully..!", {
                id: 'fetched success'
            })
            dispatch({
                type: commissionConstant.GET_COMMISSION_SUCCESS,
                payload: res.data.payload
            })
        }
        else {
            dispatch({ type: commissionConstant.GET_COMMISSION_FAILURE })
        }
    }
}


export const acceptOrder = (data) => {

    return async (dispatch) => {
        try{
            dispatch({type:commissionConstant.ACCEPT_ORDER_REQUEST})
            const res = await axiosInstance.post('/',data)
            if(res.status === 201){
                toast.success("Order Accepted..!",{
                    id: 'acpOrd'
                })
                dispatch({
                    type:commissionConstant.ACCEPT_ORDER_SUCCESS,
                    payload:res.data.payload
                })
                // dispatch(GetCart())
            }else{
                toast.error("Order accept error..!",{
                    id: 'acperr'
                })
                dispatch({type:commissionConstant.ACCEPT_ORDER_FAILURE})
            }
        }catch(error){
          console.log("server crashed..!")
          toast.error("server crashed..!",{
            id: 'crshed'
          })
        }
    }
}