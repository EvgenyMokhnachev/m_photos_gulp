(function(){
    'use strict';

    angular.module("galleryApp").service('UploadFileService', [function() {

        var uploadFiles = [];

        return {
            checkPhotoFile: function(inputFile){
                console.log('check photo file size and type');
                return true;
            },

            checkVideoFile: function(inputFile){
                console.log('check video file size and type');
                return true;
            },

            uploadPhoto: function(uploadPhotoItem, callback){
                uploadPhotoItem.getThumbnailBase64Url(function(){
                    uploadFiles.push(uploadPhotoItem);
                    if(callback) callback();
                });
            },

            getUploadFiles: function(){
                return uploadFiles;
            },

            removeUploadFile: function(uploadFile){
                var uploadFileIndex = uploadFiles.indexOf(uploadFile);
                uploadFiles.splice(uploadFileIndex, 1);
            }
        }

    }]);
})();