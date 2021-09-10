import axios from 'axios';
import { FuseUtils } from '@fuse';
import { showMessage } from 'app/store/actions/fuse';
import firebaseService from 'app/services/firebaseService';

export const GET_SERVICE = '[E-COMMERCE APP] GET SERVICE';
export const SAVE_SERVICE = '[E-COMMERCE APP] SAVE SERVICE';

let starCountRef = firebaseService.db;

export function getService(params) {
    return (dispatch) => starCountRef.ref(`services/${params.serviceId}`).on('value', function (snapshot) {
        let data = snapshot.val();
        dispatch({
            type: GET_SERVICE,
            payload: data
        })
    });
}

export function saveService(data) {
    return (dispatch) =>
        starCountRef.ref('services/' + data.id).set(data).then(
            dispatch({
                type: SAVE_SERVICE,
                payload: data
            })
        );
}

export function newService() {
    const data = {
        id: FuseUtils.generateGUID(),
        name: '',
        handle: '',
        description: '',
        images: [],
        price: 0,
        totalPrice: 0,
        fee: 0,
    };
    
    return {
        type: GET_SERVICE,
        payload: data
    }
}
