import {Excercise} from './excercise.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExcerciseService {
  availableExcercises: Excercise[] = [
    {id: 'shoulder-press', name: 'Shoulder Press'},
    {id: 'deadlift', name: 'Deadlift'},
    {id: 'floor-press', name: 'Floor Press'},
    {id: 'front-squat', name: 'Front Squat'},
    {id: 'back-squat', name: 'Back Squat'}
  ];
}
