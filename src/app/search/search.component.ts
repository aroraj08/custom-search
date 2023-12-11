import { Component } from '@angular/core';
import { Filter } from '../model/Filter';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  keys: String[] = ['issuer', 'parAmt', 'financialMonth'];
  operators: String[] = ['contains', 'equals', 'startsWith', 'endsWith'];
  conditions: String[] = ['AND', 'OR'];
  filters: Filter[] = [new Filter('','','')];
  bracketOpen: boolean = false;

  addFilter() {
    this.filters.push(new Filter('','',''));
    console.log(this.filters);
  }

  startBracket() {
    console.log("bracket started");
    this.bracketOpen = true;
  }

  endBracket() {
    console.log("bracket ended");
    this.bracketOpen = false;
  }
}
