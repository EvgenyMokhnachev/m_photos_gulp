(function () {
    'use strict';
    
    angular.module("galleryApp").service('EditPhotoService', [function() {

        var showEditor = false;
        var uploadPhoto = undefined;

        class EditPhotoService {

            constructor(){

            }

            setUploadPhoto(uploadPhotoObj){
                uploadPhoto = uploadPhotoObj;
                uploadPhoto.initEditPhoto();
            }

            showEditor(){
                showEditor = true;
            }

            hideEditor(){
                showEditor = false;
            }

            isVisibleEditor(){
                return showEditor;
            }

        }

        return new EditPhotoService();

    }]);
})();