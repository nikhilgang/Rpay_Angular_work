import { Component, OnInit } from '@angular/core';
import { PackageDetails } from '../PackageDetails';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {


  status: boolean = false;
  pkgArr: PackageDetails[] = [];

  tmpArr: PackageDetails[] = [];
  print: boolean = false;
  count: number = 0;
  searchText: any;
  a: number = 0.259;
  upimg:string="assets/up.png"
  downimg:string="assets/down.png"
  constructor() {
    let pkg1 = new PackageDetails("Kerla Tour", 3, 85000, 20, "assets/ker1.jpg", 4.5);
    let pkg2 = new PackageDetails("Kerla Tour", 5, 95000, 30, "assets/ker2.jpg", 4.2);
    let pkg3 = new PackageDetails("Kerla Tour", 1, 50000, 25, "assets/ker3.jpg", 3.8);
    let pkg4 = new PackageDetails("Shimla Tour", 10, 140000, 40, "assets/shim.jpg", 4.8);
    let pkg5 = new PackageDetails("Shimla Tour", 8, 20000, 10, "assets/shim1.jpg", 4.0);
    let pkg6 = new PackageDetails("Nainital Tour", 10, 25000, 35, "assets/hari.jpg", 5.0);
    let pkg7 = new PackageDetails("Nainital Tour", 2, 25000, 25, "assets/nai1.jpg", 4.1);
    let pkg8 = new PackageDetails("Nainital Tour", 10, 125000, 10, "assets/nai2.jpg", 3.5);
    let pkg9 = new PackageDetails("Shimla Tour", 15, 450000, 10, "assets/shim2.jpg", 4.0);

    this.pkgArr.push(pkg1);
    this.pkgArr.push(pkg2);
    this.pkgArr.push(pkg3);
    this.pkgArr.push(pkg4);
    this.pkgArr.push(pkg5);
    this.pkgArr.push(pkg6);
    this.pkgArr.push(pkg7);
    this.pkgArr.push(pkg8);
    this.pkgArr.push(pkg9);




  }

  ngOnInit(): void {
  }
  emptyArr()
  {
    this.tmpArr=[];
    this.count=0;
  }
  addPackage(pkg: PackageDetails) {
    console.log("inside add package " + pkg.packageName);
    if (this.tmpArr.includes(pkg)) {
      const ind = this.tmpArr.indexOf(pkg);
      this.tmpArr.splice(ind, 1);
      this.count--;
    }
    else {
      this.tmpArr.push(pkg);
      this.count++;
    }

  }
  doThis() {
    if (this.count == 2)
      this.print = true;
  }


  sortDataAsc() {

    let newArr = this.pkgArr.sort((a, b) => a.cost - b.cost);
    this.pkgArr = newArr;
  }
  sortDataDsc() {
    let newArr = this.pkgArr.sort((a, b) => b.cost - a.cost);
    this.pkgArr = newArr;
  }

}
