import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Score } from '../models/score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  getScoresURL = 'http://localhost:5177/scores';
  postScoreURL = 'http://localhost:5177/score';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'charset':'utf-8'
    })
  }

  getScores(): Observable<Score[]> {
    return this.httpClient.get<Score[]>(this.getScoresURL, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  addScore(score: Score): Observable<Score> {
    const body=JSON.stringify(score);

    var postReturn = this.httpClient.post<Score>(this.postScoreURL, body, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );

      postReturn.subscribe();
      return postReturn;
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
