import axios from 'axios';
import { FuseUtils } from '@fuse';
import { showMessage } from 'app/store/actions/fuse';
import firebaseService from 'app/services/firebaseService';

export const GET_PACKAGE = '[E-COMMERCE APP] GET PACKAGE';
export const SAVE_PACKAGE = '[E-COMMERCE APP] SAVE PACKAGE';

let starCountRef = firebaseService.db;

export function getPackage(params) {
    return (dispatch) => starCountRef.ref(`packages/${params.packageId}`).on('value', function (snapshot) {
        let data = snapshot.val();
        dispatch({
            type: GET_PACKAGE,
            payload: data
        })
    });
}

export function savePackage(data) {
    return (dispatch) =>
        starCountRef.ref('packages/' + data.id).set(data).then(
            dispatch({
                type: SAVE_PACKAGE,
                payload: data
            })
        );
}

export function newPackage() {
    const data = {
        id: FuseUtils.generateGUID(),
        name: '',
        handle: '',
        description: '',
        images: [],
        price: 0,
        totalPrice: 0,
        fee: 0,
        validity: '',
    };
    
    return {
        type: GET_PACKAGE,
        payload: data
    }
}
