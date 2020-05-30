import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-vowels-info',
  templateUrl: './vowels-info.component.html',
  styleUrls: ['./vowels-info.component.scss']
})
export class VowelsInfoComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }
}
