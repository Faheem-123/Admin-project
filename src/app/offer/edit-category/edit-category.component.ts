import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private router:Router) { }
  editCategory:FormGroup
  ngOnInit(): void {
    this.editCategory=new FormGroup({
      categoryName: new FormControl(null,[Validators.required]),
      description: new FormControl(null,[Validators.required]),
  }); 
  }

  onClick() {
     console.log(this.editCategory.value)
        this.router.navigate(['offer-category'])
  }

}
