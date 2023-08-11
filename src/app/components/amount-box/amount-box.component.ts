import { Component, OnInit } from '@angular/core';
import { AmountDataModel } from 'src/app/model/amountDataModel';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-amount-box',
  templateUrl: './amount-box.component.html',
  styleUrls: ['./amount-box.component.css']
})
export class AmountBoxComponent implements OnInit {

  constructor(private amounnt: AccountsService) { }


  accountDetails: AmountDataModel = {
    amountValue: 0,
    limit: 0,
    totalAmount: 0
  }




  ngOnInit(): void {

    this.getAmountValues()

  }



  getAmountValues() {
    this.amounnt.getAccount().subscribe(data => {

      this.accountDetails.amountValue = data.account.balance
      this.accountDetails.limit = data.account.limit
      this.accountDetails.totalAmount = this.accountDetails.amountValue + this.accountDetails.limit

    })
  }

}
