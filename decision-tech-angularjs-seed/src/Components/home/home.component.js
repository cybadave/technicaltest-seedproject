import angular from 'angular';
import './home.component.scss';

angular.module('app').component('home', {
	template: `
	<site-nav></site-nav>	
	<deals></deals>	`
})