import { Store, createStore } from 'redux';
import { State, reducer } from './reducers/main';
import ScreenSize from '../types/ScreenSize';
import resize from './actions/Resize';

function configure(): Store<State> {
    const store = createStore(reducer);

    if(typeof window === 'object') {
        window.addEventListener('resize', () => {
            const size: ScreenSize = {
                width: window.innerWidth,
                height: window.innerHeight
            };
            store.dispatch(resize(size));
        });
    }

    return store;
}

export default configure;