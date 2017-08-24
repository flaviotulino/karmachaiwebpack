import angular from 'angular';
import '@uirouter/angularjs';
import './pxStateProvider';

import * as components from './components/**/*.component.js';
import * as configs from './components/**/*.config.js';

let modules = [];

Object.keys(configs).forEach(config => {
    let name = config.substr(config.lastIndexOf('$') + 1, config.length);
    let moduleName = name + '.module';
    let moduleInstance = angular.module(moduleName, []);

    moduleInstance.config(configs[config]);

    Object.keys(components).filter(c => c.includes(name)).forEach(comp => {

        let name = comp.substr(comp.lastIndexOf('$') + 1, comp.length);
        let componentName =  name + 'Component';
        let componentInstance = components[comp];

        if (componentInstance.template === undefined && componentInstance.templateUrl === undefined) {
            componentInstance.template = require('./components/' + comp.replace(/\$/gi,'/') + '.component.html');
        }

        moduleInstance.component(componentName, componentInstance);
    });

    modules.push(moduleInstance.name);
});

const app = angular.module('app', ['pxRouter', ...modules]);