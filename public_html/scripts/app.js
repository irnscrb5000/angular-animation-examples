var app = angular.module('app', ['ngAnimate']);

app.controller('AppCtrl', function($scope) {
    var numPages = 3;
    $scope.currPage = 0;
    
    $scope.gotoPage = function(pageIndex, direction) {
        $scope.direction = direction || 'left';
        $scope.isSlideLeft = $scope.direction === 'left';
        $scope.isSlideRight = $scope.direction === 'right';
        
        if(pageIndex >= numPages) {
            pageIndex = 0;
        } else if(pageIndex < 0) {
            pageIndex = numPages - 1;
        }
        
        $scope.currPage = pageIndex;
    };
});

app.animation('.slide-animation', function() {
    return {
        leave: function(element, className, done) {
            console.log('leave fired');
            var scope = element.scope();

            if(className == 'ng-leave') {
                var endPoint = '100%';
                if(scope.direction !== 'right') endPoint = '-100%';
                TweenMax.to(element, 0.5, { left: endPoint, onComplete: done });
            } else {
                done();
            }
        },
        enter: function (element, className, done) {
            console.log('enter fired');
            var scope = element.scope();

            if(className == 'ng-enter') {
                var startPoint = '100%';
                if(scope.direction === 'right') startPoint = '-100%';
                TweenMax.fromTo(element, 0.5, {left: startPoint}, {left: 0, onComplete: done});
            } else {
                done();
            }
        }
    };
});
