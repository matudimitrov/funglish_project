import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-letter-a-pron',
  templateUrl: './letter-a-pron.component.html',
  styleUrls: ['./letter-a-pron.component.scss']
})
export class LetterAPronComponent implements OnInit {

  msbapTitle = 'Audio Title';
  msbapAudioUrl = '../../assets/audio/y2mate.com - English Alphabet Sounds_Sx3QNVXyyKc_1080p (audio-extractor.net).mp3';   
   
  msbapDisplayTitle = false; 
  msbapDisplayVolumeControls = true;    

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }

  hasAnswered() {
    if(sessionStorage.getItem("letterA")) {
      return true;
    }
    else {
      return false;
    }
  }
}
