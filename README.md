# angular-tooltipster
Angular directive for Tooltipster https://github.com/iamceege/tooltipster/

## Dependencies:

Download jquery, angular 1.x and tooltipster(https://github.com/iamceege/tooltipster/)

## Usage:

Views:

```
<span tooltip-title="Test">if value is not changed or </span>
```
```
<span tooltip-title tooltip-title-variable="dynamicScopeVariable"> if tooltip value is variable and not static text</span>
```

## Options:

use attribute tooltip-options, </br>
```<span tooltip-options="options" tooltip-title="Test">Test</span>``` and </br>
in the controller set options defined in https://github.com/iamceege/tooltipster, for example:

```
$scope.tooltipOptions = {} </br>
$scope.tooltipOptions.contentAsHTML = true
```


