import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-letter-d-test',
  templateUrl: './letter-d-test.component.html',
  styleUrls: ['./letter-d-test.component.scss']
})
export class LetterDTestComponent implements OnInit {

  chosenAnswer: boolean = false;

  wrongAnswer: boolean = false;

  first: boolean = false;
  second: boolean = false;
  third: boolean = false;
  fourth: boolean = false;


  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  choooseWrongAnswer(id: number) {
    if(!this.chosenAnswer) {
    this.chosenAnswer = true;
    this.wrongAnswer = true;
    if(id == 1) {
      this.first = true;
    }
    if(id == 3) {
      this.third = true;
    }
    if(id == 4) {
      this.fourth = true;
    }
  }

  }

  chooseCorrectAnswer() {
    if(!this.chosenAnswer) {
    this.chosenAnswer = true;
    this.wrongAnswer = false;
    sessionStorage.setItem("letterD" , 'true')
    }
  }
  goBack(): void {
    this.location.back();
  }
  refresh(): void {
    window.location.reload();
}

}
