import {Component, OnInit} from '@angular/core';
import {ExerciseService} from '../exercise.service';
import {Exercise} from '../excercise.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  excercises: Exercise[] = [];

  constructor(private excerciseService: ExerciseService) {
  }

  ngOnInit() {
    this.excercises = this.excerciseService.getAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.excerciseService.startExercise(form.value.excercise);
  }
}
