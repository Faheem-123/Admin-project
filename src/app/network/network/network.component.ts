import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface PeriodicElement {
  title: string;
  description: number;
  url:string
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {title: 'Boron', description: 10.811,url:'https://www.', action: ''},
  {title: 'Boron', description: 10.811,url:'https://www.', action: ''},
  {title: 'Boron', description: 10.811,url:'https://www.', action: ''},
  {title: 'Boron', description: 10.811,url:'https://www.', action: ''},
  {title: 'Boron', description: 10.811,url:'https://www.', action: ''},
  {title: 'Boron', description: 10.811,url:'https://www.', action: ''},
];

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  displayedColumns: string[] = ['title', 'description','url', 'action'];
  dataSource = ELEMENT_DATA;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onClick() {
    // console.log(this.loginForm.value)
        this.router.navigate(['offer-category/edit-category'])
  }

}
