import { Component, OnInit } from '@angular/core';
  import { AdMobFree, AdMobFreeBannerConfig,AdMobFreeInterstitialConfig,AdMobFreeRewardVideoConfig} from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ApiData: any;
  url: any;
  loading: boolean = true;
  showIframe: boolean = false;
  adidget: any;
  storageService: any;
  storedId: any;

 
  constructor(private admobFree:AdMobFree,
    private platform: Platform,private http: HttpClient,private sanitizer: DomSanitizer,private videoPlayer: VideoPlayer) {
  }
  playVideo(url: string) {
    // Extracting the video URL from SafeResourceUrl
    const actualUrl = url.toString();
  
    this.videoPlayer.play(actualUrl).then(() => {
      console.log('Video completed');
    }).catch(err => {
      console.error(err);
    });
  }
  ngOnInit(){
    this.ApiCall()
 
  }
  ApiCall(){
    const randomParam = Math.floor(Math.random() * 1000);
    this.http.get(`https://plaese.onrender.com/api/movie?random=${randomParam}`).subscribe((response) => {
  console.log(response)
  this.ApiData = response
  this.url=this.ApiData.url
  this.getVideoUrl('')
});
  }
  getVideoUrl(videoId: any): SafeResourceUrl {
    
    const urlvideo = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(urlvideo);
  }
  canRefresh: boolean = true; // Define a boolean variable to control whether refresh is allowed

  doRefresh(he:any) {
    // if (this.canRefresh) {
    //   this.ApiCall();
    //   this.canRefresh = false; // Disable refresh temporarily
    //   setTimeout(() => {
    //     this.canRefresh = true; // Enable refresh after a certain period of time
    //   }, 5000); // Allow refresh after 5 seconds (adjust as needed)
    // }
    setTimeout(() => {
      this.ApiCall()
      he.target.complete();
    }, 2000);
      // ...
    
  }
  
 

  
  
}

