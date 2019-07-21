import {put, call, takeEvery} from "redux-saga/effects";

export const ITEMS_LIST_TYPES = {
    SHOW_ITEMS_LIST_SUCCESS: 'SHOW_ITEMS_LIST_SUCCESS',
    SHOW_ITEMS_LIST: 'SHOW_ITEMS_LIST',
    ADD_TO_FAV: 'ADD_TO_FAV'
};

export const addToFavAC = (id, status) => ({
    type: ITEMS_LIST_TYPES.ADD_TO_FAV,
    payload: {
        id, status
    }
});

export const showItemsListSuccesstAC = items => ({
    type: ITEMS_LIST_TYPES.SHOW_ITEMS_LIST_SUCCESS,
    payload: {
        url: items.data.products
    },

});

export const showItemsListAC = () => {
    return { type: ITEMS_LIST_TYPES.SHOW_ITEMS_LIST}
}

export function* watchShowItemsList() {
    yield takeEvery(ITEMS_LIST_TYPES.SHOW_ITEMS_LIST, showItemsListAsyncAC);
}




export function* showItemsListAsyncAC() {
    yield put(showItemsListAC())
    const data = yield call(() => {
        return fetch('\'https://my-json-server.typicode.com/aero-frontend/test-task/PRODUCTS_SUCCESS\'')
            .then(res => res.json())
    })
    yield put(showItemsListSuccesstAC(data))
}

// const requestDogSuccessAC = (data) => {
//     return { type: REQUESTED_DOG_SUCCEEDED, url: data.message }
// };

// export const fetchDogAC = () => {
//     return { type: FETCHED_DOG }
// };

// export function* watchFetchDog() {
//     yield takeEvery(FETCHED_DOG, fetchDogAsyncAC);
// }

// export function *fetchDogAsyncAC () {
//     try {
//         yield put(requestDogAC())
//         const data = yield call(() => {
//                 return fetch('https://dog.ceo/api/breeds/image/random')
//                     .then(res => res.json())
//             }
//         )
//
//         yield put(requestDogSuccessAC(data))
//     } catch (error) {
//         yield put(requestDogErrorAC())
//     }
// }