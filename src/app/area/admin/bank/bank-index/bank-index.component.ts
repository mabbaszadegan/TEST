import { Component, OnInit } from "@angular/core";

import { BankService } from "../bank.service";
import { Bank } from "src/app/models/bank";

@Component({
  selector: "root-bank-index",
  templateUrl: "./bank-index.component.html",
  styleUrls: ["./bank-index.component.scss"]
})

export class BankIndexComponent implements OnInit {
  banks: Bank[];
  constructor(private bankService: BankService) {}

  ngOnInit() {
  
  }

 
}
