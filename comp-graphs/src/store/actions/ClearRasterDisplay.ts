export const ClearRasterDisplay = 'clear-raster-display';

export interface ClearRasterDisplayAction {
    type: typeof ClearRasterDisplay,
};

export function clearRasterDisplay(): ClearRasterDisplayAction {
    return { type: ClearRasterDisplay };
};

export default clearRasterDisplay;