import angular from 'angular';


angular.module('app').service('api.service', apiService)
function  apiService($http){
	return {
		getDeals: ()=>
		{
			return $http.get('/assets/deals.json').then(result=>result.data.deals)
		}
		
	}
}
apiService.$inject = ['$http']