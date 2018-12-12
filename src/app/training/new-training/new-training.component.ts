import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ExcerciseService} from '../excercise.service';
import {Excercise} from '../excercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();
  excercises: Excercise[] = [];

  constructor(private excerciseService: ExcerciseService) {
  }

  ngOnInit() {
    this.excercises = this.excerciseService.getAvailableExcercises();
  }

  onStartTraining() {
    this.trainingStart.emit();
  }
}
