import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.scss']
})
export class TestResultComponent implements OnInit {
  
  firstCorrectId: number = 2
  secondCorrectId: number = 4;
  thirdCorrectId: number = 1;
  correctAnswers: number = 0;

  constructor() { }

  ngOnInit(): void {
    let first = sessionStorage.getItem("firstQuestionId");
    let second = sessionStorage.getItem("secondQuestionId");
    let third = sessionStorage.getItem("thirdQuestionId");
    console.log(first);
    console.log(second);
    console.log(third);
    if(this.firstCorrectId == parseInt(first)) {
      this.correctAnswers +=1;
    }
    if(this.secondCorrectId == parseInt(second)) {
      this.correctAnswers +=1;
    }
    if(this.thirdCorrectId == parseInt(third)) {
      this.correctAnswers +=1;
    }
    console.log(this.correctAnswers);
    
  }

}
