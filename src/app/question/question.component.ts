import { Component, OnInit } from '@angular/core';
import {Question} from "../interfaces/question";
import {QuestionService} from "../services/question.service";

@Component({
  selector: 'app-question-page',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {


  constructor() { }


  ngOnInit(): void {

  }



}
