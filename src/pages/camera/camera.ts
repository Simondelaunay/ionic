import { Component } from '@angular/core';
import {Camera} from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})

/* *** CLASSE HomePage *** */
export class CameraPage {
  // Attributs
  base64Image: String[];

  constructor(private camera: Camera, private base64ToGallery: Base64ToGallery) {
    this.base64Image = [];
  }

  takePicture(){
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image.push("data:image/jpeg;base64," + imageData);
    }, (err) => {
      console.log(err);
    });
  }

  savePicture(img){
    this.base64ToGallery.base64ToGallery(img.replace("data:image/jpeg;base64,", ''), { prefix: '_img' }).then(
        res => {
          console.log('Saved image to gallery ', res)
        },
        err => {
          console.log('Error saving image to gallery ', err)
        }
    );
  }

}
