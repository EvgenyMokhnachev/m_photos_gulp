(function(){
    'use strict';

    angular.module("galleryApp").controller('UploadPhotosBlockCtrl', ['$scope', 'UploadFileService', 'EditPhotoService', function($scope, UploadFileService, EditPhotoService) {

        $scope.UploadFileService = UploadFileService;

        $scope.selectPhotos = function(){
            var photoInput = document.createElement('input');
            photoInput.setAttribute('type', 'file');
            photoInput.setAttribute('multiple', 'multiple');
            photoInput.setAttribute('accept', 'image/png,image/jpg,image/jpeg');

            photoInput.onchange = function(){
                var files = photoInput.files;

                var index = 0;
                while(files.item(index)){
                    var file = files.item(index++);
                    if(UploadFileService.checkPhotoFile(file)){
                        var uploadPhotoItem = new UploadPhoto(file);
                        UploadFileService.uploadPhoto(uploadPhotoItem, function(){
                            $scope.$apply();
                        });
                    }
                }
            };

            photoInput.click();
        };

        $scope.selectVideo = function(){
            var videoInput = document.createElement('input');
            videoInput.setAttribute('type', 'file');
            videoInput.setAttribute('multiple', 'multiple');
            videoInput.setAttribute('accept', 'video/*');

            videoInput.onchange = function(){
                var files = videoInput.files;

                var index = 0;
                while(files.item(index)){
                    var file = files.item(index++);
                    if(UploadFileService.checkVideoFile(file)){
                        //TODO implement upload video files
                        //var uploadPhotoItem = new UploadPhotoItem(file);
                        //UploadFileService.uploadPhoto(uploadPhotoItem);
                    }
                }
            };

            videoInput.click();
        };

        $scope.removeUploadFile = function(uploadFile){
            UploadFileService.removeUploadFile(uploadFile);
        };

        $scope.editPhotoItem = function(uploadFile){
            EditPhotoService.showEditor();
            EditPhotoService.setUploadPhoto(uploadFile);
        };

    }]);

})();