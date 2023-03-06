import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icons-app',
  templateUrl: 'icons-app.html'
})
export class IconApp implements OnInit  {

  @Input() icon: string =  String();
  @Input() url: string =  String();


  ngOnInit(): void {

  }

  onClick() {
    window.open(this.url)
  }



}
