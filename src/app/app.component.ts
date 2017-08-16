import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputValue;
  title = 'advanced application';


  newvariable;
  outputValue: number; 

  dataCollection = ['coffe', 'cheese', 'bread', 'peanut butter', 'jam', 'tea', 'mayonnaise'];

  inputType="checkbox"; 
  urls="http://yahoo.com"; 
  credentials = 'sprikot';

  doThis(event: MouseEvent){
    (<HTMLButtonElement>event.target).style.backgroundColor = 'blue';
    if(sizeOf (<String>this.inputValue) !== 0) 
        this.outputValue = 'You typed: ' + this.inputValue;
    return this.outputValue;
  }

  doThat(event: MouseEvent){
      if(event.type === 'mouseenter')
         (<HTMLAnchorElement>event.target).style.fontWeight = 'bold';
      else {
        if(event.type === 'mouseleave')
         (<HTMLAnchorElement>event.target).style.fontWeight = 'normal';          
      }

  }


  constructor() {

  }
}
