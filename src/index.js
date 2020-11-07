import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

//store and middleware
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

const sagaMiddleware = createSagaMiddleware();

//reducers
function* fetchHistory() {
  console.log('-------> history GET');
  //this function gets from the saga and sends to the reducer
  try {
    const response = yield axios.get('/history');
    console.log('GET HISTORY HERE', response.data);
    yield put({
      type: 'get_history',
      payload: response.data
    })
  } catch (err) {
    console.log(err);
  }
};//end fetchHistory

//rootSaga
function* rootSaga() {
  yield takeEvery('add_history', addHistory);
  yield takeEvery('fetch_history', fetchHistory);
};//end sagas

//sagas
function* addHistory(action) {
  console.log('-------> in addHistory', action.payload.equation, '=', action.payload.output);
  //this function send data to our database
  let history = action.payload.output
  let equation = action.payload.equation
  try {
    yield axios.post('/history', { history: history, equation });
    console.log('adding history here', history, 'and equation', equation);
  } catch (err) {
    console.log('did not make it to axios.post', err)
  }
}

//store reducer
const calcHistory = (state = [], action) => {
  //this reducer holds our recent 10 calculations
  if(action.type === 'get_history'){
    return action.payload;
  }
  return state;
};// end calcHistory reducer

const storeInstance = createStore(
  combineReducers({
    calcHistory,
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
