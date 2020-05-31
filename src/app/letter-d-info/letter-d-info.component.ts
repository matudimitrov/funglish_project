import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-letter-d-info',
  templateUrl: './letter-d-info.component.html',
  styleUrls: ['./letter-d-info.component.scss']
})
export class LetterDInfoComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }

}
