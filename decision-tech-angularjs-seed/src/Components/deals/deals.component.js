
import angular from 'angular';
import './deals.component.scss';


const controller = function (apiService) {
    var vm = this;
    vm.broadbandDeals = [];
    vm.$onInit = function () {
        apiService.getDeals().then(deals => {
            vm.broadbandDeals = deals;
        })
    }
}
controller.$inject = ['api.service'];

const template = `
<div>
   {{ $ctrl.broadbandDeals }}
</div>`;

angular.module('app').component('deals', {
    controller: controller,
    template: template
})