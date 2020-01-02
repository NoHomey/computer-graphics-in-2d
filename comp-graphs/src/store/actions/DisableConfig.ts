export const DisableConfig = 'disable-config';

export interface DisableConfigAction {
    type: typeof DisableConfig
};

export function disableConfig(): DisableConfigAction {
    return { type: DisableConfig };
};

export default disableConfig;