import {ReduceStore} from 'flux/utils';
import ActionTypes from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

class ContactsStore extends ReduceStore {
    getInitialState() {
        return {
            contacts: [
                // {
                //     id: '0',
                //     type: 'init',
                //     price: 0.01
                // }
            ]
        };
    }

    reduce(state, action) {
        console.log(action)
        switch (action.type) {
            case ActionTypes.CONTACT_LIST_LOADED:
                return {
                    contacts: action.data.contacts
                };
            case ActionTypes.CONTACT_ADDED:
                return {
                    contacts: [
                        ...state.contacts,
                        action.data.contact
                    ]
                };
            default:
                return state;
        }
    }
}

export default new ContactsStore(AppDispatcher);
