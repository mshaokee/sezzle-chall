import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

// import rootReducer from './redux/reducers';
// import rootSaga from './redux/sagas';

import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';


const sagaMiddleware = createSagaMiddleware();

//reducers


//rootSaga
function* rootSaga() {
  yield takeEvery('add_history', addHistory);
};//end sagas

//sagas
function* addHistory(action) {
  console.log('-------> in addHistory', action.payload.output);
  let history = action.payload.output
  // try {
  //   const response = yield axios.post('/history', {history: history});
  //   console.log('history is:', response);
  // }catch(err){
  //   console.log(err)
  // }
}

const storeInstance = createStore(
  combineReducers({

  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
