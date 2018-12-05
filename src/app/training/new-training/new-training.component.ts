import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ExcerciseService} from '../excercise.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();

  constructor(private excerciseService: ExcerciseService) {
  }

  ngOnInit() {
  }

  onStartTraining() {
    this.trainingStart.emit();
  }
}
