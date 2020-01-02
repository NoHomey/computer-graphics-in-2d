import { List, Set } from 'immutable';
import Pixel from './Pixel';

type SelectedPixels = Set<List<number>>;

export const empty = Set<List<number>>();

export function entry({ x, y } : Pixel): List<number> {
    return List([ x, y ]);
};

export function has(selected: SelectedPixels, pixel: Pixel): boolean {
    return selected.has(entry(pixel));
};

export default SelectedPixels;