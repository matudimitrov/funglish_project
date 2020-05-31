import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-letter-b-pron',
  templateUrl: './letter-b-pron.component.html',
  styleUrls: ['./letter-b-pron.component.scss']
})
export class LetterBPronComponent implements OnInit {

  msbapTitle = 'Audio Title';
  msbapAudioUrl = '../../assets/audio/b_sound (audio-extractor.net).mp3';   
   
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
    if(sessionStorage.getItem("letterB")) {
      return true;
    }
    else {
      return false;
    }
  }

}
