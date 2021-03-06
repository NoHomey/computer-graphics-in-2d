import { createSelector } from 'reselect';
import task from './task';
import selectedPixels from './selectedPixels';
import Task from '../../types/Task';
import SelectedPixels from '../../types/SelectedPixels';

function canDrawTask1or2(selected: SelectedPixels): boolean {
    return selected.size === 2;
}

function canDrawTask3(selected: SelectedPixels): boolean {
    return selected.size === 4;
}

const selector = {
    [Task.Task1]: canDrawTask1or2,
    [Task.Task2]: canDrawTask1or2,
    [Task.Task3]: canDrawTask3
};

const canDraw = createSelector(
    task,
    selectedPixels,
    (currentTask, selected) => selector[currentTask](selected)
);

export default canDraw;