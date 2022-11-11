import { Injectable } from "@angular/core";
import { NgModel } from "@angular/forms";

@Injectable({providedIn: 'root'})
export class Fun {

  

ratingCount(arr:number[]) :number{
    return arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
  }
  
 averageRating(arr:number[]):number{
    if (this.ratingCount(arr) === 0) {
      return 0;
    } else {
      return (
        (arr[0] * 5 + arr[1] * 4 + arr[2] * 3 + arr[3] * 2 + arr[4]) /
        this.ratingCount(arr)
      );
    }
  }
}