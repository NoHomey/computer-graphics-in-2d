import {
    AddPixelToSelected,
    AddPixelToSelectedAction
} from '../actions/AddPixelToSelected';
import {
    RemovePixelFromSelected,
    RemovePixelFromSelectedAction
} from '../actions/RemovePixelFromSelected';
import { SetTask } from '../actions/SetTask';
import { EnableConfig } from '../actions/EnableConfig';
import Action from './Action';
import SelectedPixels, { empty, entry } from '../../types/SelectedPixels';

function selectedPixels(
    state: SelectedPixels = empty,
    action: Action | AddPixelToSelectedAction | RemovePixelFromSelectedAction
): SelectedPixels {
    switch(action.type) {
        case AddPixelToSelected: {
            const pixel = (action as AddPixelToSelectedAction).payload;
            return state.add(entry(pixel));
        }
        case RemovePixelFromSelected: {
            const pixel = (action as RemovePixelFromSelectedAction).payload;
            return state.delete(entry(pixel));
        }
        case SetTask: return empty;
        case EnableConfig: return empty;
        default: return state;
    }
}

export default selectedPixels;