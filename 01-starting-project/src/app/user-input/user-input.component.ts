import { Component, EventEmitter, Output,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { UserInput } from '../user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<UserInput>();

  InitialInvestment = '0';
  AnnualInvestment = '0';
  ExpectedReturn = '5';
  Duration = '10';

  onsubmit() {
    this.calculate.emit({
      initialInvestment: +this.InitialInvestment,
      annualInvestment: +this.AnnualInvestment,
      expectedReturn: +this.ExpectedReturn,
      duration: +this.Duration
    })
  }

}
