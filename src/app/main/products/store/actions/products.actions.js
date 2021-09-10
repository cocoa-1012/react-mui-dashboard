import axios from 'axios';
import firebaseService from 'app/services/firebaseService';

export const GET_PRODUCTS = '[E-COMMERCE APP] GET PRODUCTS';
export const SET_PRODUCTS_SEARCH_TEXT = '[E-COMMERCE APP] SET PRODUCTS SEARCH TEXT';
export const DELETE_PRODUCTS = 'DELETE PRODUCTS';

export function getProducts() {
    let starCountRef = firebaseService.db.ref('products');
    return (dispatch) => starCountRef.on('value', function (snapshot) {
        let data = !!snapshot.val() ? Object.values(snapshot.val()) : [];
        dispatch({
            type: GET_PRODUCTS,
            payload: data
        })
    });
}

export function deleteProducts(selected) {
    let starCountRef = firebaseService.db.ref('products');
    let updates = {};
    for(let item of selected) {
        updates[item] = null
    }
    return (dispatch) => starCountRef.update(updates).then(
        dispatch({
            type: DELETE_PRODUCTS,
            payload: selected,
        })
    );
}

export function setProductsSearchText(event) {
    return {
        type: SET_PRODUCTS_SEARCH_TEXT,
        searchText: event.target.value
    }
}
