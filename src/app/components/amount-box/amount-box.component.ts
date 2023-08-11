import { Component } from '@angular/core';
import { AmountDataModel } from 'src/app/model/amountDataModel';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-amount-box',
  templateUrl: './amount-box.component.html',
  styleUrls: ['./amount-box.component.css']
})
export class AmountBoxComponent {

  constructor(private amounnt: AccountsService) { }

  accountDetails: AmountDataModel = {
    amountValue: 0,
    limit: 0,
    totalAmount: 0
  }

}
