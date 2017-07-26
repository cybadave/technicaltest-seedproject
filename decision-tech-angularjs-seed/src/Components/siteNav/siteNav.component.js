import angular from 'angular';
import './siteNav.component.scss';
angular.module('app').component('siteNav',{
    template: `<nav><div id="logo"></div><div><burger-menu></burger-menu></div></nav>`
})