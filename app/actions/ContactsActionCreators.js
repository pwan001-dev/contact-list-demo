import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants';

const SampleActionCreators = {
    contactListLoaded(data) {
        AppDispatcher.dispatch({
            type: ActionTypes.CONTACT_LIST_LOADED,
            data
        });
    },
    contactAdded(data) {
        AppDispatcher.dispatch({
            type: ActionTypes.CONTACT_ADDED,
            data
        });
    },
    contactEdited(data) {
        AppDispatcher.dispatch({
            type: ActionTypes.CONTACT_EDITED,
            data
        });
    },
    contactDeleted(data) {
        AppDispatcher.dispatch({
            type: ActionTypes.CONTACT_DELETED,
            data
        });
    },
};

export default SampleActionCreators;
