import { Component, OnInit } from "@angular/core";

import { BankService } from "../bank.service";
import { Bank } from "../../../../models/bank";

@Component({
  selector: "root-bank-index",
  templateUrl: "./bank-index.component.html",
  styleUrls: ["./bank-index.component.scss"]
})
export class BankIndexComponent implements OnInit {
  banks: Bank[];
  constructor(private bankService: BankService) {}

  ngOnInit() {
    this.getBanks();
  }

  getBanks(): void {
    this.bankService.getBanks().subscribe(bank => {
      this.banks=bank;
    });
  }
}
