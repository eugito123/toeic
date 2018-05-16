import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // สไลด์
  slides = [
    {
      title: "Welcome to the App!",
      description: "The application has over 200 words and is divided into <br>7 categories.",
      image: "assets/imgs/vocabulary256.png",
    },
    {
      title: "Can you search everytime.",
      description: "Quickly find words in both Thai and English.",
      image: "assets/imgs/growth.png",
    },
    {
      title: "Can you read everytime.",
      description: "To learn and remember the effective, because learning don't have to be just in the book.",
      image: "assets/imgs/idea.png",
    }
  ];

  // เชื่อมหน้า
  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }
  gotoPage(tutorial){
    this.navCtrl.push(tutorial);
    }
}
