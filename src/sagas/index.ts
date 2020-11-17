import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects';
import * as actions from '../actions'; 
import { api } from '../services';

export function* getAllProducts() {
  const products = yield call(api.getProducts)
  yield put(actions.receiveProducts(products))
} 
export function* watchGetProducts() {
  yield takeEvery(actions.GET_ALL_PRODUCTS, getAllProducts)
}
 
export default function* root() {
  yield all([fork(getAllProducts), fork(watchGetProducts)])
}
