import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-letter-a',
  templateUrl: './letter-a.component.html',
  styleUrls: ['./letter-a.component.scss']
})
export class LetterAComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }
}
