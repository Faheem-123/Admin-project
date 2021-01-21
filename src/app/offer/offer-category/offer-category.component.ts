import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface PeriodicElement {
  name: string;
  description: number;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Boron', description: 10.811, action: 'B'},
  { name: 'Carbon', description: 12.0107, action: 'C'},
  { name: 'Nitrogen', description: 14.0067, action: 'N'},
  { name: 'Oxygen', description: 15.9994, action: 'O'},
  {name: 'Fluorine', description: 18.9984, action: 'F'},
  { name: 'Neon', description: 20.1797, action: 'Ne'},
  { name: 'Neon', description: 20.1797, action: 'Ne'}
];

@Component({
  selector: 'app-offer-category',
  templateUrl: './offer-category.component.html',
  styleUrls: ['./offer-category.component.css']
})
export class OfferCategoryComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'action'];
  dataSource = ELEMENT_DATA;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onClick() {
    // console.log(this.loginForm.value)
        this.router.navigate(['offer-category/edit-category'])
  }

}
