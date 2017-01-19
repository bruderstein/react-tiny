
import { DATA_FETCHED } from '../actions/fetchData';

export default function sample(state = [], action) {
  switch (action.type) {
    case DATA_FETCHED:
      // Add the data to the state, and create a new array with the new entry
      // This is easier with Immutable.js, but means accessing Immutable objects everywhere (slightly
      // different API).   e.g.  myobj.get('property') instead of myobj.property
      // We'll stick with a normal array here, but bear in mind this could get slow with 10000s of items
      return [ ...state, { id: action.payload.id, response: action.payload.response } ];
    default:
      return state;
  }
}
