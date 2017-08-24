import angular from 'angular';
import './login.scss';
import { LoginComponent } from './login.component';

export const LoginModule = angular.module('login', [])
    .component('login', LoginComponent)
    .config(class Config {
        static get $inject() {
            return [
                '$stateProvider'
            ];
        };

        constructor($stateProvider) {
            $stateProvider.state('login', {
                url: '/login',
                component: 'login',
                data: {
                    title: 'Login Form'
                }
            });
        }
    })
    .name;