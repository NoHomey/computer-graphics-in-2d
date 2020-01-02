import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers/main';
import ScreenSize from '../types/ScreenSize';
import resize from './actions/Resize';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root';

function configure() {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(reducer, applyMiddleware(sagaMiddleware));

    if(typeof window === 'object') {
        window.addEventListener('resize', () => {
            const size: ScreenSize = {
                width: window.innerWidth,
                height: window.innerHeight
            };
            store.dispatch(resize(size));
        });
    }

    sagaMiddleware.run(rootSaga);

    return store;
}

export default configure;