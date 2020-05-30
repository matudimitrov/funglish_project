import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-whole-alphabet-info',
  templateUrl: './whole-alphabet-info.component.html',
  styleUrls: ['./whole-alphabet-info.component.scss']
})
export class WholeAlphabetInfoComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }


}
