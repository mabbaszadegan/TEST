import { Component } from '@angular/core';
import {} from 'bootstrap'
import { bank } from './models/bank';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='تست';
  banks:bank[];
/**
 *
 */

}
