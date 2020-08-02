import themes from '~/themesConfigs';

export const state = () => ({
    activeTheme: themes['default'] || {},
});