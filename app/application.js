import angular from 'angular';
//import './pxStateProvider';

// import * as components from './components/**/*.component.js';
// import * as configs from './components/**/*.config.js';

// let a = require.context('./components', true, /component.js/).keys();
// console.log(a);

export default class Application {
  constructor() {
    this.modules = new Set();
  }

  loadProviders() {
    this.providers = require
    .context('./providers', true, /provider.js/)
    .keys()
    .map(p => {
      const normalized = p.replace(/^.\//, '')
      const [module, provider] = normalized.replace(/.provider.js$/, '').split('/', 2);

      return {
        module: module,
        provider: provider,
        _instance: require('./providers/' + normalized).default
      }
    });
  }

  loadComponents() {
    this.components = require
    .context('./components', true, /component.js/)
    .keys()
    .map(p => {
      const normalized = p.replace(/^.\//, '');
      const [module, component] = normalized.replace(/.component.js$/, '').split('/', 2);


      return {
        module: module,
        component: component,
        _instance: require('./components/' + normalized).default
      }

    });
  }

  registerComponents() {
    this.components.forEach(component => {
      let mod = null;
      try{
        mod = angular.module(component.module + '.module');
      } catch(e) {
        mod = angular.module(component.module + '.module', component._instance.dependencies || []);
      }

      if(component._instance.template === undefined && component._instance.templateUrl === undefined) {
        try {
          component._instance.template = require('./components/' + component.module + '/' + component.component + '.component.html');
        } catch(e) {
          console.error(e);
        }
      }

      if (component._instance.controller === undefined) {
        try {
          component._instance.controller = require('./components/' + component.module + '/' + component.component + '.controller').default;
          console.log(component._instance.controller)
        } catch(e) {
          console.error(e);
        }
      }

      if (component._instance.controllerAs === undefined) {
        component._instance.controllerAs = component.component;
      }

      const componentInstance = mod.component(component.component + 'Component', component._instance);
      this.modules.add(componentInstance.name);
    });
  }

  registerProviders() {
    this.providers.forEach(provider => {

      let mod = null;
      try{
        mod = angular.module(provider.module);
      } catch(e) {
        mod = angular.module(provider.module, provider._instance.dependencies || []);
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
      const [module, config] = normalized.replace(/.config.js$/, '').split('/', 2);

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
      try{
        mod = angular.module(config.module + '.module');
      } catch(e) {
        mod = angular.module(config.module + '.module', config._instance.dependencies || []);
      }

      mod.config(config._instance);
    })
  }

  bootstrap() {
    this.loadProviders();
    this.registerProviders();

    this.loadConfigs();
    this.registerConfigs();

    this.loadComponents();
    this.registerComponents();

  }
}


const application = new Application();
application.bootstrap();

angular.module('app', Array.from(application.modules));

// let modules = [];
//
// Object.keys(configs).forEach(config => {
//     let name = config.substr(config.lastIndexOf('$') + 1, config.length);
//     let moduleName = name + '.module';
//     let moduleInstance = angular.module(moduleName, []);
//
//     moduleInstance.config(configs[config]);
//
//     Object.keys(components).filter(c => c.includes(name)).forEach(comp => {
//
//         let name = comp.substr(comp.lastIndexOf('$') + 1, comp.length);
//         let componentName =  name + 'Component';
//         let componentInstance = components[comp];
//
//         if (componentInstance.template === undefined && componentInstance.templateUrl === undefined) {
//             componentInstance.template = require('./components/' + comp.replace(/\$/gi,'/') + '.component.html');
//         }
//
//         moduleInstance.component(componentName, componentInstance);
//     });
//
//     modules.push(moduleInstance.name);
// });
//
// const app = angular.module('app', ['pxRouter', ...modules]);
