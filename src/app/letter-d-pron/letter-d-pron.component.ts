import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-letter-d-pron',
  templateUrl: './letter-d-pron.component.html',
  styleUrls: ['./letter-d-pron.component.scss']
})
export class LetterDPronComponent implements OnInit {
  msbapTitle = 'Audio Title';
  msbapAudioUrl = '../../assets/audio/d_sound (audio-extractor.net).mp3';   
   
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
    if(sessionStorage.getItem("letterD")) {
      return true;
    }
    else {
      return false;
    }
  }

}
