(function(angular) {
	angular.module("tooltipster",[]).directive('tooltipTitle', function() {
	    return {
		restrict: 'A',
		scope: {
			tooltipTitle: '@',
			tooltipTitleExec: '=',
			tooltipOptions: "="
		},
		link: function(scope, element, attrs) {
			var existTooltipExecAttr = 'tooltipTitleExec' in attrs;
			
			if (!scope.tooltipTitle && !existTooltipExecAttr) {
				return
			}
			
			var tooltipOptions = scope.tooltipOptions || {}
			
			var message = scope.tooltipTitle
			if (existTooltipExecAttr) {
				message = scope.tooltipTitleExec
		        	scope.$watch('tooltipTitleExec', function(value) {
		        	element.tooltipster('content', value);
					if (!value) {
						element.tooltipster('hide');
						element.tooltipster('disable')
					} else {
						element.tooltipster('enable')
					}
			        });
			}

			tooltipOptions.content = message
			element.tooltipster(tooltipOptions);
		}
	    }	
	});
})(angular);
