import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-letter-e-info',
  templateUrl: './letter-e-info.component.html',
  styleUrls: ['./letter-e-info.component.scss']
})
export class LetterEInfoComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }
}
