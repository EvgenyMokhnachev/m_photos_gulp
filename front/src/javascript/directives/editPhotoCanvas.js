(function () {
    'use strict';
    
    angular.module("galleryApp").directive('editPhotoCanvas', function(){

        return function($scope, elem, attrs) {
            var editPhotoControls = document.getElementById('editPhotoControls');
            var canvas = elem[0];
            canvas.style.maxHeight = (window.innerHeight - editPhotoControls.clientHeight - 10) + 'px';
            window.onresize = function(){
                canvas.style.maxHeight = (window.innerHeight - editPhotoControls.clientHeight - 10) + 'px';
            };
            $scope.setCanvas(canvas, canvas.getContext('2d'));
        }

    });
})();