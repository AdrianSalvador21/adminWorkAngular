import {Component, Input, OnInit} from '@angular/core';
import {MatStepper} from '@angular/material';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input()
  stepper: MatStepper;

  constructor() { }

  ngOnInit() {
  }
  viewRegister() {
    this.stepper.next();
  }

}
