import axios from 'axios';
import firebaseService from 'app/services/firebaseService';

export const GET_SERVICES = '[E-COMMERCE APP] GET SERVICES';
export const SET_SERVICES_SEARCH_TEXT = '[E-COMMERCE APP] SET SERVICES SEARCH TEXT';
export const DELETE_SERVICES = 'DELETE SERVICES';

export function getServices() {
    let starCountRef = firebaseService.db.ref('services');
    return (dispatch) => starCountRef.on('value', function (snapshot) {
        let data = !!snapshot.val() ? Object.values(snapshot.val()) : [];
        dispatch({
            type: GET_SERVICES,
            payload: data
        })
    });
}

export function deleteServices(selected) {
    let starCountRef = firebaseService.db.ref('services');
    let updates = {};
    for(let item of selected) {
        updates[item] = null
    }
    return (dispatch) => starCountRef.update(updates).then(
        dispatch({
            type: DELETE_SERVICES,
            payload: selected,
        })
    );
}

export function setServicesSearchText(event) {
    return {
        type: SET_SERVICES_SEARCH_TEXT,
        searchText: event.target.value
    }
}
