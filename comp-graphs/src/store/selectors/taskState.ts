import { createSelector } from 'reselect';
import task from './task';
import selectedPixels from './selectedPixels';
import Task from '../../types/Task';
import SelectedPixels from '../../types/SelectedPixels';

const selector = {
    [Task.Task1]: (selected: SelectedPixels) => {
        switch(selected.size) {
            case 0: return 'Select line edges';
            case 1: return 'Selected 1/2 points';
            default: return 'Line edges selected';
        }
    },
    [Task.Task2]: (selected: SelectedPixels) => {
        switch(selected.size) {
            case 0: return 'Select circle center';
            case 1: return 'Select circle end point';
            default: return 'Circle center and radius selected';
        }
    },
    [Task.Task3]: (selected: SelectedPixels) => {
        switch(selected.size) {
            case 0: return 'Select line edges';
            case 1: return 'Selected 1/2 line edges';
            case 2: return 'Select rectangle edges';
            case 3: return 'Selected 1/2 rectangle edges';
            default: return 'All input has been entered';
        }
    }
};

const taskState = createSelector(
    task,
    selectedPixels,
    (currentTask, selected) => selector[currentTask](selected)
);

export default taskState;