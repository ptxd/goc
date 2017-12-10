import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';

export default function configureStore(initialState){
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(logger)
    );
    return store;
}