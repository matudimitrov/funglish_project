import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-letter-b',
  templateUrl: './letter-b.component.html',
  styleUrls: ['./letter-b.component.scss']
})
export class LetterBComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }
}
