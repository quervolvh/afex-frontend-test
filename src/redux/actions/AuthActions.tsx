import axios from 'service/axios';
import * as AuthActions from '../types/authTypes';
import { quickToast, typeOfDispatch } from 'redux/store';

export const login = (
    userDetails: {
        email: string,
        password: string,
    }) => async (dispatch: typeOfDispatch) => {

    try {

        dispatch({ type: AuthActions.LOGIN_START });

        const { data } = await axios.post('/api/auth', {...userDetails, auth_type : "password", "authType" : "login"});

        if ( data?.responseCode !== "100") throw Error(data);

        dispatch({ type: AuthActions.LOGIN_SUCCESS, payload: data });

        return true;

    } catch (error: any) {

        const data = error?.response?.data;

        quickToast({ text : String(data) });

        dispatch({ type: AuthActions.LOGIN_FAILURE, payload: data });

        return data?.error?.message || false;

    }

}

export const resetApp = () => async (dispatch: typeOfDispatch) => {
    try {
        dispatch({ type: AuthActions.RESET_APP_START });
        dispatch({ type: AuthActions.RESET_APP });
        dispatch({ type: AuthActions.RESET_APP_SUCCESS });
        return true;

    } catch (error: any) {
        dispatch({ type: AuthActions.RESET_APP_FAILURE });
    }
}
