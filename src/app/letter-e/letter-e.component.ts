import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-letter-e',
  templateUrl: './letter-e.component.html',
  styleUrls: ['./letter-e.component.scss']
})
export class LetterEComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }

}
