'use strict';

angular.module('app.directives', [])

    .directive('appVersion', ['version', (version) => {
        return (scope, elm, attrs) => {
            elm.text(version);
        };
    }]);