export const Draw = 'draw';

export interface DrawAction {
    type: typeof Draw
}

export function draw(): DrawAction {
    return { type: Draw };
};

export default draw;