import axios from 'axios';
import firebaseService from 'app/services/firebaseService';

export const GET_EVENTS = '[E-COMMERCE APP] GET EVENTS';
export const SET_EVENTS_SEARCH_TEXT = '[E-COMMERCE APP] SET EVENTS SEARCH TEXT';
export const DELETE_EVENTS = 'DELETE EVENTS';

export function getEvents() {
    let starCountRef = firebaseService.db.ref('events');
    return (dispatch) => starCountRef.on('value', function (snapshot) {
        let data = !!snapshot.val() ? Object.values(snapshot.val()) : [];
        dispatch({
            type: GET_EVENTS,
            payload: data
        })
    });
}

export function deleteEvents(selected) {
    let starCountRef = firebaseService.db.ref('events');
    let updates = {};
    for(let item of selected) {
        updates[item] = null
    }
    return (dispatch) => starCountRef.update(updates).then(
        dispatch({
            type: DELETE_EVENTS,
            payload: selected,
        })
    );
}

export function setEventsSearchText(event) {
    return {
        type: SET_EVENTS_SEARCH_TEXT,
        searchText: event.target.value
    }
}
