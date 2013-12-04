var app = angular.module('app', ['ngAnimate']);

app.controller('AppCtrl', function($scope) {
    var numPages = 3;
    $scope.currPage = 0;
    
    $scope.gotoPage = function(pageIndex, direction) {
        direction = direction || 'Left';
        $scope.isSlideLeft = direction === 'Left';
        $scope.isSlideRight = direction === 'Right';
        
        if(pageIndex >= numPages) {
            pageIndex = 0;
        } else if(pageIndex < 0) {
            pageIndex = numPages - 1;
        }

        /*var selEl = document.querySelector('.my-switch-container').children[pageIndex];
        selEl.addEventListener('transitionend', function(e) {
            debugger;
        });*/
        
        $scope.currPage = pageIndex;
    };
});

