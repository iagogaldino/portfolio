import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/animations/fadeInAnimation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickWa(whatsappphonenumber: string) : void{
    whatsappphonenumber? window.open(`https://wa.me/${whatsappphonenumber}/?text=urlencodedtext`) : null
  }

}
