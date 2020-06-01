import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-final-test',
  templateUrl: './final-test.component.html',
  styleUrls: ['./final-test.component.scss']
})
export class FinalTestComponent implements OnInit {

  chosenAnswer: boolean = false;

  wrongAnswer: boolean = false;

  first1: boolean = false;
  second1: boolean = false;
  third1: boolean = false;
  fourth1: boolean = false;

  first2: boolean = false;
  second2: boolean = false;
  third2: boolean = false;
  fourth2: boolean = false;

  first3: boolean = false;
  second3: boolean = false;
  third3: boolean = false;
  fourth3: boolean = false;

  correctAnswers: number = 0;
  firstQuestionId: number = 0;
  secondQuestionId: number = 0;
  thirdQuestionId: number = 0;


  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
    sessionStorage.setItem("firstQuestionId", `0`);
    sessionStorage.setItem("secondQuestionId", `0`);
    sessionStorage.setItem("thirdQuestionId", `0`);
  }

  choooseAnswer(id: number, question: number) {
    if(question == 1) {
      if(id == 1) {
        this.first1 = true;
        this.second1 = false;
        this.third1 = false;
        this.fourth1 = false;
      }
      if(id == 2) {
        this.second1 = true;
        this.first1 = false;
        this.third1 = false;
        this.fourth1 = false;
      }
      if(id == 3) {
        this.third1 = true;
        this.first1 = false;
        this.second1 = false;
        this.fourth1 = false;

      }
      if(id == 4) {
        this.fourth1 = true;
        this.first1 = false;
        this.second1 = false;
        this.third1 = false;
      }
      sessionStorage.setItem("firstQuestionId", `${id}`);
    }
    if(question == 2) {
      if(id == 1) {
        this.first2 = true;
        this.second2 = false;
        this.third2 = false;
        this.fourth2 = false;
      }
      if(id == 2) {
        this.second2 = true;
        this.first2 = false;
        this.third2 = false;
        this.fourth2 = false;
      }
      if(id == 3) {
        this.third2 = true;
        this.first2 = false;
        this.second2 = false;
        this.fourth2 = false;
      }
      if(id == 4) {
        this.fourth2 = true;
        this.first2 = false;
        this.second2 = false;
        this.third2 = false;
      }
      sessionStorage.setItem("secondQuestionId", `${id}`);
    }
    if(question == 3) {
      if(id == 1) {
        this.first3 = true;
        this.second3 = false;
        this.third3 = false;
        this.fourth3 = false;
      }
      if(id == 2) {
        this.second3 = true;
        this.first3 = false;
        this.third3 = false;
        this.fourth3 = false;
      }
      if(id == 3) {
        this.third3 = true;
        this.first3 = false;
        this.second3 = false;
        this.fourth3 = false;
      }
      if(id == 4) {
        this.fourth3 = true;
        this.first3 = false;
        this.second3 = false;
        this.third3 = false;
      }
      sessionStorage.setItem("thirdQuestionId", `${id}`);
    }
   
  }

  goBack(): void {
    this.location.back();
  }
}
