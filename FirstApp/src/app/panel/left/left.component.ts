import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  status:boolean = false;
  sum: number | undefined;
  doThis(num1:string,num2:string)
  {
    this.sum= parseInt(num1)+parseInt(num2);
    
    console.log("Button clicked ...."+this.sum);
  }

}
