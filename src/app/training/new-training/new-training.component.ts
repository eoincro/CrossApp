import {Component, OnInit} from '@angular/core';
import {ExerciseService} from '../exercise.service';
import {NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  excercises: Observable<any>;

  constructor(private excerciseService: ExerciseService, private db: AngularFirestore) {
  }

  ngOnInit() {
    this.excercises = this.db
      .collection('availableExcericises')
      .snapshotChanges();
  }

  onStartTraining(form: NgForm) {
    this.excerciseService.startExercise(form.value.excercise);
  }
}
