import { Component, OnInit } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig,AdMobFreeInterstitialConfig,AdMobFreeRewardVideoConfig} from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private admobFree:AdMobFree) {
    this.showInterstitialAd()
  }
  ngOnInit(){
    this.showInterstitialAd()
    this.showBannerAd()
    alert('Please on Portrait')
  }
  showBannerAd() {
    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-7954042482936232/2741183872',
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
      id: 'ca-app-pub-7954042482936232/4841529761',
      autoShow: true,
      isTesting: false
    };
    this.admobFree.interstitial.config(interstitialConfig);
    this.admobFree.interstitial.prepare().then(() => {
      // interstitial ad is ready to be displayed
    }).catch((e) => console.log(e));
  }
}
