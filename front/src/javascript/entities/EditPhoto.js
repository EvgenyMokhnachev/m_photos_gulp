'use strict';

class EditPhoto {

    constructor(base64url){
        this.originalBase64 = base64url;
        this.originalImageData = EditPhoto.getImageData(this.originalBase64);
        this.originalAverageRGBA = EditPhoto.getAverageRGBA(this.originalImageData);
    }
    
    changeRGBA(rgba){
        
    }

    static getImageData(base64url){
        var img = document.createElement('img');
        img.setAttribute('src', base64url);
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        return ctx.getImageData(0, 0, img.width, img.height);
    }

    static getAverageRGBA(imageData){
        var rSum = 0,
            gSum = 0,
            bSum = 0,
            aSum = 0,
            count = 0;

        for(var i = 0; i < imageData.data.length; count++){
            rSum += imageData.data[i++];
            gSum += imageData.data[i++];
            bSum += imageData.data[i++];
            aSum += imageData.data[i++];
        }

        return {
            r: rSum/count,
            g: gSum/count,
            b: bSum/count,
            a: aSum/count
        };
    }

}