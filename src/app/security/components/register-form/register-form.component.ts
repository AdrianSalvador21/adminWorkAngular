import {Component, Input, OnInit} from '@angular/core';
import {MatStepper} from '@angular/material';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @Input()
  stepper: MatStepper;
  constructor() { }

  ngOnInit() {
  }
  viewLogin() {
    this.stepper.previous();
  }

}
