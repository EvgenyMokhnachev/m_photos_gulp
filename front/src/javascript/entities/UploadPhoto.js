'use strict';

class UploadPhoto {

    constructor(uploadPhotoFile){
        this.file = uploadPhotoFile;
        this.thumbnailBase64Url = undefined;
        this.editPhoto = undefined;
    }

    getThumbnailBase64Url(callback){
        var self = this;
        if(this.thumbnailBase64Url){
            if(callback) callback(this.thumbnailBase64Url);
        } else {
            var reader = new FileReader();
            reader.readAsDataURL(this.file);
            reader.onload = function(e) {
                self.thumbnailBase64Url = e.target.result;
                if(callback) callback(self.thumbnailBase64Url);
            };
        }
    }

    initEditPhoto(){
        if(!this.editPhoto) this.editPhoto = new EditPhoto(this.thumbnailBase64Url);
    }

}