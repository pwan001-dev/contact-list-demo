import {ReduceStore} from 'flux/utils';
import ActionTypes from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

class ContactsStore extends ReduceStore {
    getInitialState() {
        return {
            contacts: []
        };
    }

    reduce(state, action) {
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
            case ActionTypes.CONTACT_EDITED: {
                let contacts = [...state.contacts];
                contacts.forEach((contact, index) => {
                    if (contact.id === action.data.id) {
                        contacts[index] = action.data.contact
                    }
                });
                return {
                    contacts
                };
            }
            case ActionTypes.CONTACT_DELETED: {
                return {
                    contacts: state.contacts.filter((contact) => {
                        return contact.id !== action.data.contact.id
                    })
                };
            }
            default:
                return state;
        }
    }
}

export default new ContactsStore(AppDispatcher);
