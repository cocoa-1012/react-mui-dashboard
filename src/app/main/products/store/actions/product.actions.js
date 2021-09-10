import axios from 'axios';
import { FuseUtils } from '@fuse';
import { showMessage } from 'app/store/actions/fuse';
import firebaseService from 'app/services/firebaseService';

export const GET_PRODUCT = '[E-COMMERCE APP] GET PRODUCT';
export const SAVE_PRODUCT = '[E-COMMERCE APP] SAVE PRODUCT';

let starCountRef = firebaseService.db;

export function getProduct(params) {
    return (dispatch) => starCountRef.ref(`products/${params.productId}`).on('value', function (snapshot) {
        let data = snapshot.val();
        dispatch({
            type: GET_PRODUCT,
            payload: data
        })
    });
}

export function saveProduct(data) {
    return (dispatch) =>
        starCountRef.ref('products/' + data.id).set(data).then(
            dispatch({
                type: SAVE_PRODUCT,
                payload: data
            })
        );
}

export function newProduct() {
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
        type: GET_PRODUCT,
        payload: data
    }
}
