import axios from 'axios';
import { FuseUtils } from '@fuse';
import { showMessage } from 'app/store/actions/fuse';
import firebaseService from 'app/services/firebaseService';

export const GET_EVENT = '[E-COMMERCE APP] GET EVENT';
export const SAVE_EVENT = '[E-COMMERCE APP] SAVE EVENT';

let starCountRef = firebaseService.db;

export function getEvent(params) {
    return (dispatch) => starCountRef.ref(`events/${params.eventId}`).on('value', function (snapshot) {
        let data = snapshot.val();
        dispatch({
            type: GET_EVENT,
            payload: data
        })
    });
}

export function saveEvent(data) {
    return (dispatch) =>
        starCountRef.ref('events/' + data.id).set(data).then(
            dispatch({
                type: SAVE_EVENT,
                payload: data
            })
        );
}

export function newEvent() {
    const data = {
        id: FuseUtils.generateGUID(),
        name: '',
        handle: '',
        description: '',
        images: [],
        price: 0,
        totalPrice: 0,
        fee: 0,
        eventsDate: '2021-01-01',
    };
    
    return {
        type: GET_EVENT,
        payload: data
    }
}
