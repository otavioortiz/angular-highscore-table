import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-score-adder',
  templateUrl: './score-adder.component.html',
  styleUrls: ['./score-adder.component.css']
})
export class ScoreAdderComponent implements OnInit {

  scoreForm!: FormGroup;
  name:string = "";
  score:number = 0;

  constructor(private formBuilder: FormBuilder, private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.scoreForm = this.formBuilder.group({
			name:  new FormControl('', 
      Validators.compose([Validators.required, Validators.minLength(3)])),
			score: new FormControl('', 
      Validators.compose([Validators.required]))
		});

  }

  submit() {
    if (this.scoreForm.valid) {
      this.scoreService.addScore(this.scoreForm.value);
      return;
    }
  }

}
