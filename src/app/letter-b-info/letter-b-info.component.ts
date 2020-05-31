import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-letter-b-info',
  templateUrl: './letter-b-info.component.html',
  styleUrls: ['./letter-b-info.component.scss']
})
export class LetterBInfoComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }

}
