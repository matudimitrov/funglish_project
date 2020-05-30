import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-consonants',
  templateUrl: './consonants.component.html',
  styleUrls: ['./consonants.component.scss']
})
export class ConsonantsComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }


}
