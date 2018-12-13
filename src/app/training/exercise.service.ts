import {Exercise} from './excercise.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  exerciseChanged = new Subject<Exercise>();
  private exercises: Exercise[] = [{id: 'shoulder-press', name: 'Shoulder Press', date: '23/12/2018'},
    {id: 'deadlift', name: 'Deadlift',  date: '23/12/2018'}];
  private availableExercises: Exercise[] = [
    {id: 'shoulder-press', name: 'Shoulder Press'},
    {id: 'deadlift', name: 'Deadlift'},
    {id: 'floor-press', name: 'Floor Press'},
    {id: 'front-squat', name: 'Front Squat'},
    {id: 'back-squat', name: 'Back Squat'}
  ];
  private runningExercise: Exercise;

  getAvailableExercises() {
    return this.availableExercises.slice();
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercises.find(
      ex => ex.id === selectedId
    );
    this.exerciseChanged.next({...this.runningExercise});
  }

  getRunningExercise() {
    return {...this.runningExercise};
  }

  getCompletedOrCancelledExercises() {
    return this.exercises.slice();
  }
}
