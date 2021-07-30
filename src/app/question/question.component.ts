import { Component, OnInit } from '@angular/core';
import {Question} from "../interfaces/question";
import {QuestionService} from "../services/question.service";
import {AddQuestionComponent} from "./add-question/add-question.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-question-page',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent implements OnInit {


  constructor(private dialog: MatDialog ) { }


  ngOnInit(): void {

  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddQuestionComponent);
  }

}
