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
    this.ionViewDidLoad();
  //  setInterval(()=>{
  //   this.ionViewDidLoad();
  //  },100000)
  }

  ionViewDidLoad(){
   
    const interstitialConfig: AdMobFreeInterstitialConfig = {
      id: 'ca-app-pub-7954042482936232/1792319231',
      autoShow: true,
      isTesting: false
    };
    this.admobFree.interstitial.config(interstitialConfig);
    this.admobFree.interstitial.prepare().then(() => {
      console.log("worker is ready")
    }).catch((e) => console.log(e));
  
  }
  onIframeLoad() {
 
 
 setTimeout(() => {
   this.loading = false;
}, 2000);
  }
  
  
}

