import Vue from 'vue';

import NavMenu from './components/navmenu-component/navmenu-component.vue';
import AppComponent from './components/app-component/app-component.vue';
import './styles.scss';

new Vue({
  el: '#app',
  components: {
    'app-component': AppComponent,
    'navmenu-component': NavMenu
  }
});