import angular from 'angular';
import './footer.scss';
import { FooterComponent } from './footer.component';

export const FooterModule = angular.module('footer', [])
    .component('footer', FooterComponent)
    .name;