import { Component, OnInit } from '@angular/core';
import { Bank } from '../models/bank';
import { BankService } from './bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css'],
  providers:[BankService]
})
export class BankComponent implements OnInit {
banks:Bank[];

  constructor(private myService:BankService) { }

  ngOnInit() {
    this.getBanks();
  }
  getBanks():void{
this.myService.get().subscribe(banks=>this.banks=banks);
  }
}


