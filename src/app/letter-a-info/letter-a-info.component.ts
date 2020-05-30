import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-letter-a-info',
  templateUrl: './letter-a-info.component.html',
  styleUrls: ['./letter-a-info.component.scss']
})
export class LetterAInfoComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }
}
