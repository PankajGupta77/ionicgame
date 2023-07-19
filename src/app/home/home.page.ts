import { Component, OnInit } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig,AdMobFreeInterstitialConfig,AdMobFreeRewardVideoConfig} from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loading: boolean = true;
  showIframe: boolean = false;
  constructor(private admobFree:AdMobFree,private platform: Platform) {
   
  }
  ngOnInit(){
    //  this.showInterstitialAd()
    // this.showBannerAd()
    // alert('Please on Portrait device first')
  }
 
  // ionViewDidLoad(){
  //   if(this.platform.is('cordova')){
  //   const bannerConfig: AdMobFreeBannerConfig = {
  //     id: 'ca-app-pub-7954042482936232/5086474717',
  //     isTesting: true,
  //     autoShow: true,
  //   };
  //   this.admobFree.banner.config(bannerConfig);
  //   this.admobFree.banner.prepare().then(() => {
  //     console.log('Banner ad is ready');
  //   });
  // }
  // }
  ionViewDidLoad(){
    if(this.platform.is('cordova')){
    const interstitialConfig: AdMobFreeInterstitialConfig = {
      id: 'ca-app-pub-7954042482936232/7459101580',
      autoShow: true,
      isTesting: false
    };
    this.admobFree.interstitial.config(interstitialConfig);
    this.admobFree.interstitial.prepare().then(() => {
      // interstitial ad is ready to be displayed
      console.log("worker is ready")
    }).catch((e) => console.log(e));
  }
  }
  onIframeLoad() {
 this.ionViewDidLoad()
    this.loading = false;
  }
  
  
}
