import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BankRoutingModule } from "./bank-routing.module";

import { BankIndexComponent } from "./bank-index/bank-index.component";
import { BankService } from "./bank.service";
@NgModule({
  declarations: [BankIndexComponent],
  imports: [CommonModule, BankRoutingModule],
  exports: [],
  providers: [BankService]
})
export class BankModule {}
