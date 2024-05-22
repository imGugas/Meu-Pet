import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  query!: string;
  shops: any[] = [];
  allShops: any[] = [];

 
  constructor() { }

  ngOnInit() {
    this.allShops = [
      { id: 1, name: 'PET shop'},
      { id: 2, name: 'Appet'},
      { id: 3, name: 'Casa de ração'},
    ];
  }

  onSearchChange(event: { detail: { value: string; }; }) { 
  console.log(event.detail.value);
  this.query = event.detail.value.toLowerCase();
  this.querySearch();
}

querySearch() {
  this.shops = [];
  if (this.query.length > 0) {
    this.shops = this.allShops.filter((d) => {
      return d.name.toLowerCase().indexOf(this.query) !== -1 || !this.query;
    });
  }
}

getCategories(array: any[]) {
  return array.join(', ');
} 



}
