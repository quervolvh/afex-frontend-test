import * as tradeActionTypes from '../types/tradeTypes';
import { typeOfDispatch } from 'redux/store';
import axios from 'service/axios';

export const retrieveTradeLog = (

    data: { messages?: any[] }

) => async (dispatch: typeOfDispatch) => {

    try {

        if (data?.messages) {

            dispatch({ type: tradeActionTypes.RETRIEVE_TRADE_LOGS_SUCCESS, payload: data });

            return;

        }

        throw new Error("");

    } catch (error: any) {

        dispatch({ type: tradeActionTypes.RETRIEVE_TRADE_LOGS_FAILURE, payload: {} });

        return false;

    }
}


const dispatchActions = (type: "retrieve-products" | "retrieve-pricing") => {

    if (type === "retrieve-products") {

        return ({
            start: tradeActionTypes.RETRIEVE_PRODUCTS_START,
            success: tradeActionTypes.RETRIEVE_PRODUCTS_SUCCESS,
            failure: tradeActionTypes.RETRIEVE_PRODUCTS_FAILURE
        });

    }

    return ({
        start: tradeActionTypes.RETRIEVE_PRODUCTS_START,
        success: tradeActionTypes.RETRIEVE_PRODUCTS_SUCCESS,
        failure: tradeActionTypes.RETRIEVE_PRODUCTS_FAILURE
    });

}

export const tradeActions = (
    ref: "retrieve-products" | "retrieve-pricing" = "retrieve-products"
) =>
    async (dispatch: typeOfDispatch) => {

        try {

            dispatch({
                type: dispatchActions(ref).start,
                payload: {}
            });

            const { data } = await axios.post('/api/trade', { authType: ref });

            dispatch({
                type: dispatchActions(ref).success,
                payload: data
            });

            return true;

        } catch (error: any) {

            const data = error?.response?.data;

            dispatch({
                type: dispatchActions(ref).failure,
                payload: { data }
            });

            return data?.error?.message || false;
        }

    };
