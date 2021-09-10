import axios from 'axios';
import firebaseService from 'app/services/firebaseService';

export const GET_PACKAGES = '[E-COMMERCE APP] GET PACKAGES';
export const SET_PACKAGES_SEARCH_TEXT = '[E-COMMERCE APP] SET PACKAGES SEARCH TEXT';
export const DELETE_PACKAGES = 'DELETE PACKAGES';

export function getPackages() {
    let starCountRef = firebaseService.db.ref('packages');
    return (dispatch) => starCountRef.on('value', function (snapshot) {
        let data = !!snapshot.val() ? Object.values(snapshot.val()) : [];
        dispatch({
            type: GET_PACKAGES,
            payload: data
        })
    });
}

export function deletePackages(selected) {
    let starCountRef = firebaseService.db.ref('packages');
    let updates = {};
    for(let item of selected) {
        updates[item] = null
    }
    return (dispatch) => starCountRef.update(updates).then(
        dispatch({
            type: DELETE_PACKAGES,
            payload: selected,
        })
    );
}

export function setPackagesSearchText(event) {
    return {
        type: SET_PACKAGES_SEARCH_TEXT,
        searchText: event.target.value
    }
}
