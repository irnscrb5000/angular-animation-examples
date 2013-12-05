var app = angular.module('app', ['ngAnimate']);

app.controller('AppCtrl', function($scope, $timeout) {
    var numPages = 3;
    $scope.currPage = 0;
    
    $scope.gotoPage = function(pageIndex, direction) {
        direction = direction || 'left';
        $scope.isSlideLeft = direction === 'left';
        $scope.isSlideRight = direction === 'right';
        
        if(pageIndex >= numPages) {
            pageIndex = 0;
        } else if(pageIndex < 0) {
            pageIndex = numPages - 1;
        }

        /*var selEl = document.querySelector('.my-switch-container').children[pageIndex];
        selEl.addEventListener('transitionend', function(e) {
            debugger;
        });*/

        $timeout(function() {
            $scope.currPage = pageIndex;
        });
    };
});
