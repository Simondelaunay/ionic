import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public base64Image: string;

  constructor(private camera: Camera) {

  }

  takePicture(){
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }
}