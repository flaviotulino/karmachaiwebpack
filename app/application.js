import angular from 'angular';
import '@uirouter/angularjs';
import './pxStateProvider';

import * as modules from './components/**/*.module.js';

const app = angular.module('app', ['pxRouter'].concat(Object.values(modules)));