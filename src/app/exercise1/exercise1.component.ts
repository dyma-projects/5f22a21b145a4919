import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {
  recupValue: string;
  constructor() { 
    this.recupValue = '';
    this.colorRecupValue = {}
  }

  colorRecupValue: {}

  setColorRecupValue() {
    if(this.recupValue.length > 4) {
      this.colorRecupValue = {
        "font-style": "italic",
        "font-weight": "bold",
        "color": "green"
      }
    } else {
      this.colorRecupValue = {
        "font-style": "normal",
        "font-weight": "normal",
        "color": "#333"
      }
    }
    setTimeout(() => {
      this.setColorRecupValue()
    }, 3000);
  }
  

  ngOnInit(): void {
    this.setColorRecupValue()
  }

}
