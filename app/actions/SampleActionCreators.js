import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants';

const SampleActionCreators = {
  actionCreator001(arg) {
    AppDispatcher.dispatch({
      type: ActionTypes.TYPE_001,
      data: {
        "title": "New Title",
        "subtitle": "New Subtitle",
        "text": "New Text"
      },
    });
  },
  actionCreator002(arg) {
    // 1. Do something. (e.g. Fetch JSON from an API)
    // 2. Create an action from the result.
    // 3, Pass the action to the dispatch().
    AppDispatcher.dispatch({
      type: ActionTypes.TYPE_002,
      data: 'RESULT OF YOUT ACTION',
    });
  },
};

export default SampleActionCreators;
