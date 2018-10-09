import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BankRoutingModule } from "./bank-routing.module";

import { BankIndexComponent } from "./bank-index/bank-index.component";
import { BankListComponent } from "./bank-list/bank-list.component";
import { BankAddComponent } from "./band-add/bank-add.component";

import { BankService } from "./bank.service";
@NgModule({
  declarations: [BankIndexComponent, BankListComponent, BankAddComponent],
  imports: [CommonModule, BankRoutingModule],
  exports: [],
  providers: [BankService]
})
export class BankModule {}
