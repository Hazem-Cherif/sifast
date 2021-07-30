import { Component, OnInit } from '@angular/core';
import {Question} from "../../interfaces/question";
import {QuestionService} from "../../services/question.service";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  question : Question = {}
  Type: any = ['PRIVATE', 'PUBLIC']
  Category: any = ['JAVA', 'ANGULAR']

  constructor(private questionService: QuestionService) { }


  ngOnInit(): void {
  }

  save() {
    this.question.status = "APPROVED"
    this.questionService.addQuestion(this.question).subscribe(() => this.question);
    console.log(this.question)
    alert('You successfully added the new Formation' );
  }

}
