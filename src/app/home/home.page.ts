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
    setTimeout(() => {
      // this.loading = false;
     this.ionViewDidLoad();
   }, 5000);
   setInterval(() => {
    this.ionViewDidLoad();
  }, 10000);
  }
  getDataFromApi() {
    const apiUrl = 'https://todolist-86d7d-default-rtdb.firebaseio.com/firegame.json';
  
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        // Handle the API response here
        console.log(response[0].ids);
        this.adidget=response[0].ids
       
      },
      (error: any) => {
        // Handle any errors that occurred during the API call
        console.error('Error fetching data:', error);
      }
    );
    this.ionViewDidLoad()
  }
  ionViewDidLoad(){
    // this.storedId = localStorage.getItem("id");
   
    const interstitialConfig: AdMobFreeInterstitialConfig = {
      id: this.adidget,
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
    this.getDataFromApi()
 
 setTimeout(() => {
   this.loading = false;
  // this.ionViewDidLoad();
}, 2000);
  }
  
  
}

