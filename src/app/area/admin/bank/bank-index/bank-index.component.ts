import { Component, OnInit } from "@angular/core";

import { BankService } from "../bank.service";
import { Bank } from "src/app/models/bank";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "root-bank-index",
  templateUrl: "./bank-index.component.html",
  styleUrls: ["./bank-index.component.scss"]
})
export class BankIndexComponent implements OnInit {
  banks: Bank[];
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}
  showAddSec(content) {
    this.modalService.open(content, { backdropClass: "light-blue-backdrop" });
  }
}
