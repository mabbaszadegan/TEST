import { Component, OnInit, Input } from "@angular/core";
import { Bank } from "../../../../models/bank";
import { BankService } from "../bank.service";

import { BankIndexComponent } from "../bank-index/bank-index.component";
@Component({
  selector: "root-bank-list",
  templateUrl: "./bank-list.component.html",
  styleUrls: ["./bank-list.component.scss"]
})
export class BankListComponent implements OnInit {
  @Input()
  banks: Bank[];

  constructor(
    private bankService: BankService,
    private a: BankIndexComponent
  ) {}

  ngOnInit(): void {
    this.getBanks();
  }

  getBanks(): void {
    this.bankService.getBanks().subscribe(bank => {
      this.a.banks = bank;
    });
  }

  deleteBank(bank: Bank) {
    this.banks = this.banks.filter(b => b != bank);
    this.bankService.deleteBank(bank).subscribe();
  }
}
