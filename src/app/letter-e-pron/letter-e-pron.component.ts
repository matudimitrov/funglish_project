import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-letter-e-pron',
  templateUrl: './letter-e-pron.component.html',
  styleUrls: ['./letter-e-pron.component.scss']
})
export class LetterEPronComponent implements OnInit {
  msbapTitle = 'Audio Title';
  msbapAudioUrl = '../../assets/audio/e_sound (audio-extractor.net).mp3';   
   
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
    if(sessionStorage.getItem("letterE")) {
      return true;
    }
    else {
      return false;
    }
  }

}
