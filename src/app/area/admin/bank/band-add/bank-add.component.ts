import { Component, OnInit, Input } from "@angular/core";
import { BankService } from "../bank.service";
import { Bank } from "../../../../models/bank";
import { Router } from "@angular/router";
import { BankIndexComponent } from "../bank-index/bank-index.component";

@Component({
  selector: "root-bank-add",
  templateUrl: "./bank-add.component.html",
  styleUrls: ["./bank-add.component.scss"]
})
export class BankAddComponent implements OnInit {
  @Input()
  banks: Bank[];

  constructor(
    private bankService: BankService,
    private a: BankIndexComponent
  ) {}

  ngOnInit(): void {}

  addBank(name: string): void {
    name = name.trim();

    if (!name) return;
    this.bankService.addBank({ BankName: name } as Bank).subscribe(bank => {
      this.banks.push(bank);
    });
  }
}
