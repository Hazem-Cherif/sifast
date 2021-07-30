import { Injectable } from '@angular/core'
import { Question } from '../interfaces/question'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {


  constructor(private http: HttpClient) {
  }

  addQuestion(q: Question) {
    return this.http.post(environment.BACK_END_URL, q);
  }
}
