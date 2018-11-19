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
        // 1. Do something. (e.g. Fetch JSON from an API)
        // 2. Create an action from the result.
        // 3, Pass the action to the dispatch().
        AppDispatcher.dispatch({
            type: ActionTypes.CONTACT_ADDED,
            data
        });
    },
};

export default SampleActionCreators;
