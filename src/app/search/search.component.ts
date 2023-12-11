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
  filters: Filter[] = [new Filter('','','','')];
  isBracketOpen: boolean = false;
  finalFilterList: Filter[] = [];
  
  addFilter() {

    let filterSize = this.filters.length;
    let lastInputFilter = this.filters[filterSize-1];
    if (this.isBracketOpen) {
      let finalFilterSize = this.finalFilterList.length;
      if (finalFilterSize == 0) {
        this.finalFilterList.push(lastInputFilter);  
      } else {
        let lastFinalFilterElement = this.finalFilterList[finalFilterSize-1];
        let isPartOfBracket = lastFinalFilterElement.isPartOfBracket;
        if (isPartOfBracket == true) {
          lastFinalFilterElement.childFilters.push(lastInputFilter);
          lastFinalFilterElement.hasChildren = true;
        } else {
          lastInputFilter.isPartOfBracket = true;
          this.finalFilterList.push(lastInputFilter);
        }
      }
    } else {
      this.finalFilterList.push(lastInputFilter);
    }
    this.filters.push(new Filter('','','',''));
    console.log('inputFilters :' , this.filters);
    console.log('finalFilters :' , this.finalFilterList);
  }

  startBracket() {
    console.log("bracket started");
    this.isBracketOpen = true;
  }

  endBracket() {
    console.log("bracket ended");
    this.isBracketOpen = false;
  }
}
