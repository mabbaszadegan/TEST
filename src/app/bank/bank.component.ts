import { Component, OnInit } from '@angular/core';
import { bank } from '../models/bank';
import { MyService } from '../services/service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css'],
  providers:[MyService]
})
export class BankComponent implements OnInit {
banks:bank[];

  constructor(private myService:MyService) { }

  ngOnInit() {
    this.getBanks();
  }
  getBanks():void{
this.myService.getAllBanks().subscribe(banks=>this.banks=banks);
  }
}


