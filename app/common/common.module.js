import angular from 'angular';
import { FooterModule } from './footer/footer.module';
import { NavModule } from './nav/nav.module';

export const CommonModule = angular.module('app.common', [FooterModule, NavModule]).name;