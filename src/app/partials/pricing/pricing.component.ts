import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  isMonthly: boolean = true;

  toggleTabs(type: 'monthly' | 'annual'){
    this.isMonthly = type === 'monthly';
  }
}
