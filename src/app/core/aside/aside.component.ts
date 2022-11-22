import { Component, OnInit } from '@angular/core';
import { catArr } from "../../shared/categories";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  
  constructor() { }
  allCategoris: string[]=catArr; 

  ngOnInit(): void {
    
  }

}
