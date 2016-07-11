(function(){
    'use strict';

    angular.module("galleryApp").controller('EditPhotoCtrl', ['$scope', 'EditPhotoService', function($scope, EditPhotoService) {

        $scope.isVisibleEditor = EditPhotoService.isVisibleEditor;

        $scope.closeEditor = function(){
            EditPhotoService.hideEditor();
        };
        
        $scope.setCanvas = function (canvas, ctx) {
            $scope.canvas = canvas;
            $scope.ctx = ctx;
        };

        // var originalImageData = undefined;
        // var originalPixels = undefined;

        // $scope.$watch('EditPhotoService.editUploadFileItem', function(newValue) {
        //     if(newValue){
        //         var imgObj = document.createElement('img');
        //         imgObj.setAttribute('src', newValue.thumbnailBase64Url);
        //         canvas.width = imgObj.width;
        //         canvas.height = imgObj.height;
        //         ctx.drawImage(imgObj,0,0);
        //
        //         originalImageData = ctx.getImageData(0, 0, imgObj.width, imgObj.height);
        //         originalPixels = originalImageData.data;
        //
        //         var imageData = ctx.getImageData(0, 0, imgObj.width, imgObj.height);
        //         var pixels = imageData.data;
        //         var allPixels = 0;
        //         var rSum = 0;
        //         var gSum = 0;
        //         var bSum = 0;
        //         for (var i = 0; i < pixels.length; i += 4) {
        //             allPixels++;
        //             var r = pixels[i];
        //             var g = pixels[i + 1];
        //             var b = pixels[i + 2];
        //
        //             rSum += r;
        //             gSum += g;
        //             bSum += b;
        //         }
        //
        //         $scope.EditPhotoService.rgb.red = rSum/allPixels;
        //         $scope.EditPhotoService.rgb.green = gSum/allPixels;
        //         $scope.EditPhotoService.rgb.blue = bSum/allPixels;
        //     }
        // });

        // function changePhoto(rgb, newValue){
        //     var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        //     var pixels = imageData.data;
        //
        //     var oldSum = 0;
        //     var sumPixels = 0;
        //     for (var i = 0; i < originalPixels.length; i += 4) {
        //         sumPixels++;
        //         var index = i;
        //         if(rgb === 'green'){
        //             index = i + 1;
        //         } else if(rgb === 'blue') {
        //             index = i + 2;
        //         }
        //         oldSum += originalPixels[index];
        //     }
        //
        //     var oldRaz = oldSum/sumPixels;
        //
        //     for(var i = 0; i < pixels.length; i += 4){
        //         var index = i;
        //         if(rgb === 'green'){
        //             index = i + 1;
        //         } else if(rgb === 'blue') {
        //             index = i + 2;
        //         }
        //         pixels[index] = originalPixels[index] + parseInt(newValue) - (oldRaz);
        //     }
        //
        //     ctx.putImageData(imageData, 0, 0);
        // }
        //
        // $scope.$watch('EditPhotoService.rgb.red', function(newValue) {
        //     changePhoto('red', newValue);
        // });
        //
        // $scope.$watch('EditPhotoService.rgb.green', function(newValue) {
        //     changePhoto('green', newValue);
        // });
        //
        // $scope.$watch('EditPhotoService.rgb.blue', function(newValue) {
        //     changePhoto('blue', newValue);
        // });



    }]);

})();