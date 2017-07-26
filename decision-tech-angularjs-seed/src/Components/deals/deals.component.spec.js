describe('<deals/>', () =>{
    var $componentController;
	beforeEach(angular.mock.module('app'));
	beforeEach(angular.mock.module(function($provide){
        $provide.value('api.service',{ getDeals: () => { return { then: (callback)=> callback([{name: 'x'}])  }}} )
        $provide.value('filter.service',{ filterDeals: (x) => x })
	}));
	
	
	beforeEach(angular.mock.inject(function(_$componentController_) {
		$componentController = _$componentController_;
	}));

	  it('should show broadband deals', function() {

		const ctrl = $componentController('deals', null, {});
        ctrl.$onInit();
        expect(ctrl.loading).toBeFalsy();
		expect(ctrl.broadbandDeals).toBeDefined();
		expect(ctrl.broadbandDeals[0].name).toBe('x');
  }); 
});  