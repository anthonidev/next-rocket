
import axios from 'axios';
import {  fail_service, fail_services,  get_service, get_services } from '../slice/serviceSlice';
import { AppDispatch } from '../store';

export const getServices = () => async (dispatch: AppDispatch) => {

    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/plan/`,
        {
            headers: {
                'Accept': 'application/json',
            }
        }
    ).then(res => {
        dispatch(get_services(res.data));
    }).catch(err => {
        dispatch(fail_services(err.message));
    }
    );
}

export const getService = (slug: string|string[]) => async (dispatch: AppDispatch) => {

    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/plan/${slug}`,
        {
            headers: {
                'Accept': 'application/json',
            }
        }
    ).then(res => {
        dispatch(get_service(res.data));
    }).catch(err => {
        dispatch(fail_service(err.message));
    }
    );
}

