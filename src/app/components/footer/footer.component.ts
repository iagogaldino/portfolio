import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  faCoffee = faCoffee;

  constructor(public appService: AppService) { }


}
