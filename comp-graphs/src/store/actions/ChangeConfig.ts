export const ChangeConfig = 'chage-config';

export interface ChangeConfigAction {
    type: typeof ChangeConfig,
    payload: { }
}

export function changeConfig(): ChangeConfigAction {
    return {
        type: ChangeConfig,
        payload: { }
    };
};

export default changeConfig;