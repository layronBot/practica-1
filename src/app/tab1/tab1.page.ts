import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor() {}

  ngOnInit(): void {
      console.log("Hi World in IONIC");

      let numero = 20;
      debugger;
      numero = 35;
      numero = 40;
      numero = 250;

      console.log("La variable toma este valor "+numero);
  }


}
