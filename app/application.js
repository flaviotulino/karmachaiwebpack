import angular from 'angular';
import Logger from './utils/logger';

export default class Application {
    constructor() {

        // Contains the module names. They have to be unique, that's why this is a Set
        this.modules = new Set();
    }

    loadProviders() {
        /**
         * Import globally all the files under the providers/ folder
         * which end with provider.js "extension"
         */
        this.providers = require
            .context('./providers', true, /provider.js$/)
            .keys()
            .map(p => {
                // Remove the dots at the beginning (it is a relative path)
                const normalized = p.replace(/^.\//, '');

                /*
                 * Remove the provider.js extension
                 * After this removal, module will be the parent folder name and
                 * the file name will be the provider name.
                 *
                 * i.e app/providers/pxRouter/$state.provider.js will result in:
                 * module: 'pxRouter'
                 * provider: '$state'
                 *
                 * The instance in this case is the provider class itself (needs to be exported as default)
                 */
                const [module, provider] = normalized.replace(/.provider.js$/, '')
                    .split('/', 2);


                return {
                    module: module,
                    provider: provider,
                    _instance: require('./providers/' + normalized).default
                }
            });
    }

    loadComponents() {
        // All the loading functions work the same. Please read loadProviders above
        this.components = require
            .context('./components', true, /component.js/)
            .keys()
            .map(p => {
                const normalized = p.replace(/^.\//, '');
                const [module, component] = normalized.replace(/.component.js$/, '')
                    .split('/', 2);


                return {
                    module: module,
                    component: component,
                    _instance: require('./components/' + normalized).default
                }

            });
    }

    registerComponents() {
        this.components.forEach(component => {

            // For each component create a module (or get an existing one)
            let mod = null;
            try {
                // Check if a module exists
                mod = angular.module(component.module + '.module');
            } catch (e) {

                /*
                 * Create it otherwise, setting the component dependencies as module ones
                 *
                 * Inside the component definition a dependencies field can be set to achieve this result
                 */

                mod = angular.module(component.module + '.module', component._instance.dependencies || []);
            }

            // If no template is specified, by default search for <the component name>.html file in the components folder
            if (component._instance.template === undefined && component._instance.templateUrl === undefined) {
                try {
                    component._instance.template = require('./components/' + component.module + '/' + component.component + '.component.html');
                } catch (e) {
                    Logger.error(e);
                }
            }

            // If no controller is specified, try to set <component name>.controller.js as controller
            if (component._instance.controller === undefined) {
                try {
                    component._instance.controller = require('./components/' + component.module + '/' + component.component + '.controller').default;
                } catch (e) {
                    Logger.error(component.module + '/' + component.component + '.controller');
                    Logger.error(e);
                }
            }

            /*
             * If a controller is set, set the controller as alias using the component name,
             * capitalising the first letter
             *
             * i.e login.component.js will search for a login.controller file, and if it exists will set
             * controllerAs: Login
             */

            if (component._instance.controller && component._instance.controllerAs === undefined) {
                component._instance.controllerAs = component.component.charAt(0)
                    .toUpperCase() + component.component.slice(1);
            }

            // Register the component using the "Component" suffix
            const componentInstance = mod.component(component.component + 'Component', component._instance);
            this.modules.add(componentInstance.name);
        });
    }

    registerProviders() {
        this.providers.forEach(provider => {

            let mod = null;
            try {
                mod = angular.module(provider.module + '.module');
            } catch (e) {
                mod = angular.module(provider.module + '.module', provider._instance.dependencies || []);
            }

            const providerInstance = mod.provider(provider.provider, provider._instance);
            this.modules.add(providerInstance.name);
        })
    }

    loadConfigs() {
        this.configs = require
            .context('./components', true, /config.js/)
            .keys()
            .map(p => {
                const normalized = p.replace(/^.\//, '');
                const [module, config] = normalized.replace(/.config.js$/, '')
                    .split('/', 2);

                return {
                    module: module,
                    config: config,
                    _instance: require('./components/' + normalized).default
                }

            });
    }

    registerConfigs() {
        this.configs.forEach(config => {
            let mod = null;
            try {
                mod = angular.module(config.module + '.module');
            } catch (e) {
                mod = angular.module(config.module + '.module', config._instance.dependencies || []);
            }

            mod.config(config._instance);
        })
    }

    start() {
        this.loadProviders();
        this.registerProviders();

        this.loadConfigs();
        this.registerConfigs();

        this.loadComponents();
        this.registerComponents();

        return Array.from(this.modules);
    }
}

const application = new Application();
angular.module('app', application.start());
