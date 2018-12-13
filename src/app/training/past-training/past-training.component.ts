import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Exercise} from '../excercise.model';
import {MatSort, MatTableDataSource} from '@angular/material';
import {ExerciseService} from '../exercise.service';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  displayedColumns = ['date', 'name'];
  excercises: Exercise[] = [];

  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<Exercise>();

  constructor(private exerciseService: ExerciseService) {
  }

  ngOnInit() {
    this.dataSource.data = this.exerciseService.getCompletedOrCancelledExercises();
    this.excercises = this.exerciseService.getAvailableExercises();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
}
