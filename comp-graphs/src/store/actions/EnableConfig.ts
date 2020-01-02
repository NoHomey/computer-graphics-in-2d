export const EnableConfig = 'enable-config';

export interface EnableConfigAction {
    type: typeof EnableConfig
};

export function enableConfig(): EnableConfigAction {
    return { type: EnableConfig };
};

export default enableConfig;