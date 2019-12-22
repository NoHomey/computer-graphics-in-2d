import { Resize, ResizeAction } from '../actions/Resize';
import Action from './Action';
import ScreenSize from '../../types/ScreenSize';

const defaultScreenSize: ScreenSize =
typeof window === 'object'
? {
    width: window.innerWidth,
    height: window.innerHeight
} : {
    width: 1080,
    height: 720
};

function screenSize(
    state: ScreenSize = defaultScreenSize,
    action: Action | ResizeAction
): ScreenSize {
    switch(action.type) {
        case Resize:
            return (action as ResizeAction).payload;
        default: return state
    }
}

export default screenSize;