import themes from '~/themesConfigs'
import config from '~/nuxt.config';
export default (context, inject) => {
    inject('theme', themes[config.theme]);
}