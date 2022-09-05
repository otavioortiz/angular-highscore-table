import { Component, OnInit } from '@angular/core';
import { Score } from '../models/score';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.css']
})
export class ScoreTableComponent implements OnInit {

  scores!: Score[];

  displayedColumns: string[] = ['position', 'name', 'score'];

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.getScores();
  }

  getScores() {
    this.scoreService.getScores().subscribe((scores: Score[]) => {
      this.scores = scores;
    });
  }

}
