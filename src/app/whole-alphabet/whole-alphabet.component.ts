import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-whole-alphabet',
  templateUrl: './whole-alphabet.component.html',
  styleUrls: ['./whole-alphabet.component.scss']
})
export class WholeAlphabetComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }

}
