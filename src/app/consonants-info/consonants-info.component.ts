import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-consonants-info',
  templateUrl: './consonants-info.component.html',
  styleUrls: ['./consonants-info.component.scss']
})
export class ConsonantsInfoComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }
}
