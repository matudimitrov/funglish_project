import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-letter-d',
  templateUrl: './letter-d.component.html',
  styleUrls: ['./letter-d.component.scss']
})
export class LetterDComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }

}
