import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  status:boolean = false;
  div1: number | undefined;
  div2:number | undefined;
  doThis(num1:string)
  {
    let num= parseInt(num1);
    
    console.log("Button clicked ....");
    for (let i = 2; i * i <= num; ++i)
            if (num % i == 0) {
              
              if (i != num / i) 
              {
                this.div1=i;
                this.div2=num/i;
                console.log(i+" * "+num/i);
                
              }
              else{
                this.div1=num/i;
                this.div2=num/i;
                console.log(num/i);
              }
                
            }
  }

}
