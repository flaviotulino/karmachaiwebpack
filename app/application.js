import angular from 'angular';
import '@uirouter/angularjs';

import * as modules from './components/**/*.module.js';

const app = angular.module('app', ['ui.router'].concat(Object.values(modules)));