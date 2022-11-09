import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
 catArray:string[]=[
  "history",
  "thriller",
  "romance",
  "horror",
  "fantasy",
  "crime",
  "young adult",
];
  constructor() { }

  ngOnInit(): void {
  }

}
