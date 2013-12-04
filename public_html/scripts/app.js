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
        beforeAddClass: function(element, className, done) {
            var scope = element.scope();

            if(className == 'ng-hide') {
                var endPoint = '100%';
                if(scope.direction !== 'right') endPoint = '-100%';

                TweenMax.to(element, 0.5, { left: endPoint, onComplete: done });
            } else {
                done();
            }
        },
        addClass: function (element, className, done) {
            // you can achieve the same thing in 'addClass' as with the code from 'beforeAddClass' by removing the ng-hide class before the animation start and adding it back as soon as the animation as finished, see below:
            /*var scope = element.scope();

            if(className == 'ng-hide') {
                var endPoint = '100%';
                if(scope.direction !== 'right') endPoint = '-100%';
                element.removeClass('ng-hide');
                TweenMax.to(element, 0.5, { left: endPoint, onComplete: function() {
                    this.target.addClass('ng-hide');
                    done();
                }});
            } else {
                done();
            }*/
        },
        removeClass: function (element, className, done) {
            var scope = element.scope();

            if(className == 'ng-hide') {
                element.removeClass('ng-hide');
                var startPoint = '100%';
                if(scope.direction === 'right') startPoint = '-100%';
                TweenMax.set(element, { left: startPoint });
                TweenMax.to(element, 0.5, {left: 0, onComplete: done});
            } else {
                done();
            }
        }
    };
});
