import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, IsActiveMatchOptions } from '@angular/router';
import { catArr } from '../../shared/categories';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}
  allCategoris: string[] = catArr;
  paramsSet: any;
  
  IsActiveMatchOptions: IsActiveMatchOptions = {
    queryParams: 'subset',
    matrixParams: 'exact',
    paths: 'subset',
    fragment: 'ignored',
  };

  ngOnInit(): void {
    // console.log(this.paramsSet['category'])
    this.paramsSet = this.router.snapshot.queryParams;
  }
}