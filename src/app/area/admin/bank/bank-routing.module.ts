import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BankIndexComponent } from "./bank-index/bank-index.component";

const routes: Routes = [
  {
    path: "",
    component: BankIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule {}
