import { Component, OnInit } from '@angular/core';
  import { AdMobFree, AdMobFreeBannerConfig,AdMobFreeInterstitialConfig,AdMobFreeRewardVideoConfig} from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loading: boolean = true;
  showIframe: boolean = false;
  adidget: any;
  storageService: any;
  storedId: any;
  constructor(private admobFree:AdMobFree,private platform: Platform,private http: HttpClient) {
  }
  ngOnInit(){
    this.onIframeLoad()
  
  }
 
  ionViewDidLoad(){
    // this.storedId = localStorage.getItem("id");
   
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
  onIframeLoad() {
    this.ionViewDidLoad()
 
 setTimeout(() => {
   this.loading = false;
  // this.ionViewDidLoad();
}, 2000);
  }
  
  
}

