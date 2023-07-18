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
  constructor(private admobFree:AdMobFree,private platform: Platform) {
   
  }
  ngOnInit(){
    this.showInterstitialAd()
    this.showBannerAd()
    // alert('Please on Portrait device first')
  }
  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.showInterstitialAd();
    });
  }
  showBannerAd() {
    const bannerConfig: AdMobFreeBannerConfig = {
      id: '',
      isTesting: false,
      autoShow: true,
    };
    this.admobFree.banner.config(bannerConfig);
    this.admobFree.banner.prepare().then(() => {
      console.log('Banner ad is ready');
    });
  }
  showInterstitialAd() {
    const interstitialConfig: AdMobFreeInterstitialConfig = {
      id: 'ca-app-pub-7954042482936232/1707440829',
      autoShow: true,
      isTesting: false
    };
    this.admobFree.interstitial.config(interstitialConfig);
    this.admobFree.interstitial.prepare().then(() => {
      // interstitial ad is ready to be displayed
    }).catch((e) => console.log(e));
  }
  onIframeLoad() {
    this.showInterstitialAd()
    this.loading = false;
  }
  
  
}
