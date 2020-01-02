import { State } from '../reducers/main';
import SelectedPixels from '../../types/SelectedPixels';

function selectedPixels(state: State): SelectedPixels {
    return state.selectedPixels;
}

export default selectedPixels;