import { Component, OnInit } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig,AdMobFreeInterstitialConfig,AdMobFreeRewardVideoConfig} from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loading: boolean = true;
  constructor(private admobFree:AdMobFree) {
    this.showInterstitialAd()
  }
  ngOnInit(){
    this.showInterstitialAd()
    this.showBannerAd()
    // alert('Please on Portrait device first')
  }
  showBannerAd() {
    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-7954042482936232/9452612635',
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
      id: 'ca-app-pub-7954042482936232/3128561643',
      autoShow: true,
      isTesting: false
    };
    this.admobFree.interstitial.config(interstitialConfig);
    this.admobFree.interstitial.prepare().then(() => {
      // interstitial ad is ready to be displayed
    }).catch((e) => console.log(e));
  }
  onIframeLoad() {
    this.loading = false;
    this.showRewardedVideoAd()
  }
  showRewardedVideoAd() {
    // AdMob Rewarded Video Ad Unit ID
    const adUnitId = 'ca-app-pub-7954042482936232/8885065600';
  
    // Initialize AdMob
    this.admobFree.rewardVideo.config({
      id: adUnitId,
      isTesting: false, // Set to true during testing
      autoShow: true
    });
  
    // Show the Rewarded Video Ad
    this.admobFree.rewardVideo.prepare().then(() => {
      console.log('Rewarded Video Ad is ready');
    }).catch((error) => {
      console.log('Failed to prepare Rewarded Video Ad', error);
    });
  }
  
}
