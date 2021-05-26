import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import root from './root';
import mediaReducers from './mediaReducers';
import locationReducers from './locationReducers';
import eventReducers from './eventReducers';
import connectGroupReducers from './connectGroupReducers';
import homeReducers from './homeReducers';

export default combineReducers({
  root,
  routing: routerReducer,
  form: formReducer,
  mediaData: mediaReducers,
  locationData: locationReducers,
  connectGroupData: connectGroupReducers,
  eventData: eventReducers,
  homeData: homeReducers
});
