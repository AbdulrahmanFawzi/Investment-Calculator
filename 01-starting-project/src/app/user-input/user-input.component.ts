import { Component, EventEmitter, inject, Output,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { UserInput } from '../user-input.model';
import { InvestmentResultService } from '../investment.result.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  InitialInvestment = '0';
  AnnualInvestment = '0';
  ExpectedReturn = '5';
  Duration = '10';

  private investmentService = inject(InvestmentResultService);

  onsubmit() {
    
    this.investmentService.onCalculateInvestmentResults({
      initialInvestment: +this.InitialInvestment,
      annualInvestment: +this.AnnualInvestment,
      expectedReturn: +this.ExpectedReturn,
      duration: +this.Duration
    })
  }

}
