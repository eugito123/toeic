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
      description: "ในแอพพลิเคชั่นนี้มีคำศัพท์มากกว่า 200 คำ และแบ่งเป็น 7 หมวดหมู่",
      image: "assets/imgs/vocabulary256.png",
    },
    {
      title: "Can you search everytime.",
      description: "<b>ค้นหาคำศัพท์อย่างรวดเร็ว</b> ทั้งภาษาไทยและภาษาอังกฤษ",
      image: "assets/imgs/growth.png",
    },
    {
      title: "สามารถอ่านได้ในทุกที่ ทุกเวลา",
      description: "<b>เพื่อการเรียนรู้และจดจำที่มีประสิทธิภาพ</b> เพราะการเรียนรู้ไม่จำเป็นต้องอยู่แค่เพียงหนังสือ",
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
