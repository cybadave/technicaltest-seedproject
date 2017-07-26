import angular from 'angular';
angular.module('app', []);

require('./services/api.service');
require('./components/home/home.component');
require('./components/burgerMenu/burgerMenu.component');
require('./components/siteNav/siteNav.component');
require('./components/deals/deals.component');
import './styles.scss';

