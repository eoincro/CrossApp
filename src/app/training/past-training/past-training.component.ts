import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Exercise} from '../excercise.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ExerciseService} from '../exercise.service';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
  displayedColumns = ['date', 'name'];
  excercises: Exercise[] = [];
  filterValue: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<Exercise>();

  constructor(private exerciseService: ExerciseService) {
  }

  ngOnInit() {
    this.dataSource.data = this.exerciseService.getCompletedOrCancelledExercises();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.
      paginator = this.paginator;
  }

  doFilter() {
    this.filterValue = 'Shoulder Press';
    this.dataSource.filter = this.filterValue.trim().toLocaleLowerCase();
  }
}
