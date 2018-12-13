import { Component, OnInit } from '@angular/core';
import {Exercise} from '../excercise.model';
import {MatTableDataSource} from '@angular/material';
import {ExerciseService} from '../exercise.service';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit {
  displayedColumns = ['date', 'name'];
  excercises: Exercise[] = [];

  dataSource = new MatTableDataSource<Exercise>();

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit() {
    this.dataSource.data = this.exerciseService.getCompletedOrCancelledExercises();
    this.excercises = this.exerciseService.getAvailableExercises();
  }

}
